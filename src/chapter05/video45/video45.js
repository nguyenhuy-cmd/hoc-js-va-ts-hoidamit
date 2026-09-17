// Bài tập
const sanPham1 = {
    name: "Đồ chơi",
    price: 100,
    inStock: true
}

const sanPham2 = {
    name: "Đồ ăn",
    price: 100,
    inStock: true
}

const sanPham3 = {
    name: "Đồ uống",
    price: 100,
    inStock: true
}

const sanPham4 = {
    name: "Đồ tắm",
    price: 100,
    inStock: false
}

const sanPham5 = {
    name: "Đồ ngủ",
    price: 100,
    inStock: false
}
const sanPham =  [sanPham1, sanPham2, sanPham3, sanPham4, sanPham5];

// In ra tên sản phẩm đầu tiên
console.log(sanPham[0].name);

// Thay đổi giá sản phẩm thứ 2 thành 150
sanPham2.price = 150;

// Xóa sản phẩm cuối ra khỏi danh sách
sanPham.pop();

// Dùng forEach để in tất cả tên sản phẩm
sanPham.forEach((value, index) =>{
    console.log("index:", index ,"value:", value);
})

// Dùng  map() để tạo mảng mới chủ chứa giá sản phẩm
const sanphams = sanPham.map((x) => x.price);

// Dùng filter() để lấy các sản phẩm còn hàng 
const sanphamconhang = sanPham.filter((x) => x.inStock === true);

// Dùng for...in dể duyệt qua thuộc tính của sản phẩm đầu tiêna
for(let key in sanPham1){
    console.log(key, sanPham1[key]);
}
