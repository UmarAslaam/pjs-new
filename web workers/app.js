let heading1 = document.getElementById('head-1');
let heading2 = document.getElementById('head-2');
let button1= document.getElementById('btn-1');
let button2= document.getElementById('btn-2');

function hi() {
    heading1.innerHTML +='Hi';
}

let cal = ()=>{
    let worker = new Worker('worker.js');
    worker.postMessage('Start the calculation');
    worker.onmessage=(e)=>{
        console.log(e)
        heading2.innerHTML = e.data;    
    }
  
}
button1.addEventListener('click',hi)
button2.addEventListener('click',cal)
