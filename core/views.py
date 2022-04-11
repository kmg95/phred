from django.shortcuts import render
from rest_framework import viewsets
from .models import dataObj
from .serializers import ReactSerializer
from django.http import HttpResponse
import csv

class dataObjView(viewsets.ModelViewSet):
    serializer_class = ReactSerializer
    queryset = dataObj.objects.all()

def getfile(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="data.csv"'
    objs = dataObj.objects.all()
    writer = csv.writer(response)
    for obj in objs:
        writer.writerow([obj.id,obj.name,obj.datum, obj.pH, obj.SPO2, obj.temperature, obj.SPO2color, obj.turbidity])
    return response