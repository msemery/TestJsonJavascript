var txt = '';
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
    jsonParser(xmlhttp.responseText);
  }
};
xmlhttp.open("GET","icpn.json",true);
xmlhttp.send();

function jsonParser(text){
  //convertir le string en json
    var jsonData = JSON.parse(text);
    var iconset = jsonData['iconsets'];
    var container = document.getElementById("container");
    for (let i = 0; i < iconset.length; i++) {
        var name = iconset[i]['styles']['name'];
        var author = iconset[i]['author'];
        container.insertAdjacentHTML('beforeend', '<div id="icon">'+ name + '</div>');
        container.insertAdjacentHTML('beforeend', '<div id="author">'+ author + '</div>');
        
    }
}
    


  