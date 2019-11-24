import graphene
import school.schema as school_schema
import rating.schema as rating_schema


class Query(school_schema.Query, graphene.ObjectType):
    pass


class Mutation(rating_schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
