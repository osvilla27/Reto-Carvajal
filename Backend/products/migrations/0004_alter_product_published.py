# Generated by Django 4.0.3 on 2022-03-07 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_rename_status_product_published'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='published',
            field=models.BooleanField(default=True),
        ),
    ]
