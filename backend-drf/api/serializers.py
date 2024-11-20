from rest_framework import serializers
from . models import Approvals


class StockPredictionSerializer(serializers.Serializer):
    ticker = serializers.CharField(max_length=20)



class approvalsSerializers(serializers.ModelSerializer):
	class Meta:
		model=Approvals
		fields='__all__'
