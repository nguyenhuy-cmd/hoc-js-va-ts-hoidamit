// Thay đổi nội dung của phần tử HTML bằng innerText và innerHTTL: Cho phép lấy hoặc thay đổi nội dung dạng chữ mà người dùng nhìn thấy trên trang

const bam = document.getElementById("bam");
const myText = document.getElementById("myText");
const bam2 = document.getElementById("bam2")
console.log(bam, myText);

bam.addEventListener("click", function(){
    console.log("Đã bấm");
    // Thay đổi chữ của myText
    myText.innerText = "Bấm lần 1";

    // innerHTML có thể truyền cả những thẻ tag khác nhau mà innerText thì không
})
bam2.addEventListener("click", function(){
    myText.innerText     = "Bấm lần 2"
})


