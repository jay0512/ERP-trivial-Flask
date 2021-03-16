
import datetime
from decimal import Decimal


def dateTimeConverter(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()


class dummyFloat(float):
    def __init__(self, value):
        self._value = value

    def __repr__(self):
        return str(self._value)


def decimalConverter(o):
    if isinstance(o, Decimal):
        # Subclass float with custom repr?
        return dummyFloat(o)
    raise TypeError(repr(o) + " is not JSON serializable")
