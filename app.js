function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");
  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      const textCreateAccount = document.getElementById("text-create-account");

      //Check for validation
      if (input.type === "text" && validateUser(input)) {
        console.log("everything is OKAYYYY");
        nextSlide(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        console.log("everything is OKAYYYY");
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validateUser(input)) {
        console.log("everything is OKAYYYY");
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
        textCreateAccount.style.animation = "shake-text 0.5s ease";
      }

      //Get rid of animation
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
      textCreateAccount.addEventListener("animationend", () => {
        textCreateAccount.style.animation = "";
      });
    });
  });
}

function nextSlide(parent, nextForm) {
  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

function validateUser(user) {
  if (user.value.length < 6) {
    console.log("ERROR: not enough characters");
    error("rgb(189,87,87)");
  } else {
    error("rgb(87,189,130)");
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    error("rgb(87,189,130)");
    return true;
  } else {
    console.log("Email is not valid.");
    error("rgb(189,87,87)");
  }
}

function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();
