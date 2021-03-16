from main import *
from model import *
import json
import datetime
from decimal import Decimal
from sqlalchemy import desc, asc, Column, INTEGER
from sqlalchemy.sql import func
from sqlalchemy.orm import aliased


# Products Manager


def getDBProducts():
    productSet = Product.query.order_by(asc(Product.product_id))
    productSchema = ProductSchema(many=True)
    products = productSchema.dump(productSet)
    return jsonify(products)


def getDBProduct(product_id):
    productSet = Product.query.get(product_id)
    productSchema = ProductSchema()
    product = productSchema.dump(productSet)
    return jsonify(product)


def postDBProduct(product):
    if(product['name'] == ''):
        return 'issue'

    if db.session.query(Product).filter(Product.name == product['name']).count() == 0:
        db.session.add(Product(product['name'], product['description']))
        db.session.commit()
        db.session.close()
    return product


def putDBProduct(product):
    if(product['name'] == ''):
        return 'issue'

    productSet = Product.query.get(product['product_id'])

    productSet.name = product['name']
    productSet.description = product['description']

    db.session.commit()
    db.session.close()

    return product

# Locations Manager


def getDBLocations():
    locationSet = Location.query.order_by(asc(Location.location_id))
    locationSchema = LocationSchema(many=True)
    locations = locationSchema.dump(locationSet)
    return jsonify(locations)


def getDBLocation(location_id):
    locationSet = Location.query.get(location_id)
    locationSchema = LocationSchema()
    location = locationSchema.dump(locationSet)
    return jsonify(location)


def postDBLocation(location):
    if(location['name'] == ''):
        return 'issue'

    if db.session.query(Location).filter(Location.name == location['name']).count() == 0:
        db.session.add(Location(location['name'], location['description']))
        db.session.commit()
        db.session.close()
    return location


def putDBLocation(location):
    if(location['name'] == ''):
        return 'issue'

    locationSet = Location.query.get(location['location_id'])

    locationSet.name = location['name']
    locationSet.description = location['description']

    db.session.commit()
    db.session.close()

    return location

# ProductMovement Manager


