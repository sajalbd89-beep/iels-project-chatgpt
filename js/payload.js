function getExamData(){

const params =
new URLSearchParams(
window.location.search
);

const payload =
params.get("payload");

if(!payload){

alert(
"No exam found."
);

throw new Error();

}

try{

return JSON.parse(
atob(payload)
);

}

catch{

alert(
"Broken exam link."
);

throw new Error();

}

}
