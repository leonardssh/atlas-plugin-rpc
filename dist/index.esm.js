import { rollup } from 'rollup';

console.log(typeof rollup);
var HouseType;
(function (HouseType) {
    HouseType[HouseType["SMALL"] = 0] = "SMALL";
    HouseType[HouseType["MEDIUM"] = 1] = "MEDIUM";
    HouseType[HouseType["BIG"] = 2] = "BIG";
})(HouseType || (HouseType = {}));

export { HouseType };
