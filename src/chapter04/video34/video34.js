// Bài tập:

// Bài 1
function diemSo(toan, van, anh){
    return (toan + van + anh) / 3;
}
console.log(diemSo(3,4,5));

// Bài 2
function xepLoai(diemtb){
    if(diemtb >= 9){
        return `Xuất sắc`;
    }else if(diemtb >= 8 && diemtb < 9){
        return `Giỏi`;
    }else if(diemtb >=6.5 && diemtb < 8){
        return `Khá`;
    }else{
        return `Trung bình`;
    }
}
console.log(xepLoai(2));

