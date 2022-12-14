// typewriter effect in hero
document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Front End Developer", "Back End Developer", "Full Stack Developer"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.getElementById("type-here").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

  // Scroll Reveal
  ScrollReveal().reveal('.appear', {
    distance: '60px',
    duration: 2000,
    origin: 'left',
  });

  ScrollReveal().reveal('.header', {
    delay: 375,
    duration: 2000,
    distance: '60px',
    origin: 'top',
    reset: true,
});

  ScrollReveal().reveal('.in-from-the-left', {
    delay: 375,
    duration: 2500,
    distance: '60px',
    origin: 'left',
    reset: true,
});
  
  ScrollReveal().reveal('.in-from-the-right', {
    delay: 375,
    duration: 2500,
    distance: '60px',
    origin: 'right',
    reset: true,
});

  ScrollReveal().reveal('.in-from-the-bottom', {
    delay: 375,
    duration: 2500,
    distance: '60px',
    origin: 'bottom',
    reset: true,
});


// Bootsrap

// Tool Tips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Forms 
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()