const deliveryTestCase = require("./testcase/delivery.test");
const pickupTestCase = require("./testcase/pickup.test");
const userDao = require("../src/models/user.model");
const deliveryDao = require("../src/models/delivery.model");
const pickupDao = require("../src/models/pickup.model");

const oldDb = process.env.DB_NAME;
let testUser;

beforeAll(async () => {
  process.env.DB_NAME += "test";
  testUser = await userDao.create({
    google_id: "testUserGooleId",
  });
});

afterAll(async () => {
  await Promise.all([
    deliveryDao.destroy({ where: {} }),
    userDao.destroy({ where: {} }),
    pickupDao.destroy({ where: {} }),
  ]);
  process.env.DB_NAME = oldDb;
});

describe("running test", () => {
  describe("delivery test cases", () => {
    it("should create delivery", async () => {
       deliveryTestCase.shouldCreate(testUser.user_id);
    });

    it("should not create delivery", async () => {
       deliveryTestCase.shouldNotCreate();
    });
  });

  describe("pickup test cases", () => {
    it("should create pickup", async () => {
       pickupTestCase.shouldCreate(testUser.user_id);
    });

    it("should not create pickup", async () => {
       pickupTestCase.shouldNotCreate();
    });
  });
});
