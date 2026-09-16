// Keyword Return
// Return: dùng để kết thúc hàm hoặc trả về 1 giá trị ra ngoài
function cong(a,b){
    if(typeof a === "number" && typeof b === "number"){
    return a + b;
    }
    return "Tham số truyền vào phải là số";
}
console.log(cong(5,7));

