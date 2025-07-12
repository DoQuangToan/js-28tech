// console.log(window)
// console.log(navigator)
// console.log(window)

//Tạo và set thời gian lưu trữ của cookie, làm cho khi reload không bị mất cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    setCookie("fullName","Do Quang Toan",3);

    //hàm để lấy 1 giá trị của cookie
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
        }
        return "";
        }
        //hàm để lấy tất cả hàm và value của cookie
        var giatri = document.cookie;

// Đổi giá trị cho cookie
// ● Cú pháp:
// document.cookie = "name=value";

// Xóa cookie
// ● Chỉ cần xét lại giá trị ngày hết hạn expires về những thời gian trước đây.
// ● Cú pháp:
// document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
// ● Hàm để xóa một cookie:
// function deleteCookie(cname) {
// document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
//Baitap
 //bai1
// var currenturl= location.href;
// console.log(currenturl);
// //bai3
// var redirect=((url,delay)=>{
// setTimeout(() => {
//         location.href=url;
// }, delay);
// })
// redirect("<https://daca.vn/>", 3000);
//bai4
var reloadPage= ((delay)=>{
    setTimeout(() => {
        location.reload
    }, delay);
});
reloadPage(3000);
//bai6
// window.print();
//bai7
var seconds = 10;


function countDown() {
  if (seconds >= 0) {
    console.log(seconds);
    seconds--;
    setTimeout(countDown, 1000); // Hiển thị đếm ngược mỗi giây
  } else {
    console.log("Happy New Year!");
  }
}


countDown();
    
