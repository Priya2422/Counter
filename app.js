const btn1=document.querySelector(".increase");
const btn2=document.querySelector(".reset");
const btn3=document.querySelector(".decrease");
const num=document.querySelector(".num");
let count=0;
btn1.addEventListener("click",function(){
 count++;
 num.textContent=count;
 if(count<0){
    num.style.color=rgb(200, 32, 32);
}else if(count>0){
    num.style.color="rgb(3, 203, 3)";
}else if(count==0){
    num.style.color="#fff";
}
})
btn2.addEventListener("click",function(){
    count=0;
    num.textContent=count;
    num.style.color="#fff";
})

btn3.addEventListener("click",function(){
    count--;
    num.textContent=count;
    if(count<0){
        num.style.color='rgb(200, 32, 32)';
    }else if(count>0){
        num.style.color="rgb(3, 203, 3)";
    }else if(count==0){
        num.style.color="#fff";
    }
})
