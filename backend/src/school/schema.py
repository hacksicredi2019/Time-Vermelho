import logging

from decimal import Decimal
from graphene import List, Field, String, Int
from graphene_django import DjangoObjectType

from django.core.paginator import Paginator

from school.models import School, Level
from location.schema import LocationType


logger = logging.getLogger(__name__)


class SchoolType(DjangoObjectType):
    rate = Field(String)
    location = Field(LocationType)

    class Meta:
        model = School

    def resolve_rate(self, info):
        ratings = self.rating_set.all()
        total = 0.0

        for rate in ratings:
            total = total + rate.absolute

        return 0 if not total else "{0:.1f}".format(total/ratings.count())

    def resolve_location(self, info):
        return self.location


class SchoolLevel(DjangoObjectType):
    class Meta:
        model = Level


class Query(object):
    school = List(
        SchoolType,
        name=String(),
        index=Int(),
        page=Int()
    )

    def resolve_category(self, info):
        return str(self.category)

    def resolve_school(self, info, name="", index=None, page=1):
        if index:
            return School.objects.filter(pk=index)
        objects = School.objects.filter(name__icontains=name)
        paginator = Paginator(objects, 5)
        return paginator.page(page)
