// AsyncAwait, Cú pháp cho code sạch đẹp: là cú pháp hiện đại nhất trong JavaScript để xử lý bất đồng bộ
// Nó là 1 cách viết gọn gàng hơn cho Prosmime, giúp code đồng bộ, dễ hiểu và bảo trì hơn

//Cacllback

// Promise:
fetch("http://localhost:8000")
.then(res => res.json())
.then(data => console.log(data))

// Async-Await
 const fetchData = async() => {
    const res =await fetch("http://localhost:8000");
    const data = await res.json();
    console.log(res);
}
fetchData();

