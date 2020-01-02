export function Reducer() {

    // Sum of Array
    var sum = [10, 20, 30].reduce((a, b) => a + b, 0);
    console.log(sum);

    // Sum value in object array    

    var ObjectSum1 = [{ x: 10 }, { x: 20 }, { x: 30 }, { x: 40 }, { x: 50 }].reduce((acc, curr) => acc + curr.x, 0);

    var ObjectSum2 = [{ x: 10 }, { x: 20 }, { x: 30 }, { x: 40 }, { x: 50 }].map(a => a.x).reduce((acc, curr) => acc + curr);

    console.log(ObjectSum1, ObjectSum2);

    // Flatern an array of array

    var flatternArr = [[10, 20], [30, 40], [50, 60], [70, 80], [90, 100]].reduce((acc, curr) => {
        return acc.concat(curr);
    }, []);

    console.log(flatternArr);

    // Counting instances of values in an object.

    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

    let countInstance = names.reduce((NameObj, property) => {
        if (property in NameObj) {
            NameObj[property]++;
        } else {
            NameObj[property] = 1;
        }
        return NameObj;
    }, {})
    console.log(countInstance);

    // Grouping Object By Property

    let people = [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
    ];


    
}