.question-palette{

display:grid;

grid-template-columns:
repeat(5,1fr);

gap:12px;

margin-bottom:30px;

}


.palette-btn{

height:55px;

border:none;

background:#dee2e6;

border-radius:15px;

font-size:18px;

font-weight:700;

cursor:pointer;

transition:.3s;

}


.palette-btn:hover{

background:#00509d;

color:white;

}


.question{

background:white;

padding:25px;

border-radius:20px;

margin-bottom:25px;

box-shadow:
0 10px 25px rgba(0,0,0,.07);

}


.question label{

font-size:17px;

line-height:2;

}


#resultModal{

position:fixed;

top:0;

left:0;

right:0;

bottom:0;

background:
rgba(0,0,0,.5);

display:flex;

justify-content:center;

align-items:center;

}


.modal-content{

background:white;

padding:50px;

border-radius:25px;

text-align:center;

width:450px;

}
