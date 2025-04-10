var users = JSON.parse(localStorage.getItem("user")) || [];
if (document.querySelector(".register-form")) {
  var registerName = document.querySelector(".register-name");
  var registerEmail = document.querySelector(".register-email");
  var registerPassword = document.querySelector(".register-password");
  var registerBtn = document.querySelector(".register-btn");
  var registerForm = document.querySelector(".register-form");
  var doneHead = document.querySelector(".done");
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (
      !registerName.value ||
      !registerEmail.value ||
      !registerPassword.value
    ) {
      window.alert("Please Fill All Forms");
      return;
    }
    addUser();
    clearForms();
    doneHead.classList.remove("d-none");
  });

  function clearForms() {
    registerName.value = null;
    registerEmail.value = null;
    registerPassword.value = null;
  }

  function addUser() {
    var user = {
      userName: registerName.value,
      userEmail: registerEmail.value,
      userPassword: registerPassword.value,
    };
    users.push(user);
    localStorage.setItem("user", JSON.stringify(users));
  }
}
var x;
if (document.querySelector(".singInForm")) {
  var singInEmail = document.querySelector(".singInEmail");
  var signInPass = document.querySelector(".signInPass");
  var loginBtn = document.querySelector(".loginBtn");
  var warning = document.querySelector(".warning");
  var singInForm = document.querySelector(".singInForm");
  var usersFromDataBase = JSON.parse(localStorage.getItem("user"));

  singInForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!singInEmail.value || !signInPass.value) {
      window.alert("Please Fill All Forms");
      return;
    }
    for (var i = 0; i < usersFromDataBase.length; i++) {
      if (
        usersFromDataBase[i].userEmail == singInEmail.value &&
        usersFromDataBase[i].userPassword == signInPass.value
      ) {
        x = sessionStorage.setItem(
          "currentUserName",
          usersFromDataBase[i].userName
        );
        window.location.href = "home.html";
        break;
      } else {
        warning.classList.remove("d-none");
      }
    }
  });
}
if (document.querySelector(".main")) {
  var account = JSON.parse(localStorage.getItem("user"));
  var main = document.querySelector(".main");
  var userNa = sessionStorage.getItem("currentUserName");
  main.innerHTML = `hi ${userNa}`;
}
