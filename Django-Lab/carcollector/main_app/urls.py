from django.urls import path
from . import views

urlpatterns=[
    # CRUD - Cars
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('cars/', views.cars_index, name="index"),
    path('cars/<int:car_id>/', views.cars_detail, name='detail'),
    path('cars/create/', views.CarCreate.as_view(), name = 'cars_create'),
    path('cars/<int:pk>/update/', views.CarUpdate.as_view(), name = 'cars_update'),
    path('cars/<int:pk>/delete/', views.CarDelete.as_view(), name = 'cars_delete'),
    path('cars/<int:car_id>/add_service/', views.add_service, name='add_service'),

    # CRUD - Features
    path('features/', views.FeatureList.as_view(), name='features_index'),
    path('features/<int:pk>/', views.FeatureDetail.as_view(), name='features_detail'),
    path('features/create/', views.FeatureCreate.as_view(), name= 'features_create'),
    path('features/<int:pk>/update/', views.FeatureUpdate.as_view(), name='features_update'),
    path('features/<int:pk>/delete/', views.FeatureDelete.as_view(), name='features_delete'),
    
    path('cars/<int:car_id>/assoc_feature/<int:feature_id>/', views.assoc_feature, name= 'assoc_feature'),
    path('cars/<int:car_id>/unassoc_feature/<int:feature_id>/', views.unassoc_feature, name= 'unassoc_feature'),

    # Sign Up
    path('accounts/signup/', views.signup, name='signup')
]
