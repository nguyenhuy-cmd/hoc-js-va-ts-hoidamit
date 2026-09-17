// Lắng nghe sự kiện với addEventListener: là phương thức tiêu chuẩn và hiện đại để gắn sự kiện vào phần tử HTML
/*
Cứ pháp:
- element.addEventListener("eventName", function);
- element: phần tử HTML bạn muốn gắn sự kiện.
- "eventName": tên sự kiện, ví dụ "click", "input", "mouseover".
- function: hàm xử lý khi sự kiện xảy ra
*/

const element = document.getElementById("bam");
element.addEventListener("click", function(){
    console.log("Đã nhấn");
    
})
console.log(element);
