const exam = getExamData();

document
.getElementById("passageTitle")
.innerText = exam.title;

document
.getElementById("passageContent")
.innerText = exam.passage;

renderQuestions();

startTimer();

document
.getElementById("submitBtn")
.addEventListener(
"click",
submitExam
);


function closeModal(){

document
.getElementById(
"resultModal"
)
.classList.add(
"hidden"
);

}
