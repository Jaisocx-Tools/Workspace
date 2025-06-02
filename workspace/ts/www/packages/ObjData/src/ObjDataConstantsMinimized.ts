export class ObjDataConstants {
  // this is the constant numeric value, the fixed number 16, where always property name's first char/byte is set.
  static PROPERTY_NAME_START = 12;
  static HEADERS_LENGTH = 12;

  // here are refs, relative to ObjData serialized byte buffer start, where numeric variable values reside.
  static FIELDS_POINTERS: any = {
    LENGTH_ALL: 0, // the packet starts on the first position with the 32 bit numeric long value
    LENGTH_ALL_FIELD_LEN: 4, // the packet starts on the first position with the 32 bit numeric long value
    DATATYPE: 4, // on the 5th byte resides datatype numeric constant 8 bit unsigned byte value up to 255.
    DATATYPE_FIELD_LEN: 1,
    NUMBER_VALUE_UNIT: 5, // on the 6th byte resides unit numeric constant 8 bit unsigned byte value up to 255
    NUMBER_VALUE_UNIT_FIELD_LEN: 1,
    PROPS_AMOUNT: 6, // on the 7th byte resides 32 bit unsigned int value up to MAX_INT_VALUE
    PROPS_AMOUNT_FIELD_LEN: 4,
    PROPERTY_NAME_LENGTH: 10, // on the 11th byte resides 16 bit short int value 
    PROPERTY_NAME_LENGTH_FIELD_LEN: 2
  };

  static UNITS: any = {
    UNIT_NOT_SET: 0,

    UNIT_CSS_PIXEL: 1,
    UNIT_CSS_EM: 2,
    UNIT_CSS_PERCENTAGE: 4,
    UNIT_CSS_VIEWPORT_WIDTH: 5,
    UNIT_CSS_VIEWPORT_HEIGHT: 6,
    UNIT_CSS_VIEWPORT_MIN: 7,
    UNIT_CSS_VIEWPORT_MAX: 8,
    UNIT_CSS_POINTS: 9,
    UNIT_CSS_PIXELS_PER_INCH: 10,
    UNIT_CSS_PIXELS_PER_CM: 11,
    UNIT_CSS_CENTIMETER: 12,
    UNIT_CSS_MILLIMETER: 13,
    UNIT_CSS_INCH: 14,
    UNIT_CSS_EX: 15,
    UNIT_CSS_CH: 16,
    UNIT_CSS_FR: 17,

    UNIT_C_METER: 18,
    UNIT_C_KILOMETER: 19,
    UNIT_C_CENTIMETER: 20,
    UNIT_C_MILLIMETER: 21,
    UNIT_C_MICROMETER: 22,
    UNIT_C_NANOMETER: 23,
    UNIT_C_GRAM: 24,
    UNIT_C_KILOGRAM: 25,
    UNIT_C_MILLIGRAM: 26,
    UNIT_C_MICROGRAM: 27,
    UNIT_C_TONNE: 28,
    UNIT_C_SECOND: 29,
    UNIT_C_MILLISECOND: 30,
    UNIT_C_MICROSECOND: 31,
    UNIT_C_MINUTE: 32,
    UNIT_C_HOUR: 33,
    UNIT_C_DAY: 34,
    UNIT_C_LITER: 35,
    UNIT_C_MILLILITER: 36,
    UNIT_C_CUBIC_METER: 37,
    UNIT_C_CELSIUS: 38,
    UNIT_C_FAHRENHEIT: 39,
    UNIT_C_KELVIN: 40,
    UNIT_C_METER_PER_SECOND: 41,
    UNIT_C_KILOMETER_PER_HOUR: 42,
    UNIT_C_MILES_PER_HOUR: 43,

    UNIT_P_BYTE: 44,
    UNIT_P_KILOBYTE: 45,
    UNIT_P_MEGABYTE: 46,
    UNIT_P_GIGABYTE: 47,
    UNIT_P_TERABYTE: 48,
    UNIT_P_HERTZ: 49,
    UNIT_P_KILOHERTZ: 50,
    UNIT_P_MEGAHERTZ: 51,
    UNIT_P_GIGAHERTZ: 52,
    UNIT_P_FLOPS: 53,
    UNIT_P_GLOPS: 54,
    UNIT_P_TLOPS: 55,
    UNIT_P_BITS_PER_SECOND: 56,
    UNIT_P_KILOBITS_PER_SECOND: 57,
    UNIT_P_MEGABITS_PER_SECOND: 58,
    UNIT_P_GIGABITS_PER_SECOND: 59,

    UNIT_C_PASCAL: 60,
    UNIT_C_BAR: 61,
    UNIT_C_JOULE: 62,
    UNIT_C_KILOJOULE: 63,
    UNIT_C_WATT: 64,
    UNIT_C_KILOWATT: 65,
    UNIT_C_DEGREE: 66,
    UNIT_C_RADIAN: 67
  };


  static DATA_TYPES: any = {
    NUMBER: 1,

    BIG_INT: 2,
    FLOAT_32: 3,
    DOUBLE_64: 4,

    ARRAY_8: 20,
    ARRAY_16: 21,
    ARRAY_32: 22,
    ARRAY_64: 23,
    ARRAY_FLOAT_32: 24,
    ARRAY_DOUBLE_64: 25,

    OBJECT: 30,
    ARRAY: 31,

    BINARY: 40,

    TEXT_PLAIN: 50,

    TEXT_BASE64: 51,
    TEXT_BASE64_IMG: 52,
    TEXT_BASE64_AUDIO: 53,
    TEXT_BASE64_IMG_QRCODE: 54,
    TEXT_BASE64_GZIPPED: 55,

    TEXT_HTML: 56,
    TEXT_XML: 57,
    TEXT_CSS: 58,
    TEXT_JSON: 59,
    TEXT_LD_JSON: 591,
    
    TEXT_URL: 592,

    TEXT_DATETIME: 593,
    NUMBER_TIMESTAMP: 594,

    CSS_SELECTOR: 60,
    CSS_BLOCK: 61,
    CSS_RULE: 62,
    CSS_RULE_NAME: 63,
    CSS_RULE_VALUE: 64,
    CSS_NUMERIC_RULE_VALUE_UNITED: 65,
    CSS_URL: 66,
    CSS_VARIABLE_NAME: 67,
    CSS_IMPORT_EXPRESSION: 68
  };
}

