// Duyệt mảng với vòng lặp và forEach

// Vòng lặp for
let so = [10, 20, 30];
for(let i = 0; i < so.length; i++){
    console.log(i + ":" + so[i]);
}

// for-each
so.forEach(function(value, index){
    console.log(`${value}:  ${index}`);
})

// for-each bằng Array function
so.forEach((value, index) => {
    console.log(`${value}: ${index}`);
})