'use strict';

let userName = prompt('Whats your name?');
alert('Welcome to my site ' + userName);
let score = 0;

function Q1() {

  let myName = prompt ('Do you think I used to be called by my first name?' , 'yes , no');
  myName = myName.toLowerCase();
  switch (myName){
  case 'yes':
  case 'y' :
    // console.log('You\'re wrong, I used to be called by my family name');
    alert('You\'re wrong, I used to be called by my family name');
    break;
  case 'no':
  case 'n' :
    // console.log('you\'re right, maybe if you call me by my name i wouldn\'t reply');
    alert('you\'re right, maybe if you call me by my name i wouldn\'t reply');
    score++;
    break;
  default :
    // console.log('you should answer with yes or no or you can write it y or no');
    alert('you should answer with yes or no or you can write it y or no');
  
  }
}




function Q2(){
  
let major = prompt ('Am i a civil engineer?' , 'yes , no');
major = major.toLowerCase();
switch (major){
case 'yes':
case 'y' :
  // console.log('Yes, actually i am a civil engineer');
  alert('Yes, actually i am a civil engineer');
  score++;

  break;
case 'no':
case 'n' :
  // console.log('No, actually i am a civil engineer');
  alert('No, actually i am a civil engineer');
  break;
default :
  // console.log('you should answer with yes or no or you can write it y or no');
  alert('you should answer with yes or no or you can write it y or no');

}

}


function Q3(){

  let old = prompt ('Am i 27 years old?' , 'yes , no');
  old = old.toLowerCase();
  switch (old){
  case 'yes':
  case 'y' :
    // console.log();
    alert('Actually i am 25 years old');
  
    break;
  case 'no':
  case 'n' :
    // console.log();
    alert('you\'re right, I am 25 years old');
    score++;
  
    break;
  default :
    // console.log();
    alert('you should answer with yes or no or you can write it y or no');
  
  }
}


function Q4(){
  
let coding = prompt ('Do you think i don\'t like the coding?' , 'yes , no');
coding = coding.toLowerCase();
switch (coding){
case 'yes':
case 'y' :
// console.log('you should answer with yes or no or you can write it y or no');
  alert('If you\'re right, then what am doing here?!');
  break;
case 'no':
case 'n' :
  // console.log('you should answer with yes or no or you can write it y or no');
  alert('you\'re right, I like the coding');
  score++;

  break;
default :
  // console.log('you should answer with yes or no or you can write it y or no');
  alert('you should answer with yes or no or you can write it y or no');

}
}



function Q5(){

  let jobType = prompt ('Am I prefer a freelance job over full-time job?' , 'yes , no');
  jobType = jobType.toLowerCase();
  switch (jobType){
  case 'yes':
  case 'y' :
    // console.log();
    alert('yes, maybe it is unstable but actully i like it more');
    score++;
  
    break;
  case 'no':
  case 'n' :
    // console.log();
    alert('you\'re not right this time');
    break;
  default :
    // console.log();
    alert('you should answer with yes or no or you can write it y or no');
  
  }
}

function Q6(){

  let guessNum = prompt ('Guess a number, you have 4 opportunities');
  guessNum = parseInt(guessNum);
  // my num is 88
  let trial = false;
  
  for(let i=1; i<=3 ; i++){
    if(guessNum > 88){
      guessNum =parseInt(prompt ('too high, try again'));
    }
    else if ( guessNum < 88){
      guessNum =parseInt(prompt ('too low, try again'));
    }
    else if (guessNum === 88) {
      alert ('You\'re right!');
      trial = true;
      score++;
  
      break;
  
    }
    else {
      guessNum =parseInt(prompt ('you should insert a number'));
    }
  }
  if (!trial){
    alert('The number is 88');
  }
}


function Q7(){



  let cars = [ 'bmw' , 'toyota' ,'audi' , 'mercedes' , 'honda' ];
  let guessCar =prompt('Which car brand do i like most?').toLowerCase();
  let trial2 = false;
  
  
  
  for(let i=1 ; i<6 ; i++){
    for(let i=0 ;i<= 4 ; i++){
      if (guessCar === cars[i]){
        alert ('You\'re right!');
        score++;
        trial2 = true;
        break;
      }
    }
    if(trial2){
      break;
    }
    guessCar =prompt('Try again, Which car brand do i like most?').toLowerCase();
  }
  
  let carBrands = '';
  for(let i=0 ; i<4 ; i++){
    carBrands = carBrands + cars [i] + ' and ' ;
  }
  alert ('My favourite brands are : ' + carBrands + cars [(cars.length-1)] );
}
Q1();
Q2();
Q3();
Q4();
Q5();
Q6();
Q7();

alert ('your score is ' + score + ' out of 7');



