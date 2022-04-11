from django.db import models
class dataObj(models.Model):
    name = models.CharField(max_length=30)
    datum = models.DateTimeField(auto_now=True)
    pH = models.DecimalField(max_digits=5, decimal_places=2)
    SPO2 = models.DecimalField(max_digits=5, decimal_places=2)
    temperature = models.DecimalField(max_digits=5, decimal_places=2)
    SPO2color = models.CharField(max_length=20)
    turbidity = models.CharField(max_length=20)

    def __str__(self):
        return self.name
