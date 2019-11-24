from django.shortcuts import render

from .models import Location

from graphene_django import DjangoObjectType

class LocationType(DjangoObjectType):
    class Meta:
        model = Location

# Create your views here.
