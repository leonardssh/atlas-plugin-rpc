'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rollup = require('rollup');

console.log(typeof rollup.rollup);
exports.HouseType = void 0;
(function (HouseType) {
    HouseType[HouseType["SMALL"] = 0] = "SMALL";
    HouseType[HouseType["MEDIUM"] = 1] = "MEDIUM";
    HouseType[HouseType["BIG"] = 2] = "BIG";
})(exports.HouseType || (exports.HouseType = {}));
