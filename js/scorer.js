function submitExam() {

let score = 0;

exam.questions.forEach((q,index)=>{

let answer="";

if(q.type==="Multiple Choice"){

const selected=document.querySelector(
`input[name="q${index}"]:checked`
);

answer=selected?.value || "";

}
else{

answer=document
.getElementById(`q${index}`)
?.value
.trim() || "";

}

if(
normalizeAnswer(answer)
===
normalizeAnswer(q.answer)
){

score++;

}

});

document
.getElementById("scoreText")
.innerText=
`Correct Answers: ${score}/${exam.questions.length}`;

document
.getElementById("bandText")
.innerText=
`Estimated ${getBand(score)}`;

document
.getElementById("resultModal")
.classList.remove("hidden");

}
