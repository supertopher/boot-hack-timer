document.addEventListener('DOMContentLoaded', function(){

  $.ajax({
    url: "https://api.travis-ci.org/repos/red-admirals-2014/BootTrack/builds",
    headers: { Accept: "application/vnd.travis-ci.2+json" },
    success: function(data) {
      console.log(data);
     }
  });

});
