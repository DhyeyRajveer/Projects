
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var form = document.getElementById("login");
let uname = form.elements['uname'].value;
let pass = form.elements['psw'].value;

console.log(uname);
console.log(pass);

function CheckPassword(inputtxt) 
{ 
var passw=  /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}