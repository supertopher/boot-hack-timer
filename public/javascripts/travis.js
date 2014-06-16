request = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', function(){


  request.open("GET", "http://api.travis-ci.org/", true);

  request.setRequestHeader(
    "User-Agent",
    "boot-hack-timer/1.0.0"
    );
  request.setRequestHeader(
    "Accept",
    "application/vnd.travis-ci.2+json"
    );
  request.setRequestHeader(
    "Host",
    "api.travis-ci.org"
    );

  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      // Success!
      data = JSON.parse(request.responseText);
      console.log(data);
    } else {
      // We reached our target server, but it returned an error

    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log("error");
  };

  // request.send();

});
