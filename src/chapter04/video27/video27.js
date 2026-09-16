// Câu lệnh switch-case

const diem = 6;
switch(true) {
    // Mỗi case riêng biệt, không có break → "rơi xuống" case tiếp theo
    case (diem >=0 && diem < 5):
    
        console.log(`Bạn bị yếu`);
        break;

    case (diem >=5 && diem < 7):
        console.log(`Bạn được trung bình`);
        break;

    case 7:
    case 8:
        console.log(`Bạn được học sinh khá`);
        break;

    case 9:
    case 10:
        console.log(`Bạn được học sinh giỏi`);
        break;
    
    default: 
        console.log(`Điểm không hợp lệ`);
}