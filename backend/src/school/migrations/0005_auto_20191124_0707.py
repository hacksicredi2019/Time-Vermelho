# Generated by Django 2.2.7 on 2019-11-24 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0004_auto_20191124_0622'),
    ]

    operations = [
        migrations.AlterField(
            model_name='school',
            name='category',
            field=models.CharField(choices=[('estadual', 'Estadual'), ('federal', 'Federal'), ('municipal', 'Municipal'), ('particular', 'Particular')], default='estadual', max_length=100),
        ),
    ]
