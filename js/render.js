function renderQuestions(){

const container =
document.getElementById(
"questionContainer"
);

container.innerHTML="";


exam.questions.forEach(
(q,index)=>{

const div =
document.createElement(
"div"
);

div.className =
"question";


if(q.type==="Multiple Choice"){

div.innerHTML=`

<p>

${index+1}. ${q.question}

</p>

<input
id="q${index}"
placeholder="Answer A/B/C/D">

`;

}

else{

div.innerHTML=`

<p>

${index+1}. ${q.question}

</p>

<input
id="q${index}"
placeholder="Type answer">

`;

}


container.appendChild(
div
);

});

}
