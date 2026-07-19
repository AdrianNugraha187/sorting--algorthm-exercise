import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([2, -3, 132, 0]);
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection('Adrian');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(132);
linkedList.add(-1);
linkedList.add(-3);
linkedList.add(-2);
linkedList.sort();
linkedList.print();
console.log(linkedList);
