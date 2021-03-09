const dummytable = require("../models/dummytable");

var hooks = {};

exports.hooks = hooks;

var set_full_name = (dummytable) => {
  console.log(dummytable);
  dummytable.full_name = dummytable.first_name + ` ` + dummytable.last_name;
};

hooks.beforeCreate = [set_full_name];
hooks.beforeUpdate = [set_full_name];
hooks.afterUpdate = [set_full_name];
