/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((value) => {
    console.log(
      "Id: " +
        value.id +
        ", Name: " +
        value.name +
        ", Age: " +
        value.age +
        ", Profession: " +
        value.profession
    );
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

  arr.forEach((value) => {
    console.log(
      "Id: " +
        value.id +
        ", Name: " +
        value.name +
        ", Age: " +
        value.age +
        ", Profession: " +
        value.profession
    );
  });
}

function addData() {
  //Write your code here, just console.log

  const newObj = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };
  arr.push(newObj);
  PrintDeveloperbyMap();
}

function removeAdmin() {
  //Write your code here, just console.log
  const indexToRemove = arr.findIndex((item) => item.profession === "admin");
  arr.splice(indexToRemove, 1);

  PrintDeveloperbyMap();
}
function concatenateArray() {
  //Write your code here, just console.log

  let arr2 = [
    { id: 5, name: "Shubham", age: "24", profession: "developer" },
    { id: 6, name: "Ankit", age: "21", profession: "hr" },
    { id: 7, name: "Mike", age: "22", profession: "admin" },
  ];

  let newArr = arr.concat(arr2);
  arr = newArr;
  PrintDeveloperbyMap();
}
