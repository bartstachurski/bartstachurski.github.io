document.addEventListener("DOMContentLoaded", function() {
  const signupForm = document.getElementById("contact-form")
  signupForm.addEventListener("submit", function(event) {
    event.preventDefault()
    let data = {
      subject: `${event.currentTarget.name.value} Sent You A Message From Github`,
      from: event.currentTarget.email.value, 
      body: event.currentTarget.message.value,
      source: "Github.io",
      to: "bartstachurski@hey.com"
    }
    fetch("https://sheltered-reaches-40837.herokuapp.com/api/emails", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err))
  });
});
