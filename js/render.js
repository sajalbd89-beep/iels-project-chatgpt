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
onclick="
document
.querySelectorAll('.palette-btn')
[${index}]
.style.background='#2b9348';

document
.querySelectorAll('.palette-btn')
[${index}]
.style.color='white';
"
A.
${q.options[0]}

</label>

<br><br>

<label>

<input
type="radio"
name="q${index}"
value="B">
onclick="
document
.querySelectorAll('.palette-btn')
[${index}]
.style.background='#2b9348';

document
.querySelectorAll('.palette-btn')
[${index}]
.style.color='white';
"
B.
${q.options[1]}

</label>

<br><br>

<label>

<input
type="radio"
name="q${index}"
value="C">
onclick="
document
.querySelectorAll('.palette-btn')
[${index}]
.style.background='#2b9348';

document
.querySelectorAll('.palette-btn')
[${index}]
.style.color='white';
"
C.
${q.options[2]}

</label>

<br><br>

<label>

<input
type="radio"
name="q${index}"
value="D">
onclick="
document
.querySelectorAll('.palette-btn')
[${index}]
.style.background='#2b9348';

document
.querySelectorAll('.palette-btn')
[${index}]
.style.color='white';
"
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

oninput="
saveAnswer(
${index},
this.value
);

document
.querySelectorAll('.palette-btn')
[${index}]
.style.background='#2b9348';

document
.querySelectorAll('.palette-btn')
[${index}]
.style.color='white';
"

placeholder="Type answer">

`;

}


container.appendChild(
div
);

});
}
