from rest_framework import routers
from core.viewsets import dataObjViewSet
router = routers.SimpleRouter()
router.register(r'core', dataObjViewSet, basename='core')