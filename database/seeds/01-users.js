exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'Mark', password: "abc123", department: "HR" },
        { username: 'Tim', password: "abc123", department: "Operations" }
      ]);
    });
};
