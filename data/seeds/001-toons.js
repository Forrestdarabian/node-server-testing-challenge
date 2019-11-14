exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
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
