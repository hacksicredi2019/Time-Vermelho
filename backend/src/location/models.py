from django.db import models

class Location(models.Model):
    endereco = models.CharField(max_length=256)
    bairro = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return self.endereco


# Create your models here.
