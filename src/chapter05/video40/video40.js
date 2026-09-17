/*
Biến đổi mảng với map(): 
- Trả về một mảng mới có cùng độ dài với mảng ban đầu.
- Tự do biến đổi giá trị của các phần tử trên mảng mới.
- Giữ nguyên mảng ban đầu (không làm thay đổi / không mutate mảng gốc).
*/

const so = [1, 2,3];

so.forEach((element,index) => {
    console.log(index, element);
})

// Cách viết đầy đủ
const so1 = so.map((x) => {
    return x * 2;
})

// Cách viết ngắn gọn hơn
const so2 = so.map((x) => x * 2);
console.log(so1);
console.log(so);


