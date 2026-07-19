import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numberCollection = new NumbersCollection([2, -3, 132, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

// const charactersCollection = new CharactersCollection('Adrian');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(132);
linkedList.add(-1);
linkedList.add(-3);
linkedList.add(-2);
const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
console.log(linkedList);
