
from accounts.models import Account
from wishList.models import WishList
from products.models import Product, Color, Size
from rest_framework import serializers

class WishListSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    user = serializers.CharField(required=True, allow_blank=False, max_length=100)
    product = serializers.CharField(required=True, allow_blank=False, max_length=100)
    color = serializers.CharField(required=True, allow_blank=False, max_length=100)
    size = serializers.CharField(required=True, allow_blank=False, max_length=100)
    quantity = serializers.IntegerField()
    published = serializers.BooleanField(default=True)


    def create(self, validated_data):
        user_email = validated_data.get('user')
        user = Account.objects.get(email=user_email)
        product_title = validated_data.get('product')
        product = Product.objects.get(title=product_title)
            
        wish_list_exists = WishList.objects.filter(user=user,product=product).exists()
        if wish_list_exists:
            wish_list = WishList.objects.get(user=user,product=product)
            quantity = validated_data.get('quantity')
            wish_list.quantity += quantity
            published = validated_data.get('published')
            wish_list.published = published
            wish_list.save()
            return WishList.objects.get(user=user,product=product)
        else:
            color_name = validated_data.get('color')
            color = Color.objects.get(name=color_name)
            size_name = validated_data.get('size')
            size = Size.objects.get(name=size_name)
            quantity = validated_data.get('quantity')
            published = validated_data.get('published')
            return WishList.objects.create(user=user,
                                product=product,
                                color=color,size=size,
                                quantity=quantity,
                                published=published)

    def update(self, instance, validated_data):
        user_email = validated_data.get('user', instance.user)
        instance.user = Account.objects.get(email=user_email)
        product_title = validated_data.get('product', instance.product)
        instance.product = Product.objects.get(title=product_title)
        color_name = validated_data.get('color', instance.color)
        instance.color = Color.objects.get(name=color_name)
        size_name = validated_data.get('size', instance.size)
        instance.size = Size.objects.get(name=size_name)
        instance.quantity = validated_data.get('quantity', instance.quantity)
        instance.published = validated_data.get('published', instance.published)
        instance.save()
        return instance