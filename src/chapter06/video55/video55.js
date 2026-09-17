// Local Storage:  là 1 phần của web Storage API, cho phép bạn lưu trữ giũ liệu ngay trong trình duyệt của người dùng
/*
Đặc đểm: 
- Dữ liệu không bị mất khi reload  hoặc tắt trình duyệt
- lưu trữ dạng key-value, kiểu string 
*/
/*
Phương thức:
- localStorage.setItem(key, value): Lưu dữ liệu (value phải là chuỗi)
- localStorage.getItem(key): Lấy dữ liệu theo key
- localStorage.removeItem(key): Xóa dữ liệu theo key
- localStorage.clear(): Xóa toàn bộ dữ liệu đã lưu trong Local Storage
*/
const submit = document.getElementById("submit");
const input = document.getElementById("name");
const prev = document.getElementById("prev");
const message = document.getElementById("message");

// Lấy tên cũ từ localStorage (nếu có)
const prevName = localStorage.getItem("huy");
if(prevName){
    // Hiển thị tên cũ ở phần "Your previous Name is:"
    prev.innerText = prevName;

    // Điền sẵn tên cũ vào ô input (KHÔNG dùng thẻ HTML vì input.value chỉ nhận text thuần)
    input.value = prevName;
}

submit.addEventListener("click", function(){
    console.log(input.value); // value để lấy cái mình vừa điền vào input

    // Trước khi lưu tên mới, hiển thị tên cũ (tên hiện tại trong localStorage) ở "previous"
    const oldName = localStorage.getItem("huy");
    if(oldName){
        prev.innerText = oldName;
    }

    // Lưu tên mới vào localStorage
    localStorage.setItem("huy", input.value);

    // Hiển thị tên mới ở "Your Name is:"
    message.innerHTML = `<b>${input.value}</b>`;
})

