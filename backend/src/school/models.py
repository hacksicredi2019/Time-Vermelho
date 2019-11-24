from django.db import models

from location.models import Location

FEDERAL = 'federal'
ESTADUAL = 'estadual'
MUNICIPAL = 'municipal'
PARTICULAR = 'particular'

CHILDHOOD_EDUCATION = 'infantil'
ELEMENTARY = 'fundamental'
HIGH_SCHOOL = 'medio'

CATEGORY_OPTIONS = [
    (ESTADUAL, 'Estadual'),
    (FEDERAL, 'Federal'),
    (MUNICIPAL, 'Municipal'),
    (PARTICULAR, 'Particular')
]

LEVEL_OPTIONS = [
    (ELEMENTARY, 'Ensino Fundamental'),
    (CHILDHOOD_EDUCATION, 'Educação Infantil'),
    (HIGH_SCHOOL, 'Ensino Médio')
]



class Level(models.Model):
    slug = models.CharField(max_length=100, choices=LEVEL_OPTIONS)

    def __str__(self):
        return self.get_slug_display()


class School(models.Model):
    name = models.CharField(max_length=100)
    nro_entidade = models.BigIntegerField(blank=True)
    category = models.CharField(max_length=100, choices=CATEGORY_OPTIONS, default=ESTADUAL)
    phone = models.CharField(max_length=20)
    email = models.EmailField(max_length=50)
    description = models.TextField(max_length=1000)
    level = models.ManyToManyField(Level)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, null=True)
    conveniada = models.BooleanField(default=False)
    agua = models.BooleanField(default=False)
    esgoto = models.BooleanField(default=False)
    lab_info = models.BooleanField(default=False)
    lab_ciencia = models.BooleanField(default=False)
    quadra = models.BooleanField(default=False)
    biblioteca = models.BooleanField(default=False)
    parque_infantil = models.BooleanField(default=False)
    pne = models.BooleanField(default=False)
    patio = models.BooleanField(default=False)
    internet = models.BooleanField(default=False)
    merenda = models.BooleanField(default=False)
    aee = models.BooleanField(default=False)
    atividade_extracurricular = models.BooleanField(default=False)
    nro_funcionarios = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class SchoolMedia(models.Model):
    school = models.ForeignKey(School, on_delete=models.CASCADE)
    file_object = models.ImageField()

    def __str__(self):
        return self.school.name
# Create your models here.
