// Phạm vi biến:

// Phạm vi toàn cục: có thể truy cập đc từ bất kỳ đâu trong chương trình
const a = 1;
function so(){
    console.log(a);
}
a();
console.log(a);
  
// Phạm vi hàm
function cong(){
    const a = "a + b";
    console.log(a);
    
}

cong();
console.log(a); // lỗi

// Phạm vi khối:
if(true){
    const x = 10;
    const y = 20;
    console.log(x,y);    
} 

console.log(x,y);// lỗi
