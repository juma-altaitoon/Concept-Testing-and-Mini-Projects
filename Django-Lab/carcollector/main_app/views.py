from django.shortcuts import render, redirect
from django.http import HttpResponse 
from .models import Car, Feature
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from .forms import ServiceForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
# Create your views here.

# class Car:
#     def __init__(self, model, brand, color, year):
#         self.model = model 
#         self.brand = brand
#         self.color = color
#         self.year = year

# cars = [
#     Car ('Altima', 'Nissan', 'grey', 2020),
#     Car ('Camry', 'Toyota', 'navy', 2021),
#     Car ('FF', 'Ferrari', 'maroon', 2018)
# ]
class CarCreate(LoginRequiredMixin, CreateView):
    model = Car
    fields = ['model', 'brand', 'color', 'year', 'description', 'upload'] # '__all__'
    
    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)

class CarUpdate(LoginRequiredMixin, UpdateView):
    model = Car
    fields = ['color', 'description']

class CarDelete(LoginRequiredMixin, DeleteView):
    model = Car
    success_url='/cars/'
 

def home(request):
    # return HttpResponse('<h1> CARs </h1>')
    return render(request, 'home.html')

def about(request):
    # return HttpResponse('<h1> CAR COLLECTOR </h1>')
    return render (request, 'about.html')
@login_required
def cars_index(request):
    cars = Car.objects.filter(user=request.user)
    return render(request, 'cars/index.html', {'cars' : cars})

@login_required
def cars_detail(request, car_id):
    car = Car.objects.get(id=car_id)
    service_form = ServiceForm()
    features_not_in_car = Feature.objects.exclude(id__in = car.features.all().values_list('id'))
    return render(request, 'cars/detail.html', {'car': car, 'service_form': service_form, 'features': features_not_in_car })

@login_required
def add_service(request, car_id):
    form = ServiceForm(request.POST)

    if form.is_valid():
        new_service = form.save(commit=False)
        new_service.car_id = car_id
        new_service.save()
    return redirect ('detail', car_id = car_id)


class FeatureList(LoginRequiredMixin, ListView):
    model = Feature

class FeatureDetail(LoginRequiredMixin, DetailView):
    model = Feature

class FeatureCreate(LoginRequiredMixin, CreateView):
    model = Feature
    fields = '__all__'

class FeatureUpdate(LoginRequiredMixin, UpdateView):
    model = Feature
    fields = ['duration', 'cost']

class FeatureDelete(LoginRequiredMixin, DeleteView):
    model = Feature
    success_url = '/features/'

@login_required
def assoc_feature(request, car_id, feature_id):
    Car.objects.get(id=car_id).features.add(feature_id)
    return redirect('detail', car_id = car_id)

@login_required
def unassoc_feature(request, car_id, feature_id):
    Car.objects.get(id=car_id).features.remove(feature_id)
    return redirect('detail', car_id = car_id)


def signup(request):
    error_message = ""
    if request.method == 'POST':
        # create user form object with data from browser
        form = UserCreationForm(request.POST)
        if form.is_valid():
            # add user to the database
            user = form.save()
            # login a user 
            login(request, user)
            return redirect('index')
        else:
            error_message = "Invalid sign up - try again"
    form = UserCreationForm()
    context = {'form': form, 'error_message': error_message}
    return render(request, 'registration/signup.html', context)

