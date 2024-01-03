var fields = {};
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } 
 /*We link all the fields on the DomContentLoaded event. We get all the fields using document.getElementById method since we have set ids for all our fields. */ 
document.addEventListener("DOMContentLoaded", function() {
    fields.fname = document.getElementById('fname');
    fields.lname = document.getElementById('lname');
    fields.subject = document.getElementById('subject');
   })

   /*Checking if a user entered a value. First part is the first line and it checks that the value is not null or undefined. Second part is checking that the value is one or more characters long*/
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

/*This function checks the condition and colors the field red, if there is an error. */
function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.classname = 'placeholderRed';
    } else {
    field.classname = '';
    }
   
    return isFieldValid;
   }

   /*Central function for checking the validity of our contact form */
   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.fname, isNotEmpty);
    valid &= fieldValidation(fields.lname, isNotEmpty);
    valid &= fieldValidation(fields.subject, isNotEmpty);
   
    return valid;
   }


   /*We use User class to show you that using a class you can combine multiple values under the same roof */ 
   class User {
    constructor(fname, lname, subject) {
    this.fname = fname;
    this.lname = lname;
    this.subject = subject;
    }
   }
   /*We check the validity, if the value is true (and the contact form is valid), we create a new User object */
   function sendContact(){
       
    if (isValid())
    {
    let usr = new User(fname.value, lname.value, subject.value);

    alert(`${usr.fname} thanks for sharing your feedback.`)
    }
    else {
        alert("There was an error")
    }
  }

  function myFunction() {
    var x = document.getElementById("game");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }