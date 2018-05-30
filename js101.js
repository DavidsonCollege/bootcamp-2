// function getGoogle() {
//   console.log("A");
//   fetch("google.com").then(function(res) {
//     console.log("B: I got the website!");
//   });
//   console.log("C");
// }

/*
//ES6
let addFiveDigits = a => b => c => d => e => a + b + c + d + e;
addFiveDigits(1)(1)(1)(1)(1);
//ES5
let addFiveDigits = function(a){a+function(b){b+function(c){c+function(d){d+function(e){return e;}}}}};
*/


/*
a => a
a => {a} //returns undefined
a => {return a} //works
a => ({a}) //also works
//({}) resolves the undefined error
*/
// 1.
fetch("https://www.nytimes.com/").then(
  function(res){
  console.log(res.text().then(
    function(text){console.log(text);}));
});

// 2.
var promise1 = new Promise(function(resolve, reject) {
  fetch("https://www.nytimes.com/").then(
    function(res){
    console.log(res.text().then(
      function(text){console.log(text);}));
  });
});
var promise2 = new Promise(function(resolve, reject) {
  fetch("https://www.washingtonpost.com/?noredirect=on").then(
    function(res){
    console.log(res.text().then(
      function(text){console.log(text);}));
  });
});
var promise3 = new Promise(function(resolve, reject) {
  fetch("http://www.bbc.com/news").then(
    function(res){
    console.log(res.text().then(
      function(text){console.log(text);}));
  });
});
var promise4 = new Promise(function(resolve, reject) {
  fetch("https://abcnews.go.com/").then(
    function(res){
    console.log(res.text().then(
      function(text){console.log(text);}));
  });
});
var promise5 = new Promise(function(resolve, reject) {
  fetch("https://www.cnn.com/specials/last-50-stories").then(
    function(res){
    console.log(res.text().then(
      function(text){console.log(text);}));
  });
});
Promise.all([promise1, promise2, promise3, promise4, promise5]).then(function(values) {
  console.log(values);
});

// 3.
var promise1 = new Promise(function(resolve, reject) {
  fetch("https://www.washingtonpost.com/?noredirect=on").then(
    function(res){
    console.log(res.text().then(
      function(text){console.log(text);}));
  });
});
var promise2 = new Promise(function(resolve, reject) {
  fetch("https://www.nytimes.com/").then(
    function(res){
    console.log(res.text().then(
      function(text){console.log(text);}));
  });
});
var promise3 = new Promise(function(resolve, reject) {
  fetch("http://www.bbc.com/news").then(
    function(res){
    console.log(res.text().then(
      function(text){console.log(text);}));
  });
});
var promise4 = new Promise(function(resolve, reject) {
  fetch("https://abcnews.go.com/").then(
    function(res){
    console.log(res.text().then(
      function(text){console.log(text);}));
  });
});
var promise5 = new Promise(function(resolve, reject) {
  fetch("https://www.cnn.com/specials/last-50-stories").then(
    function(res){
    console.log(res.text().then(
      function(text){console.log(text);}));
  });
});
Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
});

/*
"https://www.washingtonpost.com/?noredirect=on"
"https://www.nytimes.com/"
"http://www.bbc.com/news"
"https://abcnews.go.com/"
"https://www.cnn.com/specials/last-50-stories"
*/

// 4.
fetch("https://www.washingtonpost.com/?noredirect=on").then((
  function(res){
  console.log(res.text().then(
    function(text){console.log(text);}));
  }) => {
  fetch("https://www.nytimes.com/").then((
    function(res){
    console.log(res.text().then(
      function(text){console.log(text);}));
  }) => {
    fetch("http://www.bbc.com/news").then((
      function(res){
      console.log(res.text().then(
        function(text){console.log(text);}));
    }) => {
      fetch("https://abcnews.go.com/").then((
        function(res){
        console.log(res.text().then(
          function(text){console.log(text);}));
      }) => {
        fetch("https://www.cnn.com/specials/last-50-stories").then((
          function(res){
          console.log(res.text().then(
            function(text){console.log(text);}));
        }));
      });
    });
  });
});
// 5.
console.time();
fetch("https://www.washingtonpost.com/?noredirect=on").then((
  console.timeEnd(),
  fetch("https://www.nytimes.com/").then((
    console.timeEnd(),
    fetch("http://www.bbc.com/news").then((
      console.timeEnd(),
      fetch("https://abcnews.go.com/").then((
        console.timeEnd(),
        fetch("https://www.cnn.com/specials/last-50-stories").then((
          function(res){
          console.log(res.text().then(
            console.timeEnd(),
            function(text){console.log(text);}));
          }
        ))
      ))
    ))
  ))
))

// 6.
setTimeout(function(){ console.log("DONE\n"); }, 3000);

// 7.
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function(){ console.log("DONE\n"); }, 3000);
});




//
