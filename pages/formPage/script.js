function sendMail(event) {
  event.preventDefault();

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_tebgl5k", "template_v5m3mpd", params)
    .then(function(response) {
        alert("Email inviata con successo!");
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Si è verificato un errore durante l'invio dell'email. Riprova più tardi.");
    });
}
