from django.db import models
from products.models import Product, Color, Size
from accounts.models import Account

# Create your models here.

class WishList(models.Model):
    user = models.ForeignKey(Account, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    color = models.ForeignKey(Color, on_delete=models.CASCADE, null=False, blank=False)
    size = models.ForeignKey(Size, on_delete=models.CASCADE, null=False, blank=False)
    quantity = models.IntegerField(default=1)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    published = models.BooleanField(default=True)

    def __str__(self):
        return self.product.title
