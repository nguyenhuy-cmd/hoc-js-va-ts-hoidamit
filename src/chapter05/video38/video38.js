// Truy cập, chỉnh sửa, thêm và xóa phần tử của mảng(Array)

// Truy cập phần tử trong mảng
const color = ["red", "black", "blink"];

console.log(color[0]); // red
console.log(color[1]); // black
console.log(color[2]); // blink

// Chỉnh sửa phần tử trong mảng
color[1] = "yellow";
console.log(color);

// Thêm và xóa phần tử trong mảng
// Thêm
color.push("Nâu");// Thêm cuối
color.unshift("Đen");// Thêm  đầu
// Xóa
color.pop();// Xóa cuối
color.shift() // Xóa đầu