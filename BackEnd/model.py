from main import db, ma


class Product(db.Model):
    __tablename__ = 'Product'

    product_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    description = db.Column(db.Text())

    def __init__(self, name, description):
        self.name = name
        self.description = description


class ProductSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Product


class Location(db.Model):
    __tablename__ = 'Location'

    location_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    description = db.Column(db.Text())

    def __init__(self, name, description):
        self.name = name
        self.description = description


class LocationSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Location


class ProductMovement(db.Model):
    __tablename__ = 'ProductMovement'

    movement_id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime())
    from_location = db.Column(db.Integer)
    to_location = db.Column(db.Integer)
    product_id = db.Column(db.Integer)
    qty = db.Column(db.Integer)

    def __init__(self, timestamp, from_location, to_location, product_id, qty):
        self.timestamp = timestamp
        self.from_location = from_location
        self.to_location = to_location
        self.product_id = product_id
        self.qty = qty


class ProductMovementSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = ProductMovement
