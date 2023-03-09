// let list = document.querySelector(".list");
// step 1:: reqiesting the server for data returning promise
let request = fetch("https://jsonplaceholder.typicode.com/users");

console.log("request", request);
// step 2 : response comes as promise
let data = request.then((response) => response.json());
console.log("data", data);
// step 3//need call back fucntion jasondata
let dataOutput = data.then((jasonData) => {
  ///call back
  sendJason(jasonData);
});

//call back defination for rendering the data
let sendJason = (dataArr) => {
  console.log("data is coming  ", dataArr);
  dataArr.map((item) => {
    console.log(item.name);
  });
};
// /////7////---------------

// // // dataObj();
// let a = fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//   response.json()
// );

// a.then((jason) => {
//   datalist(jason);
// });

// const datalist = (data) => {
//   console.log("data comig to fucntion", data);
//   list.innerHTML = data.map((item) => {
//     return `<li>${item.name} - ${item.phone}`;
//   });
// };

// console.log(a);
// let b = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(b);
// console.log("checking ");
// async function dataObj() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let dataOuput = await response.jason();
//   console.log(dataOuput);
// }
// dataObj();
(async () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  let data = await fetch(url);
  const jsonData = await data.json();
  console.log(jsonData);
  sendJaosndata(jsonData);
})();

let sendJaosndata = (arr) => {
  arr.map((item) => {
    console.log(item.name);
  });
};
