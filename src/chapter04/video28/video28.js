// Vòng lặp(for, while, do-while)

//for
for(let i = 0; i <= 5; i++){
    console.log(i);
}

// while
// Dùng let thay vì const, vì cần thay đổi giá trị a
let a = 0;
while(a <= 5){
    console.log(a);
    a++; // Tăng a lên 1, nếu không sẽ lặp vô hạn!
}

// do-while
// do-while luôn chạy ít nhất 1 lần, rồi mới kiểm tra điều kiện
let b = 0;
do{
    console.log("Hello cho các bạn", b);
    b++; // Tăng b lên 1
}while(b <= -1); // Kết thúc bằng dấu ; không có {} phía sau