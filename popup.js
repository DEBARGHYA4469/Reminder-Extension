document.body.onload = function() {
  chrome.storage.sync.get({"data":[]}, function(items) {
    if (!chrome.runtime.error) {
       var len=items.data.length-1;
        
       for(var i=0;i<len;i++){
           var e=document.getElementById("0");
           var xx=items.data[i];
           //var time=xx.substr(x.length-5);
           var time_yy=xx.substr(xx.length-5);
           var child=document.createElement("h2");
           child.setAttribute("id",(i+1).toString());
           
           var tt=document.createTextNode(xx.substr(0,xx.length-5));
           var alarm=document.createElement("h2");
           alarm.setAttribute("class","alarms");
           var uu=document.createTextNode(time_yy);
           alarm.appendChild(uu);
                  
           child.appendChild(tt);
           child.appendChild(alarm);
           e.appendChild(child);
           var color=i%2;
           if(color==0){
               var loc=document.getElementById((i+1).toString());
               //loc.setAttribute("style","background-color:lightgreen");
               loc.setAttribute("class","even");
           }//color
           else{
                var loc=document.getElementById((i+1).toString());
               //loc.setAttribute("style","background-color:beige");
               loc.setAttribute("class","odd");
           }
       }
    
     // document.getElementById("0").innerText = items.data[0];
    }//runtime error check....
  });
}

document.getElementById("set").onclick = function() {
  var d = document.getElementById("text").value;
    var t=document.getElementById("time").value;
    var obj=[];
    if(d!="" && t!=""){
    obj.push(d.concat(t));
    chrome.storage.sync.get({"data":[]}, function(items) {
    chrome.storage.sync.set({ "data" : obj.concat(items.data) }, function() { });
    });     
 window.close();}
   
}

document.getElementById("reset").onclick=function(){
    var v="";
    chrome.storage.sync.set({"data":v});
    window.close();
}