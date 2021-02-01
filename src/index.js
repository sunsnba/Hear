import './styles/main.css';

let index = 0;

const answers = [];

const questionData = [
    {
      question: "What has prevented you from getting hearing aids sooner?",
      box1: "Not sure if I need them",
      box2: "I can’t afford them",
      box3: "I need more information",
      box4:  "I’ve been too busy"
    }, 
    {
      question: "How old are your hearing aids?",
      box1: "2 years old or less",
      box2: "3 years old",
      box3: "4 years old",
      box4: "5 years old or more"
    }, 
    {
      question: "How much does hearing loss restrict you in your daily life?",
      box1: "Not at all",
      box2: "Barely",
      box3: "Moderately",
      box4: "Severely"
    },
    {
      question: "When do you want to improve your hearing?",
      box1: "As soon as possible",
      box2: "Within the next few weeks",
      box3: "Within the next few months",
      box4: "I don't know"
    },
    {
      question: "What is your current employment status?",
      box1: "Employed",
      box2: "Unemployed",
      box3: "Retired",
      box4: "Homemaker"
    },
    {
     question: "Thanks for answering, please see your answers below:"
    }
]


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

var radios = document.getElementsByName('radAnswer');

var left = document.getElementById('la')
var leftClickHandler = function () {

    if(index === 0 ) {
        return;
    }

    if(index >= 1) {
            answers.pop();
            index--;
            document.getElementById("topQuestion").textContent=questionData[index]['question'];
            document.getElementById("answer1").textContent=questionData[index]['box1'];
            document.getElementById("answer2").textContent=questionData[index]['box2'];
            document.getElementById("answer3").textContent=questionData[index]['box3'];
            document.getElementById("answer4").textContent=questionData[index]['box4'];
    }     
}
left.addEventListener('click', leftClickHandler)


var next = document.getElementById('next')
var right = document.getElementById('ra')
var radioHandler = function () {
    
for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
    answers.push(radios[i].id)
    document.getElementById(radios[i].id).checked = false;
    
  if(index < 4) {
      index++;
  document.getElementById("topQuestion").textContent=questionData[index]['question'];
  document.getElementById("answer1").textContent=questionData[index]['box1'];
  document.getElementById("answer2").textContent=questionData[index]['box2'];
  document.getElementById("answer3").textContent=questionData[index]['box3'];
  document.getElementById("answer4").textContent=questionData[index]['box4'];
  break;
  }

  if(index === 4) {
      index++;
      document.getElementById("topQuestion").textContent=questionData[index]['question']; 
      document.getElementById("answers").style.display = 'none';
    
    var localPlaceholder = document.getElementById('success');
    var newList = '';
    for (i = 0; i < answers.length; i++) {
        newList += '<li>' + questionData[i][answers[i]] + '</li>';
    }

    localPlaceholder.innerHTML += newList;
   }
  }
 }
}
next.addEventListener('click', radioHandler)
right.addEventListener('click', radioHandler)
