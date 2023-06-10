const flname = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener("submit", (e) => {
  e.preventDefault();
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
  }).then((message) => alert(message));
});
