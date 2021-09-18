module.exports = class ComputerStorage {
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

  getAllComputersByType(type) {
    if (!type) {
      throw new Error("parameter missing");
    }
    let computerObject = [];
    this.dataStorage.forEach((element) => {
      if (element.type == type) {
        computerObject.push(element);
      }
    });
    return computerObject;
  }

  hasAccessories(id) {
    if (!id) {
      return false;
    }
    let accessories = false;
    this.dataStorage.forEach((element) => {
      if (
        element.id == id &&
        element.accessories &&
        element.accessories.length > 0
      ) {
        accessories = true;
      }
    });
    return accessories;
  }

  GetComputerAccessories(id) {
    let accessories = [];
    if (!id) {
      return accessories;
    }
    this.dataStorage.forEach((element) => {
      if (element.id == id) {
        element.accessories.forEach((accessorie) => {
          accessories.push(accessorie);
        });
      }
    });
    return accessories;
  }

  getPriceWithoutSoftware(id) {
    if (!id) {
      throw new Error("nothing found with given id");
    }
    let computerPrice;
    this.dataStorage.forEach((element) => {
      if (element.id == id && element.price && !element.software.price) {
        computerPrice = element.price;
      }
    });
    return computerPrice;
  }

  getTotalPrice(id) {
    let computerFound = false;
    let computerPrice = 0;
    let softwarePrice = 0;
    this.dataStorage.forEach((element) => {
      if (element.id == id) {
        computerFound = true;
        computerPrice = element.price;
        element.software.forEach((element) => {
          softwarePrice = element.price + softwarePrice;
        });
      }
    });
    if (!computerFound) {
      throw new Error("nothing found with given id");
    }

    return computerPrice + softwarePrice;
  }

  getPriceOfTheSoftware(id) {
    let computerFound = false;
    let softwarePrice = 0;
    this.dataStorage.forEach((element) => {
      if (element.id == id) {
        computerFound = true;
        element.software.forEach((element) => {
          softwarePrice = element.price + softwarePrice;
        });
      }
    });
    if (!computerFound) {
      throw new Error("nothing found with given id");
    }
    return softwarePrice;
  }
};
