"use strict";
let personName = '';
personName = prompt('WHAT IS YOUR NAME?') || '';
let LowerCase = personName.toLowerCase();
let Uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase(1)+word.slice(1).toLowerCase(0)).join(' ');
if (personName !== null && personName !== '') {
    alert(`hello ${personName},here are your name in:
LowerCase: ${LowerCase}
UpperCase: ${Uppercase}
TitleCase: ${titlecase}`);
}
else {
    alert('please fill your name !');
}
