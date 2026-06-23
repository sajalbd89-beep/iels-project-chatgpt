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

// palette button

const pBtn =
document.createElement(
"button"
);

pBtn.className=
"palette-btn";

pBtn.innerText=
index+1;

pBtn.onclick=()=>{

document
.getElementById(
`question${index}`
)
.scrollIntoView({

behavior:"smooth"

});

};

palette.appendChild(
pBtn );


// question

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

${index+1}.
${q.question}

</p>

<label>

<input
type="radio"
name="q${index}"
value="A">

A.
${q.options[0]}

</label>

<br><br>

<label>

<input
type="radio"
name="q${index}"
value="B">

B.
${q.options[1]}

</label>

<br><br>

<label>

<input
type="radio"
name="q${index}"
value="C">

C.
${q.options[2]}

</label>

<br><br>

<label>

<input
type="radio"
name="q${index}"
value="D">

D.
${q.options[3]}

</label>

`;

}

else{

div.innerHTML=`

<p>

${index+1}.
${q.question}

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
