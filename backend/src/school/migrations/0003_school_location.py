# Generated by Django 2.2.7 on 2019-11-24 05:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0001_initial'),
        ('school', '0002_auto_20191124_0227'),
    ]

    operations = [
        migrations.AddField(
            model_name='school',
            name='location',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='location.Location'),
        ),
    ]
