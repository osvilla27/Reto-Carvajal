from django.urls import path
from wishList import views

urlpatterns = [
    path('wish-list/', views.wishListList),
    path('wish-list/<int:pk>/', views.wishListDetail),
    path('wish-list/user/<int:pk>/', views.wishListUser),
]