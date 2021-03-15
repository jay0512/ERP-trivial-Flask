from flask import Flask
from flask import jsonify,request
import json

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from manager import *
from flask_cors import CORS

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:admin@localhost:5432/Inventory"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db = SQLAlchemy(app)
ma = Marshmallow(app)
migrate = Migrate(app, db)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/')
def home():
   return 'Hello World'

# Product Services
@app.route('/api/products', methods=['GET'])
def getProducts():
    products = getDBProducts()
    return products

@app.route('/api/products/<product_id>', methods=['GET'])
def getProduct(product_id):
    product = getDBProduct(int(request.view_args['product_id']))
    return product

@app.route('/api/products', methods=['POST'])
def postProduct():
    product = request.json
    response = postDBProduct(product)
    return response

@app.route('/api/products', methods=['PUT'])
def putProduct():
    product = request.json
    response = putDBProduct(product)
    return response

# Location Services

@app.route('/api/locations', methods=['GET'])
def getLocations():
    locations = getDBLocations()
    return locations

@app.route('/api/locations/<location_id>', methods=['GET'])
def getLocation(location_id):
    location = getDBLocation(int(request.view_args['location_id']))
    return location

@app.route('/api/locations', methods=['POST'])
def postLocation():
    location = request.json
    response = postDBLocation(location)
    return response

@app.route('/api/locations', methods=['PUT'])
def putLocation():
    location = request.json
    response = putDBLocation(location)
    return response

if __name__ == '__main__':
    app.debug = True
    app.run()