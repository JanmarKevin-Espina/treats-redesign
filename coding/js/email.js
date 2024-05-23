function sendEmail() {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "janmarkespina.yns@gmail.com",
    Password : "bsVk@990102",
    To : 'janmarkespina.yns@gmail.com',
    From : document.getElementById("email").value,
    Subject : "Thank you for the feedback!",
    Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}