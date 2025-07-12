//2.1
// const h2_01 = document.getElementById("h2-01");
// console.log(h2_01);

// const h2_02 = document.getElementById("h2-02");
// console.log(h2_02);


// 2.2
// const listH2 = document.getElementsByTagName("h2");
// console.log(listH2);
// for (const h2 of listH2) {
//   console.log(h2);
// }


// 2.3
// const listTitle = document.getElementsByClassName("title");
// console.log(listTitle);
// for (const title of listTitle) {
//   console.log(title);
// }


// 2.4
// const title = document.querySelector(".title");
// console.log(title);

// const tagA = document.querySelector("#menu li a");
// console.log(tagA);

// const tagA2 = document.querySelector("#menu li:nth-child(2) a");
// console.log(tagA2);


// 2.5
// const listTagA = document.querySelectorAll("#menu li a");
// console.log(listTagA);


// const menu = document.getElementById("menu");
// const listTagA = menu.getElementsByTagName("a");
// console.log(listTagA);


// 3.1
// const innerHTMLH2_01 = document.querySelector("#h2-01").innerHTML;
// const innerTextH2_01 = document.querySelector("#h2-01").innerText;

// console.log(innerHTMLH2_01);
// console.log(innerTextH2_01);



// document.querySelector("#h2-01").innerHTML = "Test";


// 3.2
// const h2_03 = document.querySelector("#h2-03");
// const classH2_03 = h2_03.getAttribute("class");
// const idH2_03 = h2_03.getAttribute("id");
// const testH2_03 = h2_03.getAttribute("test");
// const idProduct = h2_03.getAttribute("data-id");

// console.log(h2_03);
// console.log(classH2_03);
// console.log(idH2_03);
// console.log(testH2_03);
// console.log(idProduct);


// const h2_01 = document.querySelector("#h2-01");
// h2_01.setAttribute("class", "test-2");


// setTimeout(() => {
//   const ads1 = document.querySelector("#ads-1");
//   // ads1.setAttribute("class", "ads ads-display");

//   // ads1.classList.add("ads-display");
//   // ads1.classList.remove("ads");
// }, 3000);


// 4
// const h2_02 = document.querySelector("#h2-02");
// h2_02.style.fontSize = "60px";
// h2_02.style.color = "blue";
// h2_02.style.background = "red";

// const h2_02 = document.querySelector("#h2-02");
// h2_02.setAttribute("class", "h2-02");
var notification = document.getElementById("notification");


function showNotification() {
  setTimeout(function() {
    notification.style.display = "none";
  }, 3000); // Ẩn thông báo sau 3 giây
}


showNotification();


//baicuoi
const button = document.getElementById("button");
setTimeout(() => {
  button.style.width = "200px";
  button.style.height = "60px";
  button.style.background = "#5CB874";
}, 5000);

