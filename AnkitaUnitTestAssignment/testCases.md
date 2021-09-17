# Test Cases

## constructor(data)

Data storage json array is passed as a parameter `data`. If the parameter is missing, throws an `'data storage is missing'`;

### Test 1: object created

````js
new ComputerStorage(jsonData);

### Test 2: missing parameter throws an exception

new ComputerStorage();

Test exception `'datastorage is missing'`

/********************/

## getById(id)

### Test 1: Method searches the datastorage for an object with given key. Key is unique

Get types of the default jsonData

Test data:

```json
[
  {
    "id": 1,
    "manufacturer": "BMI",
    "type": "minitower",
    "accessories": ["keyboard", "display", "mouse"],
    "price": 250,
    "software": [{
        "name": "Writer",
        "price": 123
      },
      {
        "name": "Solitaire",
        "price": 10
      }
    ]
  },
  {
    "id": 2,
    "manufacturer": "CERA",
    "type": "laptop",
    "accessories": ["mouse"],
    "price": 350,
    "software": [{
        "name": "Writer",
        "price": 10
      },
      {
        "name": "Counter",
        "price": 20
      }
    ]
  },
  {
    "id": 3,
    "manufacturer": "BMI",
    "type": "laptop",
    "accessories": [],
    "price": 150,
    "software": []
  }
]
````

Return: returns the computer object matching the id or null if there is no match

### Test 2: if parameter is missing, throws an exception 'parameter missing'

returns 'parameter missing'

/********************/

## getAllIdsByManufacturer(value)

### Test 1: Returns all ids of the computers matching the value of manufacturer

```js
myComputerStorage.getAllIdsByManufacturer("BMI");
```

Returns:

```json
[1, 3]
```

## Test 2: If there is no match or parameter is missing, an empty array is returned

```js
myComputerStorage.getAllIdsByManufacturer();
```

returns

```json
[]
```

## getAllComputerTypes()

### Test 1: Returns an array of different computer types, The type is added to the result array only once

```js
myComputerStorage.getAllComputerTypes();
```

returns

```json
["minitower", "laptop"]
```

### Test 2: If no types are found, returns an empty array

```js
myComputerStorage.getAllComputerTypes();
```

returns:

```json
[]
```

## getAllComputersByType(type)

### Test 1: Returns an array of computer objects of given type

```js
myComputerStorage.getAllComputersByType("laptop");
```

returns:

```json
[
  {
    "id": 2,
    "manufacturer": "CERA",
    "type": "laptop",
    "accessories": ["mouse"],
    "price": 350,
    "software": [
      {
        "name": "Writer",
        "price": 10
      },
      {
        "name": "Counter",
        "price": 20
      }
    ]
  },
  {
    "id": 3,
    "manufacturer": "BMI",
    "type": "laptop",
    "accessories": [],
    "price": 150,
    "software": []
  }
]
```

### Test 2:If no computer of given type is found, returns an empty array

```js
myComputerStorage.getAllComputersByType("XYZ");
```

returns:

```json
[]
```

### Test 3: If a parameter type is missing

```js
myComputerStorage.getAllComputersByType();
```

returns ' missing parameter'

## hasAccessories(id)

### Test 1: returns true if the computer has accessories else returns false

```js
myComputerStorage.hasAccessories(1);
```

Returns: true

## Test 2: If parameter id is missing false is returned

```js
myComputerStorage.hasAccessories();
```

returns

false

## GetComputerAccessories(id)

### Test 1:Returns an array of computer accessories

```js
myComputerStorage.GetComputerAccessories(1);
```

Returns:

```json
["keyboard", "display", "mouse"]
```

### Test 2:Returns an empty array if computer accessories not found

Returns:

```json
[]
```

## getPriceWithoutSoftware(id)

### Test 1:Return: The price of the computer not including the price of the software

```js
myComputerStorage.getPriceWithoutSoftware(2);
```

Returns:
350

### Test 2: if no computer with the given number is found

```js
myComputerStorage.getPriceWithoutSoftware(7);
```

returns ' nothing found with given id'

## getTotalPrice(id)

### Test 1:Return: The price of the computer including the total price of the software

```js
myComputerStorage.getTotalPrice(2);
```

Returns:
380

### Test 2: if no computer with the given number is found throws an exeption

```js
myComputerStorage.getPriceWithoutSoftware(7);
```

returns ' nothing found with given id'

## getPriceOfTheSoftware(id)

### Test 1:Return: The price of the computer including the total price of the software

```js
myComputerStorage.getTotalPrice(2);
```

Returns:
380

### Test 2: if no computer with the given number is found throws an exeption

```js
myComputerStorage.getPriceWithoutSoftware(7);
```

returns ' nothing found with given id'
