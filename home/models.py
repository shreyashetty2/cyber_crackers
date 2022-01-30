from django.db import models

# Create your models here.

class College(models.Model):
    College_Name = models.CharField(max_length = 120, null = True)
    image  		 = models.ImageField(default = "home/media/slide1.jpg", null = True, blank = True)
    Exam_Name    = models.CharField(max_length = 120, null = True)
    stream       = models.CharField(max_length = 120, null = True)
    ratings		 = models.DecimalField(decimal_places = 2, max_digits = 100)
    Course_type  = models.CharField(max_length = 120, null = True)
    location     = models.CharField(max_length = 120, null = True)
    cut_off      = models.DecimalField(decimal_places = 2, max_digits = 100)

    def __str__(self):
	    return self.College_Name