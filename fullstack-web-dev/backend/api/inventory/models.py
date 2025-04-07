from django.db import models
from django.db.models import CharField, DateTimeField, ForeignKey, IntegerField, TextField

# Create your models here.


class Product(models.Model):
    """商品"""

    product_id: CharField = CharField(max_length=100, primary_key=True, verbose_name='商品ID')
    name: CharField = CharField(max_length=100, verbose_name='商品名')
    price: IntegerField = IntegerField(verbose_name='価格')
    description: TextField = TextField(verbose_name='商品説明', null=True, blank=True)

    class Meta:
        db_table = 'product'
        verbose_name = '商品'


class Purchase(models.Model):
    """仕入れ"""

    product: ForeignKey = ForeignKey(Product, on_delete=models.CASCADE)
    quantity: IntegerField = IntegerField(verbose_name='数量')
    purchase_date: DateTimeField = DateTimeField(verbose_name='仕入日時')

    class Meta:
        db_table = 'purchase'
        verbose_name = '仕入'


class Sales(models.Model):
    """売上"""

    product: ForeignKey = ForeignKey(Product, on_delete=models.CASCADE)
    quantity: IntegerField = IntegerField(verbose_name='数量')
    sales_date: DateTimeField = DateTimeField(verbose_name='売上日時')

    class Meta:
        db_table = 'sales'
        verbose_name = '売上'
