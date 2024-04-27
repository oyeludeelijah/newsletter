const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error-msg");
const submit = document.getElementById("submit-btn");
const emailText = document.getElementById("email-text");

const returnBtn = document.getElementById("return-btn");

function validateEmail() {
  if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    errorElement.textContent = "Valid email required!";
    email.style.backgroundColor = "hsl(0, 50%, 92%)";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.borderColor = "hsl(4, 100%, 67%)";

    console.log("invalid email");
    return false;
  }

  errorElement.textContent = "";
  email.style.backgroundColor = "";
  email.style.color = "";
  email.style.borderColor = "";
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "" || email.value == null) {
    e.preventDefault();
    errorElement.textContent = "Email is required!";
  } else if (validateEmail()) {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
    emailText.textContent = `${email.value}.`;
  }
});

returnBtn.addEventListener("click", function () {
  page2.classList.add("hidden");
  page1.classList.remove("hidden");
  email.value = "";
});