def myconverter(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()


class fakefloat(float):
    def __init__(self, value):
        self._value = value

    def __repr__(self):
        return str(self._value)


def defaultencode(o):
    if isinstance(o, Decimal):
        # Subclass float with custom repr?
        return fakefloat(o)
    raise TypeError(repr(o) + " is not JSON serializable")


def getDBProductMovements():

    # select movement_id,
    # (select name from "Location" WHERE "ProductMovement".from_location = "Location".location_id ) fromName,
    # (select name from "Location" WHERE "ProductMovement".to_location = "Location".location_id ) toName ,
    # (select name from "Product" WHERE "ProductMovement".product_id = "Product".product_id ) productName ,
    # qty
    # from "ProductMovement"

    with engine.connect() as con:
        rs = con.execute('select movement_id,timestamp,product_id,from_location,to_location,(select name from "Location" WHERE "ProductMovement".from_location="Location".location_id) fromName,(select name from "Location" WHERE "ProductMovement".to_location="Location".location_id) toName,(select name from "Product" WHERE "ProductMovement".product_id="Product".product_id) productName,qty from "ProductMovement";')
        response = [dict(row.items()) for row in rs]

    return json.dumps(response, default=myconverter)


def getDBProductMovement(movement_id):
    productMovementSet = ProductMovement.query.get(movement_id)
    productMovementSchema = ProductMovementSchema()
    productMovement = productMovementSchema.dump(productMovementSet)
    return jsonify(productMovement)


def postDBProductMovement(productMovement):

    db.session.add(ProductMovement(
        productMovement['timestamp'], productMovement['from_location'], productMovement['to_location'], productMovement['product_id'], productMovement['qty']))
    db.session.commit()
    db.session.close()
    return productMovement


def putDBProductMovement(productMovement):

    productMovementSet = ProductMovement.query.get(
        productMovement['movement_id'])

    productMovementSet.timestamp = productMovement['timestamp']
    productMovementSet.from_location = productMovement['from_location']
    productMovementSet.to_location = productMovement['to_location']
    productMovementSet.product_id = productMovement['product_id']
    productMovementSet.qty = productMovement['qty']

    db.session.commit()
    db.session.close()

    return productMovement


def getDBProductBalanceByLocation():

    # productMovementSet = ProductMovement.query.order_by(
    #     asc(ProductMovement.movement_id))

    # select balance.Product, balance.Warehouse, SUM(balance.factor * balance.quantity) AS Qty
    # FROM
    # (	select
    # 	(select name from "Location" WHERE "ProductMovement".to_location = "Location".location_id ) Warehouse ,
    # 	(select name from "Product" WHERE "ProductMovement".product_id = "Product".product_id ) Product ,
    # 	NULLIF(sum(qty),0) as quantity,
    #         1 as factor
    # 	from "ProductMovement"
    # 	Group By "ProductMovement".product_id,"ProductMovement".to_location

    # 	UNION ALL

    # 	select
    # 	(select name from "Location" WHERE "ProductMovement".from_location = "Location".location_id ) Warehouse ,
    # 	(select name from "Product" WHERE "ProductMovement".product_id = "Product".product_id ) Product ,
    # 	NULLIF(sum(qty),0) as quantity,
    #         -1 as factor
    # 	from "ProductMovement"
    # 	Group By "ProductMovement".product_id,"ProductMovement".from_location

    # )AS balance
    # WHERE "balance".Warehouse NOTNULL
    # Group By "balance".Product,"balance".Warehouse
    # ;

    # query1 = db.session.query(ProductMovement.product_id.label('Product'), ProductMovement.to_location.label(
    #     'Warehouse'), func.coalesce(func.sum(ProductMovement.qty), 0).label('quantity')).group_by(ProductMovement.product_id, ProductMovement.to_location)

    # query1 = query1.add_column('factor',
    #                            Column(1, INTEGER))

    # print(query1)

    # query2 = db.session.query(ProductMovement.product_id.label('Product'), ProductMovement.from_location.label(
    #     'Warehouse'), func.coalesce(func.sum(ProductMovement.qty), 0).label('quantity')).group_by(ProductMovement.product_id, ProductMovement.from_location)

    # query3 = query1.union_all(query2).subquery()

    # print(query3)
    # productMovementSet = db.session.query(query3.c.Product, query3.c.Warehouse, func.sum(query3.c.quantity)).filter(query3.c.Warehouse.isnot(None)).group_by(
    #     query3.c.Product, query3.c.Warehouse).all()
    # print(productMovementSet)

    # productMovementSchema = ProductMovementSchema(many=True)
    # productMovements = productMovementSchema.dump(productMovementSet)

    with engine.connect() as con:
        rs = con.execute('select balance.Product, balance.Warehouse, SUM(balance.factor * balance.quantity) AS balance FROM (	select  (select name from "Location" WHERE "ProductMovement".to_location = "Location".location_id ) Warehouse ,	(select name from "Product" WHERE "ProductMovement".product_id = "Product".product_id ) Product , NULLIF(sum(qty),0) as quantity, 1 as factor from "ProductMovement" Group By "ProductMovement".product_id,"ProductMovement".to_location UNION ALL select (select name from "Location" WHERE "ProductMovement".from_location = "Location".location_id ) Warehouse ,	(select name from "Product" WHERE "ProductMovement".product_id = "Product".product_id ) Product , NULLIF(sum(qty),0) as quantity, -1 as factor from "ProductMovement" Group By "ProductMovement".product_id,"ProductMovement".from_location )AS balance WHERE "balance".Warehouse NOTNULL Group By "balance".Product,"balance".Warehouse;')
        response = [dict(row.items()) for row in rs]
        print(json.dumps(response, default=defaultencode))

    return json.dumps(response, default=defaultencode)
