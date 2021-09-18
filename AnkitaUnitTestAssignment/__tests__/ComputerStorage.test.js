"use strict";

const ComputerStorage = require("../ComputerStorage");
const data = require("../datastorage.json");
const datastorageWithoutType = require("../datastorageWithoutType.json");

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
      id: 1,
      manufacturer: "BMI",
      type: "minitower",
      accessories: ["keyboard", "display", "mouse"],
      price: 250,
      software: [
        {
          name: "Writer",
          price: 123,
        },
        {
          name: "Solitaire",
          price: 10,
        },
      ],
    });
  });

  test("missing parameter throws an exception", () => {
    expect(() => new ComputerStorage()).toThrow("data storage missing");
  });
});

describe("Testing getAllIdsByManufacturer(value)", () => {
  const computerStorage = new ComputerStorage(data);

  test("get from jsonData with parameters BMI", () => {
    expect(computerStorage.getAllIdsByManufacturer("BMI")).toEqual([1, 3]);
  });

  test("If parameter is missing", () => {
    expect(computerStorage.getAllIdsByManufacturer()).toEqual([]);
  });

  test("If there is no match ", () => {
    expect(computerStorage.getAllIdsByManufacturer("abcd")).toEqual([]);
  });
});

describe("Testing getAllComputerTypes()", () => {
  const computerStorage = new ComputerStorage(data);

  test("returns an array of different computer types", () => {
    expect(computerStorage.getAllComputerTypes()).toEqual([
      "minitower",
      "laptop",
    ]);
  });
  const computerStorage1 = new ComputerStorage(datastorageWithoutType);

  test("If no types are found", () => {
    expect(computerStorage1.getAllComputerTypes()).toEqual([]);
  });
});

describe("Testing getAllComputerTypes(type)", () => {
  const computerStorage = new ComputerStorage(data);

  test("returns an array of computer objects of given type", () => {
    expect(computerStorage.getAllComputersByType("laptop")).toEqual([
      {
        id: 2,
        manufacturer: "CERA",
        type: "laptop",
        accessories: ["mouse"],
        price: 350,
        software: [
          {
            name: "Writer",
            price: 10,
          },
          {
            name: "Counter",
            price: 20,
          },
        ],
      },
      {
        id: 3,
        manufacturer: "BMI",
        type: "laptop",
        accessories: [],
        price: 150,
        software: [],
      },
    ]);
  });

  test("If there is no match ", () => {
    expect(computerStorage.getAllComputersByType("XYZ")).toEqual([]);
  });

  test("missing parameter throws an exception", () => {
    expect(() => new ComputerStorage()).toThrow("data storage missing");
  
  });
});

describe("Testing hasAccessories(id)", () => {
  const computerStorage = new ComputerStorage(data);

  test("returns true if the computer has accessories", () => {
    expect(computerStorage.hasAccessories(1)).toEqual(true);
  });

  test("If parameter id is missing false is returned ", () => {
    expect(computerStorage.hasAccessories()).toEqual(false);
  });
});

describe("Testing GetComputerAccessories(id)", () => {
  const computerStorage = new ComputerStorage(data);

  test("Returns an array of computer accessories", () => {
    expect(computerStorage.GetComputerAccessories(2)).toEqual(["mouse"]);
  
  });

  test("Returns an empty array if computer accessories not found", () => {
    expect(computerStorage.GetComputerAccessories(6)).toEqual([]);
  });
});

describe("Testing getPriceWithoutSoftware(id)", () => {
  const computerStorage = new ComputerStorage(data);

  test("Return: The price of the computer not including the price of the software", () => {
    expect(computerStorage.getPriceWithoutSoftware(1)).toEqual(250);
  });

  test("if no computer with the given number is found", () => {
    expect(() => computerStorage.getPriceWithoutSoftware()).toThrow(
      "nothing found with given id"
    );
  });
});

describe("Testing getTotalPrice(id)", () => {
  const computerStorage = new ComputerStorage(data);

  test("The price of the computer including the total price of the software", () => {
    expect(computerStorage.getTotalPrice(2)).toEqual(380);
  });

  test("if no computer with the given number is found throws an exeption", () => {
    expect(() => computerStorage.getTotalPrice(7)).toThrow(
      "nothing found with given id"
    );
  });
});

describe("Testing getTotalPrice(id)", () => {
  const computerStorage = new ComputerStorage(data);

  test("The price of the computer including the total price of the software", () => {
    expect(computerStorage.getPriceOfTheSoftware(1)).toEqual(133);
  });

  test("if no computer with the given number is found throws an exeption", () => {
    expect(() => computerStorage.getPriceOfTheSoftware(7)).toThrow(
      "nothing found with given id"
    );
  });
});



