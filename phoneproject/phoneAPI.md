# Phone API

## data 
Data will be in a json file

### phones.json
```json 
[
    {
        "firstname": "Ankita",
        "lastName": "Bhatnagar",
        "phones": [
            {"type":"home","number":"123456"},
            {"type":"work","number":"876543"},
            {"type":"work","number":"098654"}
        ]
    },
    {
        "firstname": "Laura",
        "lastName": "Mietii",
        "phones": [
            {"type":"home","number":"543423"},
            {"type":"mobile","number":"6565464"},
            {"type":"work","number":"5464565"}
        ]

    }
]

```

## Class PhoneRegister

## **constructor(data)**
Phones json array is passed as a parameter `data`. If the parameter is missing , an error will be throws an exeption `'phone data missing'`;

## **getTypes()**
returns all phones types in an array. The type in added to the result array only onces. If there is no phones, an empty array is returned.

For example :
```json 
["home","work","mobile"]
```
## **getNumberByType(firstname,lastname,type)**
Method returns an array of phone numbers of the given type belongin to a given person with given `firstname` and `lastname`.

If no person with the given name is found, an empty array [] is returned.
If atleast one parameter is missing an exception **  `'missing parameter'`is thrown.

For example:
```json 
["123456",]
```