from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'place_name', 'food_item', 'food_img','food_review','food_rating','created_at')