"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    collection;
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                //if collection is an array of numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
const sorter = new Sorter([1, -3, 2, -4]);
sorter.sort();
console.log(sorter.collection);
//# sourceMappingURL=index.js.map