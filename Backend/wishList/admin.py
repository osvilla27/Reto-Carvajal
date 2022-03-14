from django.contrib import admin
from .models import WishList


class WishlistAdmin(admin.ModelAdmin):
    list_display = ['product', 'published', 'color', 'size', 'quantity', 'user']
    
admin.site.register(WishList, WishlistAdmin)