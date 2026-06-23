let seconds=3600;

function startTimer(){

setInterval(()=>{

seconds--;

let m=Math.floor(seconds/60);

let s=seconds%60;

document
.getElementById(
"timer"
)
.innerText=
`${m}:${String(s).padStart(2,"0")}`;

if(seconds<=0){

submitExam();

}

},1000);

}
