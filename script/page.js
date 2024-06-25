//Tampilkan password
function togglePassword() {
  console.log("togglePassword function called");
  var x = document.getElementById("pwd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
document.addEventListener("DOMContentLoaded", function () { 
  document.getElementById("togglePassword").addEventListener("change", togglePassword);
});

//Tampilkan PopUp ketika salah login
function login() {
  const x = new URLSearchParams(window.location.search);
  if (x.get("errcaptcha") === "true") {
    alert('Captcha kosong atau tidak sesuai!');
    document.getElementById("captcha").classList.add("error");
    window.location = "login.html";
  }
  if (x.get('errlogin') === 'true') {
    document.getElementById("usn").classList.add("error");
    alert('Username atau Password salah!');
    document.getElementById("pwd").classList.add("error");
    window.location = 'login.html';
  }
}

//Validasi form kontribusi
document.addEventListener("DOMContentLoaded", function () {
  function A() {
    var nameEvent = document.getElementById("nameEvent").value;
    if (nameEvent === "") {
      alert("Please enter the name of the event!");
      return false;
    }
    return true;
  }
  function B() {
    var dateEvent = document.getElementById("dateEvent").value;
    if (dateEvent === "") {
      alert("Please enter the date of the event!");
      return false;
    }
    return true;
  }
  function C() {
    var eventScope = document.querySelector('input[name="eventScope"]:checked');
    if (!eventScope) {
      alert("Please choose the scope of the event!");
      return false;
    }
    return true;
  }
  function D() {
    var eventForm = document.querySelector('select[name="eventForm"]').value;
    if (eventForm === "-") {
      alert("Please choose the form of the event!");
      return false;
    }
    return true;
  }
  function E() {
    var eventDescription = document.querySelector(
      'textarea[name="eventDescription"]'
    ).value;
    if (eventDescription === "") {
      alert("Please fill the desc of the event. If doesn't exist, fill by '-'!");
      return false;
    }
    return true;
  }
  function All() {
    return A() && B() && C() && D() && E();
  }
  function showData() {
    var dateEvent = document.getElementById("dateEvent").value;
    var nameEvent = document.getElementById("nameEvent").value;
    var eventScope = document.querySelector('input[name="eventScope"]:checked');
    var eventForm = document.querySelector('select[name="eventForm"]').value;
    var eventDescription = document.querySelector(
      'textarea[name="eventDescription"]'
    ).value;
    alert(
      "Event Name: " +
      nameEvent +
      "\nDate of Event: " +
      dateEvent +
      "\nScope of Event: " +
      eventScope.value +
      "\nForm of Event: " +
      eventForm +
      "\nDescription of Event: " +
      eventDescription
    );
  }
  const myForm = document.querySelector('form[id="formulir"]');
  myForm.addEventListener("submit", function (event) {
    if (!All()) {
      event.preventDefault();
    } else {
      const x = confirm(
        "Anda yakin ingin mengirimkan data ini?"
      );
      // showData(); //Untuk Debug Saja
      if (x == true) {
        myForm.submit();
      } else {
        event.preventDefault();
      }
    }
  });
});

//Tampilkan PopUp setelah data tersimpan
function checkPopup() {
  const x = new URLSearchParams(window.location.search);
  if (x.get('popup') === 'true') {
    alert('Data kontribusi telah disimpan. Terima Kasih!');
    window.location = '../dashboard/contribution.html';
  }
}

//Tanyakan konfirmasi sebelum logout dari dashboard
function ensure() {
  var x = confirm("Are you sure you want to logout?");
  // const y = new URLSearchParams(window.location);
  if (x == true) {
    window.location.href = "../index.html";
  } else {
    window.location.href = "../dashboard/dashboard.html";
    // if (y == "dashboard.html") {
    // } else if (y == "http://localhost/pweb/TA/contribution.html") {
    //   window.location.href = "contribution.html";
    // }
  }
}