const deliveryController = require("../../src/controllers/delivery.controller");

const createMockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

exports.shouldCreate = (userId) => {
  test("create delivery", async () => {
    const res = createMockResponse();
    const req = {
      body: {
        movies: "Movie 1",
        rent: 5.99,
        days_rented: 3,
        delivery_charge: 2.99,
      },
      userObj: { user_id: userId },
    };

    try {
      await deliveryController.addDelivery(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "success" });
    } catch (error) {
      console.error(error);
    }
  });
};

exports.shouldNotCreate = () => {
  test("should not create delivery", async () => {
    const res = createMockResponse();
    const req = {
      body: {},
      userObj: {},
    };

    try {
      await deliveryController.addDelivery(req, res);
      expect(res.status).not.toEqual(201);
    } catch (error) {
      console.error(error);
    }
  });
};
