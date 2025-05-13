from django.db import models

class Elevator(models.Model):
    current_floor = models.IntegerField(default=0)
    direction = models.CharField(max_length=10, choices=[("up", "Up"), ("down", "Down"), ("idle", "Idle")], default="idle")
    door_open = models.BooleanField(default=False)
    passenger_count = models.IntegerField(default=0)
    is_moving = models.BooleanField(default=False)

class Request(models.Model):
    origin_floor = models.IntegerField()
    destination_floor = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[("waiting", "Waiting"), ("picked", "Picked"), ("completed", "Completed")], default="waiting")
    assigned_elevator = models.ForeignKey(Elevator, on_delete=models.SET_NULL, null=True, blank=True)
