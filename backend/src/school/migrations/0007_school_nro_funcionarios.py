# Generated by Django 2.2.7 on 2019-11-24 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0006_auto_20191124_0740'),
    ]

    operations = [
        migrations.AddField(
            model_name='school',
            name='nro_funcionarios',
            field=models.IntegerField(default=0),
        ),
    ]
