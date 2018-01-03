const names = [
    {age: 35, name: "Clara"},
    {age: 13, name: "Brian"},
    {age: 66, name: "11"},
    {age: 45, name: "John"},
    {age: 15, name: "Susan"},
];

function createSort(key){
    return function compareStrings(stringA, stringB){
        return(stringA[key] > stringB[key]);
    };
}

//names.sort(createSort('name')); //one way

const sortByName = createSort("name"); //another way
const sortByAge = createSort("age");
names.sort(sortByAge);

//use Quokka (ctrl+shift+p)

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
