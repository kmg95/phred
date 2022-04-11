from rest_framework import serializers
from core.models import dataObj

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = dataObj
        fields = '__all__'
# ['id', 'name', 'datum', 'pH', 'SPO2', 'temperature', 'SPO2color','turbidity']