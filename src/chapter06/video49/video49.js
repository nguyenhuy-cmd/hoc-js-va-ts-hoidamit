// Truy cập phần tử HTML trong DOM

// Một số cách phổ biến để truy cập phần tử:
// - document.getElementById():
const element = document.getElementById("username")
console.log(element);

// - document.querySelector(): dùng để tìm phần tử đầu tiên khớp với CSS selector(id, class, tag.....)
const myDiv = document.querySelector(".huy")

// - document.querySelectorAll(): dùng để lấy tất cả các phần tử khớp với CSS selector và trả về NodeList(giống mảng)
const myAll = document.querySelectorAll(".huy")

