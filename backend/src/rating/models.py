from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


from school.models import School


class Rating(models.Model):
    school = models.ForeignKey(School, on_delete=models.CASCADE)
    absolute = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(5)], default=0
    )
    infra = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(5)], default=0
    )
    motivacao = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(5)], default=0
    )
    alimentacao = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(5)], default=0
    )
    seguranca = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(5)], default=0
    )
    diversidade = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(5)], default=0
    )
    comunicacao = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(5)], default=0
    )
    comment = models.TextField(max_length=280)
    nome = models.CharField(max_length=100)
    tipo_pessoa = models.CharField(max_length=50)



# Create your models here.
