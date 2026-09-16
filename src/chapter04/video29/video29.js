// Câu lệnh điều khiển luồng

// Câu lệnh break: dùng để thoát khỏi vòng lặp ngay lập tức
for(let i = 0; i <=10;i++){
    if(i === 5)break;
    console.log(i);    
}

// Câu lệnh continue: bỏ qua phần tử được continue đánh giấu 
for(let i = 0; i <=10;i++){
    if(i === 5)continue;
    console.log(i);    
}