const { getAllProduct, getProductByCode, getCheckout } = require("../services/product-service");

describe("Pruebas de product-service", () => {
  it("Debe retornar todos los productos ", () => {
    expect(getAllProduct().length).toBe(5);
  });
  describe("Pruebas de getProductByCode", () => {
    it("Debe retornar un producto por el codigo pasado", () => {
      expect(getProductByCode("BT")).toBeDefined();
    });
    it("Retornar un undefinet si el producto no existe", () => {
      expect(getProductByCode("B2")).not.toBeDefined();
    });
  });
  it("getCheckout Debe retornar el calculo del la lista de producto pasado", () => {
    expect(getCheckout(["BT"])).toBeDefined();
  });

});
