// Goi API với Fetch
// Fetch: => raw data(Response)
const fetchs = fetch("http://localhost:8000/user");
 fetchs
 .then(res => res.json())// Chuyển sang dạng Object
 .then(data => console.log(data));// Hứng dữ liệu cuối cùng từ API và hiển thị ra màn hình.
console.log(fetchs); 