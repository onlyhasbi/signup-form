const input = document.querySelectorAll(".input");
const message = document.querySelectorAll(".message");
const form = document.querySelector(".form");

const isEmpty = (value) => {
  return !value.trim().length;
};

input.forEach((item, i) => {
  item.addEventListener("input", (e) => {
    const target = e.currentTarget;

    if (!!target.value.trim().length) {
      target.classList.remove("alert-icon");
      if (target.name === "email") target.placeholder = "email address";
      message[i].classList.remove("error");
    }
  });
});

(() => {
  "use strict";

  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      const target = e.currentTarget;
      for (var index = 0; index < target.length - 1; index++) {
        if (isEmpty(target[index].value)) {
          target[index].classList.add("alert-icon");
          message[index].classList.add("error");
          if (target[index].name === "email") {
            target[index].placeholder = "email@example.com";
            message[index].textContent = "Email cannot be empty";
          }
        } else {
          target[index].classList.remove("alert-icon");
          message[index].classList.remove("error");

          if (target[index].name === "email" && !form.checkValidity()) {
            target[index].classList.add("alert-icon");
            message[index].classList.add("error");
            message[index].textContent = "looks like this is not an email";
          }
        }
      }
    },
    false
  );
})();
