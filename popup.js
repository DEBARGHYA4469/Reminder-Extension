document.body.onload = function() {
  chrome.storage.sync.get({"data":[]}, function(items) {
    if (!chrome.runtime.error) {
       var len=items.data.length-1;
        
       for(var i=0;i<len;i++){
           var e=document.getElementById("0");
           var xx=items.data[i];          
           var child=document.createElement("h2");
           child.setAttribute("id",(i+1).toString());
           var tt=document.createTextNode(xx);
           child.appendChild(tt);
           e.appendChild(child);
           var color=i%2;
           if(color==0){
               var loc=document.getElementById((i+1).toString());
               loc.setAttribute("style","background-color:lightgreen");
           }//color
           else{
           var loc=document.getElementById((i+1).toString());
           loc.setAttribute("style","background-color:beige");
           }
       }
    
     // document.getElementById("0").innerText = items.data[0];
    }//runtime error check....
  });
}

document.getElementById("set").onclick = function() {
  var d = document.getElementById("text").value;

    
    var obj=[];
    obj.push(d);
    chrome.storage.sync.get({"data":[]}, function(items) {
    chrome.storage.sync.set({ "data" : obj.concat(items.data) }, function() { });
    });
    
    
  
 window.close();
}