// Callback và vẫn đề của Callback Hell(đại ngục Callback)
//Callback là 1 hàm được truyền vào như 1 đối số cho 1 hàm khác và sẽ được gọi lại sau khi hàm kia thực hiện xong công việc của nó
/*
Callback thường dùng trong tác vụ:
- Đọc file
- Gọi API
- Chờ đợi sự kiện
*/
const greeting = (name, callback) => {
    console.log(`Xin chào ${name}`);
    callback();
}
const hello = () => {
    console.log("Learn Callback");
    
}
greeting("Huy", hello)

// Hạn chế dùng Callback nhé!