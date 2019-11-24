from decimal import Decimal

from django.shortcuts import render
from .models import Rating

from graphene import Mutation, Int, Field, ObjectType, String
from graphene_django import DjangoObjectType


class RatingType(DjangoObjectType):
    class Meta:
        model = Rating


class CreateRating(Mutation):
    class Arguments:
        id= Int()
        school_id = Int()
        infra = Int()
        motivacao = Int()
        alimentacao = Int()
        seguranca = Int()
        diversidade = Int()
        comunicacao = Int()
        comment = String()
        nome = String()
        tipo_pessoa = String()

    rating = Field(RatingType)

    def mutate(self, info, *args, **kwargs):
        absolute = Decimal(0.0)
        counter = Decimal(0.0)
        for argument in kwargs.values():
            if(type(argument) == int and argument != 0):
                absolute += argument
                counter += 1
        if counter:
            kwargs.update({'absolute': Decimal(absolute)/counter})


        new_item = Rating.objects.create(**kwargs)
        return CreateRating(
            new_item
        )


class Mutation(ObjectType):
    create_rating = CreateRating.Field()
