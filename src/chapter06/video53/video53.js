// Thay đổi css bằng javaScript: 
/*
Cú pháp:
- element.style.teenthuoctinhCSS = "giá trị mới";
*/

const myBtn = document.getElementById("myBtn");
const myBtn2 = document.getElementById("myBtn2");
const myText = document.getElementById("myText");
console.log(myBtn, myBtn2, myText);
myBtn.addEventListener("click", function() {
    console.log("ĐÃ bấm nút 1");
    myText.innerText = "Đã bấm";
    myText.style.color = "red";
})
myBtn2.addEventListener("click", function() {
    console.log("ĐÃ bấm nút 2");
    myText.innerText = "Video53";
    myText.style.color = "blue'";
})
