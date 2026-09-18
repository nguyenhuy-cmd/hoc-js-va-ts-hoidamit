// Xử lí lỗi với try-catch-finally
const doSomeThing = ()=>{
    const a = 10;
const b = 0;
if( b === 0){
    throw new Error("Không thể chia cho O")
}
return a / b;
}

try{doSomeThing()}
catch(Error){
    console.log(`b không đc bằng không`);
}finally{
    console.log(`Run`);
}

