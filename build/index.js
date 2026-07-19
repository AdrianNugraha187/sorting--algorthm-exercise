"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// const numberCollection = new NumbersCollection([2, -3, 132, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection("Adrian");
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
//# sourceMappingURL=index.js.map