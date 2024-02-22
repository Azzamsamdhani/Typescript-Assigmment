let personName :string = '';

personName = prompt('what is your name?') || '';

let lowercase :string = personName.toLowerCase() ;
let uppercase :string = personName.toUpperCase() ;
let titlecase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ')

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, Here are you name in:
LowerCase: ${lowercase}
upperCase: ${uppercase}
TitleCase: ${titlecase}`)
}
else{
    alert('Please fill your name !')
}