let personname :string = "";

personname = prompt('What is your name?') || '';

if(personname !== null && personname !== ''){
    alert(`hello ${personname}, Would you like to learn some python today?`)
}

else{
    alert('you have to fill your name !')
}