'use strict';

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
  break;
default :
  // console.log('you should answer with yes or no or you can write it y or no');
  alert('you should answer with yes or no or you can write it y or no');

}



let major = prompt ('Am i a civil engineer?' , 'yes , no');
major = major.toLowerCase();
switch (major){
case 'yes':
case 'y' :
  // console.log('Yes, actually i am a civil engineer');
  alert('Yes, actually i am a civil engineer');
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
  break;
default :
  // console.log();
  alert('you should answer with yes or no or you can write it y or no');

}



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
  break;
default :
  // console.log('you should answer with yes or no or you can write it y or no');
  alert('you should answer with yes or no or you can write it y or no');

}



let jobType = prompt ('Am I prefer a freelance job over full-time job?' , 'yes , no');
jobType = jobType.toLowerCase();
switch (jobType){
case 'yes':
case 'y' :
  // console.log();
  alert('yes, maybe it is unstable but actully i like it more');
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

