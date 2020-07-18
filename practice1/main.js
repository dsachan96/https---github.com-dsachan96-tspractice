"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var p = new point_1.Point(12, 13);
console.log('x: ' + p.x + ' y: ' + p.y);
p.x = 185;
p.y = 154;
console.log('x: ' + p.x + ' y: ' + p.y);
