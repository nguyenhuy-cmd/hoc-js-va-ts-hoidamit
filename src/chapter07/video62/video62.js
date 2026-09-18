/* 
Promise lời hứa từ tương lai: là 1 đối tượng đại diện cho 1 giá trị sẽ có trong tương lai,
thường là kết quả của 1 tác vụ bất đồng bộ:
- Gọi API
- Đọc file
- Truy vẫn cơ sở dữ liệu
*/
// Nói cách khác: Giống như 1 lời hứa: Tôi sẽ cung cấp kết quả sau - hoặc thành công, hoặc thất bại;
/*
3 trạng thái:
- pending:Chưa có kết quả – đang xử lý   
- fulfilled: Thành công – trả về kết quả (resolve)  
- rejected: Thất bại – trả về lỗi (reject)   
*/
/*
console.log(`Xin chào`);

setTimeout(() => {
    console.log(`Hi`);
}, 2000);
console.log("Tạm biệt");
*/
const myPromise = () => {
    return new Promise((resolve, reject) => {// nếu thành công dùng resolve, nếu thất bại dùng reject
        setTimeout(() => {
    console.log(`Hi`);
    resolve("Bạn đã đúng")// Gần giống như return
}, 2000);
    });
}
// Cách 1: Hứng trực tiếp
const test = myPromise();
console.log(test);
console.log(`================================`);
console.log("1");

// Cách 2: Viết theo kiểu đồng bộ
myPromise().then(data => {
    console.log(data);
    console.log("3");
    
})

