"use strict";

const ComputerStorage = require("../ComputerStorage");
const data = require("../datastorage.json");

//Constructor

describe("Testing constructor", () => {
  test("json object created", () => {
    const computerStorage = new ComputerStorage(data);
    expect(computerStorage.dataStorage).toEqual(data);
  });

  test("missing parameter throws an exception", () => {
    expect(() => new ComputerStorage()).toThrow("data storage missing");
  });
});

//Methods

describe("testing getById", () => {

  test("use default jsonData", () => {
    const computerStorage = new ComputerStorage(data);

    expect(computerStorage.getById(1)).toEqual({
      "id":1,
      "manufacturer": "BMI",
      "type": "minitower",
      "accessories": ["keyboard", "display", "mouse"],
      "price": 250,
      "software": [
        {
          "name": "Writer",
          "price": 123
        },
        {
          "name": "Solitaire",
          "price": 10
        }
      ]
    });
  });

  test("missing parameter throws an exception", () => {
    expect(() => new ComputerStorage()).toThrow("data storage missing");
  });


});
 
  
