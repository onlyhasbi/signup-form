(() => {
  "use strict";

  var input = document.querySelectorAll(".input");
  var message = document.querySelectorAll(".message");

  var form = document.querySelector(".form");

  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      var firstNameValidation = e.target[0].value.trim().length > 0;
      var lastNameValidation = e.target[1].value.trim().length > 0;
      var emailValidation = e.target[2].value.trim().length > 0;
      var passwordValidation = e.target[3].value.trim().length > 0;

      if (!firstNameValidation) {
        message[0].classList.add("error");
        input[0].classList.add("alert-icon");
        input[0].placeholder = "";
      } else {
        message[0].classList.remove("error");
        input[0].classList.remove("alert-icon");
      }

      if (!lastNameValidation) {
        message[1].classList.add("error");
        input[1].classList.add("alert-icon");
        input[1].placeholder = "";
      } else {
        message[1].classList.remove("error");
        input[1].classList.remove("alert-icon");
      }

      if (!emailValidation) {
        message[2].classList.add("error");
        input[2].classList.add("alert-icon");
        input[2].placeholder = "email@example.com";
      } else {
        if (form.checkValidity()) {
          message[2].classList.remove("error");
          input[2].classList.remove("alert-icon");
        } else {
          message[2].textContent = "Looks like this is not an email";
        }
      }

      if (!passwordValidation) {
        message[3].classList.add("error");
        input[3].classList.add("alert-icon");
        input[3].placeholder = "";
        input[3].value = "";
      } else {
        message[3].classList.remove("error");
        input[3].classList.remove("alert-icon");
      }
    },
    false
  );
})();
