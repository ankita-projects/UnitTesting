class ComputerStorage {
  constructor(jsonData) {
    if (!jsonData) {
      throw new Error("data storage missing");
    }
    this.dataStorage = jsonData;
  }
  getById(id) {
    if (!id) {
      throw new Error("parameter missing");
    }
    let computerObject = null;
    this.dataStorage.forEach((element) => {
      if (element.id == id) {
        computerObject = element;
      }
    });

    return computerObject;
  }

  getAllIdsByManufacturer(value) {
    let ids = [];
    if (!value) {
      return ids;
    }
    this.dataStorage.forEach((element) => {
      if (element.manufacturer == value) {
        ids.push(element.id);
      }
    });
    return ids;
  }
  getAllComputerTypes() {
    let computerTypes = [];
    this.dataStorage.forEach((element) => {
      if (element.type && !computerTypes.includes(element.type)) {
        computerTypes.push(element.type);
      }
    });
    return computerTypes;
  }
}

let myComputerStorage = new ComputerStorage([
  {
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
  },
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

myComputerStorage.getById(2);
myComputerStorage.getAllIdsByManufacturer("BMI");
myComputerStorage.getAllComputerTypes();