from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from wishList.models import WishList
from wishList.serializers import WishListSerializer
from accounts.models import Account
@api_view(['GET', 'POST'])
def wishListList(request): 
    if request.method == 'GET':
        wish_lists = WishList.objects.all()
        serializer = WishListSerializer(wish_lists, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = WishListSerializer(data=request.data)
       
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def wishListDetail(request, pk):
    #Retrieve, update or delete a code wish_list.
    try:
        wish_list = WishList.objects.get(pk=pk)
    except WishList.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = WishListSerializer(wish_list)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = WishListSerializer(wish_list, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        wish_list.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def wishListUser(request, pk):
    try:
        users = Account.objects.get(pk=pk)
        wish_lists = WishList.objects.filter(user=users)
        serializer = WishListSerializer(wish_lists, many=True)
        return Response(serializer.data)
    except WishList.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    
  
    


"""
from rest_framework import generics
from accounts.models import WishList
from accounts.serializers import WishListSerializer

class WishListList(generics.ListCreateAPIView):
    queryset = WishList.objects.all()
    serializer_class = WishListSerializer

class WishListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = WishList.objects.all()
    serializer_class = WishListSerializer
"""
"""
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from accounts.models import WishList
from accounts.serializers import WishListSerializer

@csrf_exempt
def WishListList(request):
    
   
    //List all code wish_lists, or create a new wish_list.
    
    if request.method == 'GET':
        wish_lists = WishList.objects.all()
        serializer = WishListSerializer(wish_lists, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = WishListSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def WishListDetail(request, pk):
    
   
    //Retrieve, update or delete a code wish_list.
    
    try:
        wish_list = WishList.objects.get(pk=pk)
    except WishList.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = WishListSerializer(wish_list)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = WishListSerializer(wish_list, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        wish_list.delete()
        return HttpResponse(status=204)"""





