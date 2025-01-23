let input = document.querySelector('input');
let add   = document.querySelector('.add');
let work  = document.querySelector('.work');



add.addEventListener('click',function(){
   
    if(input.value === ''){
        alert('You must write something');
    }else{
        //add it in the ul 
        let li = document.createElement("li");      //creates new html element of the type li i.e list
        li.innerHTML = input.value;                 //us list k andar input ki value dali
        work.appendChild(li);                          //us list ko work me dala
        input.value='';                             //input ko clear kardia!!

        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    savedata(); //SAVES DATA


})



work.addEventListener('click',function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }

},false);


function savedata(){
    localStorage.setItem("data",work.innerHTML);
}

function showdata(){
    work.innerHTML = localStorage.getItem("data");
}

showdata();