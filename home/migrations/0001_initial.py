# Generated by Django 3.2.8 on 2022-01-29 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='College',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('College_Name', models.CharField(max_length=120, null=True)),
                ('image', models.ImageField(blank=True, default='slide1.jpg', null=True, upload_to='')),
                ('Exam_Name', models.CharField(max_length=120, null=True)),
                ('stream', models.CharField(max_length=120, null=True)),
                ('ratings', models.DecimalField(decimal_places=2, max_digits=100)),
                ('Course_type', models.CharField(max_length=120, null=True)),
                ('location', models.CharField(max_length=120, null=True)),
                ('cut_off', models.DecimalField(decimal_places=2, max_digits=100)),
            ],
        ),
    ]