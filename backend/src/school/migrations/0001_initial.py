# Generated by Django 2.2.7 on 2019-11-24 01:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Level',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.CharField(choices=[('ELM', 'Ensino Fundamental'), ('CHL', 'Educação Infantil'), ('HSC', 'Ensino Médio')], max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='School',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('category', models.CharField(choices=[('EST', 'Estadual'), ('FED', 'Federal'), ('MUN', 'Municipal'), ('PAR', 'Particular')], max_length=100)),
                ('phone', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=50)),
                ('description', models.TextField(max_length=1000)),
                ('level', models.ManyToManyField(to='school.Level')),
            ],
        ),
    ]
