/* 
Sử dụng: 
- for..in: duyệt qua thuộc tính
- for..of: duyệt qua giá trị
trong Object
*/
const sv1 = {
    name: "Huy",
    score: 8
}

const sv2 = {
    name: "Hằng",
    score: 10
}

const sv3 = {
    name: "Hà",
    score: 9
}
const sinhVien = [sv1, sv2, sv3];
console.log(sinhVien);
/*
sinhVien.forEach((item, index) => {
    console.log("index:", index, "item:", item);
})
*/
// for..in
for(let key in sv1){
    console.log(key, sv1[key]);
}

// for.. of
// Nếu muốn lấy giá trị trong Object
for(let value of Object.values(sv2)){
    console.log(value);
}
// Hoặc duyệt qua cả cặp [key, value]
for(let[key, value] of Object.entries(sv2)){
    console.log(key,value);
}

// Nếu muốn dùng for...of cho mảng sinhVien
for(let sv of sinhVien){
    console.log(sv.name, sv.score);
}


