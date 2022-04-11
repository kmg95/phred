from rest_framework import viewsets
from core.models import dataObj
from core.serializers import ReactSerializer

class dataObjViewSet(viewsets.ModelViewSet):
    serializer_class = ReactSerializer
    def get_queryset(self):
        return dataObj.objects.all()
