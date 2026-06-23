function submitExam(){

let score=0;


exam.questions.forEach(
(q,index)=>{

const answer =
document
.getElementById(
`q${index}`
)
.value
.trim()
.toLowerCase();


if(
answer===
q.answer
.toLowerCase()
){

score++;

}

});


document
.getElementById(
"scoreText"
)
innerText=
`Correct Answers:

${score}/${exam.questions.length}`;


document
.getElementById(
"bandText"
)
.innerText=
getBand(score);


document
.getElementById(
"resultModal"
)
.classList.remove(
"hidden"
);

}
