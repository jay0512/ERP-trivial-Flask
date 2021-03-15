from main import *
from model import *
import json
from sqlalchemy import desc,asc

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
    
    if db.session.query(Product).filter(Product.name == product['name']).count()==0:
        db.session.add(Product(product['name'],product['description']))
        db.session.commit()
        db.session.close()
    return product

def putDBProduct(product):
    if(product['name'] == ''):
        return 'issue'
    
    productSet = Product.query.get(product['product_id'])

    productSet.name= product['name']
    productSet.description= product['description']

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
    
    if db.session.query(Location).filter(Location.name == location['name']).count()==0:
        db.session.add(Location(location['name'],location['description']))
        db.session.commit()
        db.session.close()
    return location

def putDBLocation(location):
    if(location['name'] == ''):
        return 'issue'
    
    locationSet = Location.query.get(location['location_id'])

    locationSet.name= location['name']
    locationSet.description= location['description']

    db.session.commit()
    db.session.close()

    return location

# ProductMovement Manager
def getDBProductMovements():
    return jsonify([])

def getDBProductMovement():
    return jsonify([])

def postDBProductMovement():
    return jsonify([])

def putDBProductMovement():
    return jsonify([])