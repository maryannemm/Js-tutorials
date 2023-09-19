try {
    document.getElementById('userData').onsubmit = function() {
      let user = document.getElementById('phone').value;
      user = Number(user);
      let pass=document.getElementById('password').value;
      let pass2=document.getElementById('password1').value;

  
      if (isNaN(user)) {
        document.getElementById('error').innerHTML = 'Your phone number is incorrect';
        return false; // Prevent form submission
      }
      else if (pass!= pass2){
        document.getElementById('passerror').innerHTML='Your passwords didnt match!';
        return false;
      }
      /*else{
        let u=document.getElementById('username').value;
        document.getElementById('user').innerHTML='Hello ',u
        return true; // Allow form submission
      }*/
      
    };
  } 
catch (error) {
    console.error(error);
    document.getElementById('e').innerHTML = error;

  }
finally{
    let u=document.getElementById('username').value;
    document.getElementById('user').innerHTML=u
}