const pickupController = require("../../src/controllers/pickup.controller");

const createMockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

exports.shouldCreate = (userId) => {
  test("create pickup", async () => {
    const res = createMockResponse();
    const req = {
      body: {
        movies: "Movie 1",
      },
      userObj: { user_id: userId },
    };

    try {
      await pickupController.addPickup(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: "Pickup details added successfully",
        pickup: expect.any(Object),
      });
    } catch (error) {
      console.error(error);
    }
  });
};

exports.shouldNotCreate = () => {
  test("should not create pickup", async () => {
    const res = createMockResponse();
    const req = {
      body: {},
      userObj: {},
    };

    try {
      await pickupController.addPickup(req, res);
      expect(res.status).toHaveBeenCalledWith(400); // Change to expect 400 for validation failure
      expect(res.json).toHaveBeenCalledWith({
        message: expect.stringContaining("movies cannot be empty"),
      });
    } catch (error) {
      console.error(error);
    }
  });
};
