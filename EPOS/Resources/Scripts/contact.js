function get()  {
  var subject = document.getElementById('subject').value;

  var msg = document.getElementById('message').value;

  var myLink = document.getElementById('link');

  var email = document.getElementById('email');

  var newLinkHref = "mailto:ml20230520@student.fon.bg.ac.rs" +
                "?subject=" + subject +
                "&body=" + msg;

  myLink.href = newLinkHref;

  if (subject !== '' && email !== '') {
    myLink.click();
  }
}
