let personName :string = '';

personName = prompt('WHAT IS YOUR NAME?') || '';

let LowerCase :string = personName.toLowerCase() ;
let Uppercase :string = personName.toUpperCase() ;
let titlecase :string = personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')

if(personName !== null && personName !== ''){
    alert(`hello ${personName},here are your name in:
LowerCase: ${LowerCase}
UpperCase: ${Uppercase}
TitleCase: ${titlecase}`)
}
else{
    alert('please fill your name !')
}