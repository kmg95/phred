# Generated by Django 4.0.3 on 2022-03-22 08:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dataobj',
            name='bacteriaPhoto',
        ),
        migrations.RemoveField(
            model_name='dataobj',
            name='nitrxPhoto',
        ),
    ]
