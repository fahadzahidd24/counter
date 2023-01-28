const plus = document.querySelector('.plus')
const min = document.querySelector('.min')
const reset = document.querySelector('.reset')
const span = document.querySelector('.count')

let count = 0;
span.style.color = 'rgb(1, 1, 58)';
span.textContent = count;
plus.addEventListener('click',()=>{
    count++;
    if(count>0){ 
        span.style.color = 'rgb(30, 94, 0)';
    }
    span.textContent = count;
})
min.addEventListener('click',()=>{
    count--;
    if(count<0){
        span.style.color = 'rgb(177, 0, 0)'
    }
    span.textContent = count;
})
reset.addEventListener('click',()=>{
    count = 0;
    span.style.color = 'rgb(1, 1, 58)'
    span.textContent = count;
})
