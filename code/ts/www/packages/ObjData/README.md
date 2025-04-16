# JS PACKAGE jaisocx/objdata

[https://github.com/Jaisocx-Tools/Workspace](https://github.com/Jaisocx-Tools/Workspace)

## How to use in ts code

### Serialize

```
const objdataFormattedBytebuf: Uint8Array = ObjData.serialize( someObjectOrArray );
```


### Parse

```
const obj: any = ObjData.parse( objdataFormattedBytebuf );
```


## What is this

This is just another try to implement a binary data format for objects and arrays.


## This format info

The objdata format is not being parsed by chars comparisons, but like in the good old style packets prefixes fixed positions and lengths binary fields with numeric values kept. 


## For what to use

Since the JSON format is hardly editable when a .json document is big, and the depth of the nested objects grows, then the usage of the visual tool to edit objects becomes a must, and contents preview can be done by viewing json text when serialized to JSON format, or visualized with a JSTree js browser tool. The JS object remains still the same.



## Every nested data item prefix structure

### Prefix fields list, and their fixed offsets and lengths in bytes and bits
1. LENGTH_ALL : 0-3, 4 bytes long, 32 bits
2. DATATYPE : 4-7, 4 bytes long, 32 bits
3. NUMBER_VALUE_UNIT : 8-11, 4 bytes long, 32 bits
4. PROPS_AMOUNT : 12-15, 4 bytes long, 32 bits
5. PROPERTY_NAME_LENGTH : 16-19, 4 bytes long, 32 bits
6. PROPERTY_NAME : 20-, PROPERTY_NAME_LENGTH bytes long
7. PROPERTY_VALUE


### The further fields offsets and lengths arythmetics
1. PROPERTY_NAME_START = 20;
2. PROPERTY_VALUE_START = ( PROPERTY_NAME_START + PROPERTY_NAME_LENGTH );
3. PROPERTY_VALUE_LENGTH = ( LENGTH_ALL - PROPERTY_VALUE_START );



## Fields DATATYPE and NUMBER_VALUE_UNIT
For now just text and numeric values apply to Datatype field,
and the unit is always zero.

However, when serializing on the serverside,
the visualized JS object view in browser js tree tool,
can have miniimages designed to every js object tree node,
due to its datatype,
and numeric value unit can result in ui view of a numeric value postfixed,
like timestamp BigInt value, when a dev knew the timestamp precision,
can be on the serverside serialized with unit field value 
NUMBER_TIMESTAMP = 594, UNIT_C_MICROSECOND = 31,
and be more user friendly formatted, e.g. like 123_456_789_000_mc,
or just to deliver info to a js code,
how to multiply/divide it to use with js Date object 
in date.setTime( timestampPresicionMilliseconds );

This was just the basic example of the advantages 
of the extended datatypes constants values set 
in the object, serialized to objdata format.



## The further improvals

### 1. The fixed format objdata version one prefix for the entire serialized bytebuf at the bytebuf begin

#### In order to work with large data amounts and keeping in big .obj files the 64 bits long numeric values are required, since the numeric value can be over 4 billions.

I have an idea of a more extensive storage usage the same objdata format,
however working with js object BigInt for all numeric values,
and aligned each prefix field always 8 bytes long values ( 64 bits ).
This will have a 40 bytes long prefix, more than 2 times long than this 20 bytes long prefix format here in this pack.

The reason why this package is published, but without this feature has been implemented:
I still don't have the idea, to keep the algorythm here the same without copy-paste to another Serializer .ts class,
however to work with not very many if statements to checkout the action for the current format,
since additional actions in a loop use more resources, however doing the same task.


### 2. Classes instances Datatype support
Easily done in some time. This will be just an object with constant property names:
1. class name
2. namespace, package or url in the npmjs.com))
3. an object, serialized to objdata class instance, with every property and their values, without no methods.


## The further improvals, however seem to be published in another package.
### 2. JPath querying
### 3. SAX flavoured chunked responses JPath querying
### 4. JPathIndex, Indexes for fast JPath querying
### 5. JPathIndexes kept in datafiles


## HELLO WORLD MESSAGE:

GOOD LUCK AND HAVE FUN WITH CODING ))


Yours [jaisocx.com](https://jaisocx.com/) Software Architect and Dev,

Elias






