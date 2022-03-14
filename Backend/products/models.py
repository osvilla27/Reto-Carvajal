from django.db import models
from django.utils.safestring import mark_safe

class Color(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=10, blank=True,null=True)
    def __str__(self):
        return self.name

    def color_tag(self):
        if self.code is not None:
            return mark_safe('<p style="background-color:{}"> Color </p>'.format(self.code))
        else:
            return ""

class Size(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=10, blank=True,null=True)
    def __str__(self):
        return self.name

class Product(models.Model):
    title = models.CharField(max_length=200, unique=True)
    keywords = models.CharField(max_length=255, blank=True)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to='photos/products')
    description = models.TextField(max_length=500, blank=True)
    colors = models.ManyToManyField(Color)
    sizes = models.ManyToManyField(Size)
    price = models.IntegerField(default=0)
    published = models.BooleanField(default=True)
    stock = models.IntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title

    class MPTTMeta:
        order_insertion_by = ['title']

    def image_tag(self):
        if self.image.url is not None:
            return mark_safe('<img src="{}" height="50"/>'.format(self.image.url))
        else:
            return ""