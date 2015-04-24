chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
  if (msg.url) {
    chrome.history.getVisits(
      {url: msg.url},
      function(visits){
        var visited = (visits.length > 0);
        callback({
          visited: visited,
          url: msg.url
        });
      }
    );
    return true;
  }
  return false;
});
