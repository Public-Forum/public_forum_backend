"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
function routing(db, secret) {
    var routing = {
        usersRouting: users_1.usersRouting(db, secret),
    };
    return routing;
}
exports.routing = routing;
;
