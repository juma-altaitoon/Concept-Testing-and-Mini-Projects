from django.db import models
from django.urls import reverse
from datetime import date
from django.contrib.auth.models import User

# Create your models here.
SERVICES = (
    ('M', 'Maintenance'),
    ('C', 'Clean'),
    ('R', 'Repair'),
    ('U', 'Upgrade')
)

class Feature(models.Model):
    name = models.CharField(max_length=30)
    duration = models.IntegerField()
    cost = models.FloatField()

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('features_detail', kwargs={'pk':self.id})



class Car(models.Model):
    model =models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    year = models.IntegerField()
    description = models.TextField()
    upload = models.ImageField(upload_to='main_app/static/uploads', default="")
    features = models.ManyToManyField(Feature)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    

    def __str__(self):
        return self.model
    
    def get_absolute_url(self):
        return reverse('detail', kwargs={'car_id':self.id})

    def good_to_go(self):
        return self.service_set.filter(date=date.today()).count() >= len(SERVICES)


class Service(models.Model):
    date= models.DateField()
    type = models.CharField(max_length=1, choices= SERVICES, default=SERVICES[0][0])
    car = models.ForeignKey(Car, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.car.model} - {self.get_type_display()} - {self.date}"

    class Meta:
        ordering = ['-date']

    