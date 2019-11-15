const db = require("../data/dbConfig.js");

const { insert } = require("./toonsModel.js");

describe("toons model", function() {
  describe("insert()", function() {
    beforeEach(async () => {
      await db("toons").truncate();
    });

    it("should insert a toon", async function() {
      await insert({ name: "casper" });

      const toons = await db("toons");
      expect(toons).toHaveLength(1);
    });

    it("should insert the provided toon", async function() {
      await insert({ name: "casper" });
      await insert({ name: "zippy" });

      const toons = await db("toons");

      expect(toons).toHaveLength(2);
      expect(toons[0].name).toBe("casper");
      expect(toons[1].name).toBe("zippy");
    });

    it("should return the inserted toon", async function() {
      let toon = await insert({ name: "casper" });
      expect(toon.name).toBe("casper");
      expect(toon.id).toBeDefined();

      toon = await insert({ name: "zippy" });
      expect(toon.name).toBe("zippy");
      expect(toon.id).toBeDefined();
    });
  });
});
