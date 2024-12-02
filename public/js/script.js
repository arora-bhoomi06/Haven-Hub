
// (() => {
//   'use strict'

  
//   const forms = document.querySelectorAll('.needs-validation')

  
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// })()

(() => {
  'use strict';
  console.log("Custom validation script loaded"); // Should appear in the console
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        console.log("Form validation failed"); // Log this if validation fails
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
