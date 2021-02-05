"use strict";

exports.__esModule = true;
exports.isClient = exports.isSuperAdmin = exports.isAdmin = void 0;

exports.isAdmin = function (user) {
  return !user ? false : user.roles.includes('ADMIN') || user.roles.includes('SUPERADMIN');
};

exports.isSuperAdmin = function (user) {
  return !user ? false : user.roles.includes('SUPERADMIN');
};

exports.isClient = function (user) {
  return !user ? false : !user.roles.includes('ADMIN') || !user.roles.includes('SUPERADMIN') || !user.roles.includes('ITEMEDITOR');
};