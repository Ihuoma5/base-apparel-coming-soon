
 
function ValidateEmail(input) {
    let error = document.querySelector("#error")
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
      error.textContent = ""
      document.form1.text1.focus();
      return true;
    } else {
    error.textContent = "Please provide a valid email"
    
      document.form1.text1.focus();
    }
  
  }
