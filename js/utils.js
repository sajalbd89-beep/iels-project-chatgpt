function normalizeAnswer(answer) {

return answer
.trim()
.toLowerCase()
.replace(/\s+/g," ");

}


function saveAnswer(index,value){

localStorage.setItem(
`answer_${index}`,
value
);

}


function getSavedAnswer(index){

return localStorage.getItem(
`answer_${index}`
) || "";

}
