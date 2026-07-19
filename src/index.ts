import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";

// const numberCollection = new NumbersCollection([2, -3, 132, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

const charactersCollection = new CharactersCollection("Adrian");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
