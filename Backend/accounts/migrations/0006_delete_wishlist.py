# Generated by Django 4.0.3 on 2022-03-08 15:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_account_groups_account_is_superuser_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='WishList',
        ),
    ]
