import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numberCollection = new NumbersCollection([2, -3, 132, 0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
