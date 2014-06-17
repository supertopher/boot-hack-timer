var travis_data, last_commit, last_build;

document.addEventListener('DOMContentLoaded', function(){

  $.ajax({
    url: "https://api.travis-ci.org/repos/red-admirals-2014/BootTrack/builds",
    headers: { Accept: "application/vnd.travis-ci.2+json" },
    success: function(data) {
      // console.log(data);
      travis_data = data;
      last_build  = travis_data.builds[0];
      last_commit = travis_data.commits[0];
     }
  });

});
