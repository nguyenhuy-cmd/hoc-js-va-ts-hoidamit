/*
Lọc phần tử mảng với filter():
- Trả về: Một mảng mới chỉ chứa các phần tử thỏa mãn điều kiện (callback trả về true).
- Độ dài mảng mới: Có thể nhỏ hơn hoặc bằng mảng ban đầu, hoặc rỗng [] nếu không phần tử nào thỏa mãn.
- Mảng gốc: Giữ nguyên giá trị (không bị mutate).
*/

const so = [1,2,3];

//Cách viết đầy đủ
const so1 = so.filter((x) => {
    return x < 2;
});

// Cách viết ngắn gọn
const so2 = so.filter((x) => x < 2);
console.log(so);
console.log(so1);

