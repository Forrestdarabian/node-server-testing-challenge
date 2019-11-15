exports.seed = function(knex, Promise) {
  return knex("toons")
    .truncate()
    .then(function() {
      return knex("toons").insert([
        { name: "casper" },
        { name: "zippy" },
        { name: "bo" },
        { name: "shower gel" }
      ]);
    });
};
