function updateLink(results){
  if (results.visited){
    var href = results.url.replace('http://live.mlssoccer.com/mlsmdl/', '');
    var link = document.querySelector('a[href="'+href+'"]');
    link.innerText = "already watched";
  }
}

var links = document.querySelectorAll('a[programId]:not(.disable)');
for (var i = 0; i < links.length; i++){
  var url = links[i].href;
  chrome.runtime.sendMessage({url: url}, updateLink);
}
