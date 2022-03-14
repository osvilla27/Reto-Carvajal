from django.contrib import admin
from .models import Product, Color, Size


class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'published','stock', 'image_tag']
    list_filter = ['published']
    readonly_fields = ('image_tag',)
    prepopulated_fields = {'slug': ('title',)}

class ColorAdmin(admin.ModelAdmin):
    list_display = ['name','code','color_tag']

class SizeAdmin(admin.ModelAdmin):
    list_display = ['name','code']


admin.site.register(Product,ProductAdmin)
admin.site.register(Color,ColorAdmin)
admin.site.register(Size,SizeAdmin)