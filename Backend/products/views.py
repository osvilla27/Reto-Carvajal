from django.shortcuts import render
from rest_framework import generics

from products.models import Product, Color, Size
from products.serializers import ProductSerializer, ColorSerializer, SizeSerializer


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ColorList(generics.ListCreateAPIView):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer

class ColorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer

class SizeList(generics.ListCreateAPIView):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer

class SizeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Color.objects.all()
    serializer_class = SizeSerializer


"""
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from products.models import Product, Color, Size
from products.serializers import ProductSerializer, ColorSerializer, SizeSerializer


@api_view(['GET', 'POST'])
def productList(request):  
    if request.method == 'GET':
       products = Product.objects.all()
       serializer = ProductSerializer(products, many=True)
       return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def productDetail(request, pk):
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
"""