function renderQuestions(){

const container =
document.getElementById(
"questionContainer"
);

const palette =
document.getElementById(
"questionPalette"
);

container.innerHTML="";
palette.innerHTML="";


exam.questions.forEach(
(q,index)=>{

// Palette Button

const box =
document.createElement(
"button"
);

box.className=
"palette-btn";

box.innerText=
index+1;

box.onclick=()=>{

document
.getElementById(
`question${index}`
)
.scrollIntoView({

behavior:"smooth"

});

};

palette.appendChild(
box
);


// Question Card

const div =
document.createElement(
"div"
);

div.className=
"question";

div.id=
`question${index}`;


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
div);

});

}
