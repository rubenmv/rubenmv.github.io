
function sendMail(sender, message) {
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'cduTvYgHRD97cPAqYIs-Mg',
      'message': {
        'from_email': sender,
        'to': [{
          'email': 'rub3nmv@gmail.com',
          'name': 'Ruben Martinez Vilar',
          'type': 'to'
        }],
        'subject': 'Portfolio message by ' + sender,
        'html': message
      }
    }
  });
}

$(document).ready(function () {
  document.getElementById("btn-send-mail").addEventListener("click", function () {
    var sender = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    sendMail(sender, message);
  });
});


