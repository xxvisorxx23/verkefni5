let score = 0;
let h1 = document.createElement('h1');
h1.innerHTML = "Nafn:Kristjan Ingi Ragnarsson";
const container = document.querySelector('#container');
const div = document.createElement('div');
div.style.color = "black";
div.style.borderStyle = "solid";
div.style.padding = "10px";
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let button1 = document.createElement('button');
let button2 = document.createElement('button');
let button3 = document.createElement('button');
let button4 = document.createElement('button');
button1.setAttribute("id","a");
button2.setAttribute("id","b");
button3.setAttribute("id","c");
button4.setAttribute("id","d");
h2.innerHTML = "verkefni 5.2 quiz";
let i = 0;
  let quizquestions = [
    {
        question : "svarid er A-1",
        a : "A-1",
        b : "B-2",
        c : "C-3",
        d : "D-4",
    },
    {
      question : "svarid er true",
      a : "true",
      b : "false",
  }
];
  let q = quizquestions[i];
  
  h3.innerHTML = q.question;
button1.innerHTML = q.a;
button2.innerHTML = q.b;
button3.innerHTML = q.c;
button4.innerHTML = q.d;
div.appendChild(h1);
div.appendChild(h2);
div.appendChild(h3);
div.appendChild(button1);
div.appendChild(button2);
div.appendChild(button3);
div.appendChild(button4);
maincontainer.appendChild(div);
document.getElementById("a").addEventListener("click",correctquestion 
);
document.getElementById("b").addEventListener("click",wrongquestion 
);
document.getElementById("c").addEventListener("click",wrongquestion 
);
document.getElementById("d").addEventListener("click",wrongquestion 
);
function correctquestion(){
  score++;
  let q = quizquestions[1];
  h3.innerHTML = q.question;
  button1.innerHTML = q.a;
  button2.innerHTML = q.b;
  div.removeChild(button3);
  div.removeChild(button4);
document.getElementById("a").addEventListener("click",correctquestion1 );
document.getElementById("b").addEventListener("click",wrongquestion1);
  };
  function wrongquestion(){
    let q = quizquestions[1];
    h3.innerHTML = q.question;
    button1.innerHTML = q.a;
    button2.innerHTML = q.b;
    div.removeChild(button3);
    div.removeChild(button4);
document.getElementById("a").addEventListener("click",correctquestion1);
document.getElementById("b").addEventListener("click",wrongquestion1);
    };  
function correctquestion1(){
      h3.innerHTML = score+ "/2 stig";
      div.removeChild(button1);
      div.removeChild(button2);
      div.removeChild(button3);
      div.removeChild(button4);
      };
function wrongquestion1(){
        h3.innerHTML = score+"/2 stig";
        div.removeChild(button1);
        div.removeChild(button2);
        div.removeChild(button3);
        div.removeChild(button4);
};