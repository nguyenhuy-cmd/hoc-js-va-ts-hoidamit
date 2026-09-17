const nhap1 = document.getElementById("nhap1");
const nhap2 = document.getElementById("nhap2");
const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    const dangNhap = nhap1.value.trim(); // Lấy giá trị (chuỗi) từ ô input
    const password = nhap2.value;

    // Reset viền về mặc định — dùng nhap1, nhap2 (phần tử DOM) chứ KHÔNG phải dangNhap, password (chuỗi)
    nhap1.style.borderColor = "";
    nhap2.style.borderColor = "";

    if(!dangNhap || !password){
        alert("Bạn thiếu tên đăng nhập hoặc mật khẩu");
        return;
    }
    if(dangNhap === "hoidanit@gmail.com" && password  === "123456"){
        alert("Bạn đã đăng nhập thành công");
        window.location.href = "huy.html";
    }else{
        // Đổi viền đỏ — dùng phần tử DOM (nhap1, nhap2)
        nhap1.style.borderColor = "red";
        nhap2.style.borderColor = "red";
        alert("Tài khoản hoặc mật khẩu sai")
    }
});