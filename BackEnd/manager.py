from main import *
from model import *
import json
from sqlalchemy import desc, asc
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


def getDBProductMovements():

    # select movement_id,
    # (select name from "Location" WHERE "ProductMovement".from_location = "Location".location_id ) fromName,
    # (select name from "Location" WHERE "ProductMovement".to_location = "Location".location_id ) toName ,
    # (select name from "Product" WHERE "ProductMovement".product_id = "Product".product_id ) productName ,
    # qty
    # from "ProductMovement"

    productMovementSet = ProductMovement.query.order_by(
        asc(ProductMovement.movement_id))

    # subquery1 = (
    #     db.session.query(Product.name)
    #     .filter(ProductMovement.product_id == Product.product_id)
    # )
    # subquery2 = (
    #     db.session.query(Location.name)
    #     .filter(ProductMovement.from_location == Location.location_id)
    # )
    # subquery3 = (
    #     db.session.query(Location.name)
    #     .filter(ProductMovement.to_location == Location.location_id)
    # )
    # print(subquery1)

    # productMovementSet = db.session.query(ProductMovement.movement_id, subquery1,
    #                                       ProductMovement.qty).subquery().all()

    print(productMovementSet)
    productMovementSchema = ProductMovementSchema(many=True)
    productMovements = productMovementSchema.dump(productMovementSet)
    return jsonify(productMovements)


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

    productMovementSet = ProductMovement.query.order_by(
        asc(ProductMovement.movement_id))

    productMovementSchema = ProductMovementSchema(many=True)
    productMovements = productMovementSchema.dump(productMovementSet)
    return jsonify(productMovements)
