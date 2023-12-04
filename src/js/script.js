document.getElementById("black").addEventListener("click", () => {
  const body = document.querySelector(".body2");

  body.classList.remove("body2");
  body.classList.add("body1");
});
document.getElementById("blue").addEventListener("click", () => {
  const body = document.querySelector(".body1");

  body.classList.remove("body1");
  body.classList.add("body2");
});

document.getElementById("btnSubmit").addEventListener("click", () => {
  const email = document.getElementById("emailInput");

  if (email.value == "") {
    alert("El campo email es obligatorio");
    return;
  }

  document.getElementById("form").submit();
});
