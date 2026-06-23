function restoreAnswers(){

exam.questions.forEach(
(q,index)=>{

const input =
document.getElementById(
`q${index}`
);

if(input){

input.value =
getSavedAnswer(index);

}

});

}
