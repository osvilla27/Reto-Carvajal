from django.urls import path
from products import views

urlpatterns = ([
    path('product/', views.ProductList.as_view()),
    path('product/<int:pk>/', views.ProductDetail.as_view()),
    path('color/', views.ColorList.as_view()),
    path('color/<int:pk>/', views.ColorDetail.as_view()),
    path('size/', views.SizeList.as_view()),
    path('size/<int:pk>/', views.SizeDetail.as_view()),
])




