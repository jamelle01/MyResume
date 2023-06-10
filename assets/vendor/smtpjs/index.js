const flname = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("php-email-form")[0];

let forms = document.querySelectorAll(".php-email-form");

submit.addEventListener("submit", function (event) {
  event.preventDefault();

  let thisForm = this;

  thisForm.querySelector(".loading").classList.add("d-block");
  thisForm.querySelector(".error-message").classList.remove("d-block");
  thisForm.querySelector(".sent-message").classList.remove("d-block");

  console.log("clicked");

  // write html for proper format to be sent in mail
  let ebody = `
        <div>
          <p><strong>Name: </strong><span id="flname">${flname.value}</span></p>
          <p><strong>Email: </strong><span id="email">${email.value}</span></p>
          <p><strong>Message: </strong><span id="message">${message.value}</span></p>
        </div>
      `;

  Email.send({
    SecureToken: "dc0107b0-7bb2-49ed-86a1-0e5732186f42",
    To: "ellemarej123@gmail.com",
    From: "ellemarej123@gmail.com",
    Subject: email.value + " " + subject.value,
    Body: ebody,
  })
    .then((data) => {
      thisForm.querySelector(".loading").classList.remove("d-block");
      thisForm.querySelector(".sent-message").classList.add("d-block");
      thisForm.reset();
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
});
function displayError(thisForm, error) {
  thisForm.querySelector(".loading").classList.remove("d-block");
  thisForm.querySelector(".error-message").innerHTML = error;
  thisForm.querySelector(".error-message").classList.add("d-block");
}
// submit.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("clicked");

//   // write html for proper format to be sent in mail
//   let ebody = `
//   <div>
//     <p><strong>Name: </strong><span id="flname">${flname.value}</span></p>
//     <p><strong>Email: </strong><span id="email">${email.value}</span></p>
//     <p><strong>Message: </strong><span id="message">${message.value}</span></p>
//   </div>

//   `;

//   Email.send({
//     SecureToken: "dc0107b0-7bb2-49ed-86a1-0e5732186f42",
//     To: "ellemarej123@gmail.com",
//     From: "ellemarej123@gmail.com",
//     Subject: email.value + " " + subject.value,
//     Body: ebody,
//   }).then((message) => alert(message));
// });
