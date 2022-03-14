from products.models import Product, Color, Size
from rest_framework import serializers


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ('id', 'name', 'code')
        
class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ('id', 'name')

class ProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Product
        fields = (
            'id', 
            'title', 
            'keywords', 
            'image', 
            'description', 
            'colors',
            'sizes',
            'price',
            'published',
            'stock')
        

