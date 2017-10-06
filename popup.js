document.addEventListener('DOMContentLoaded',function(){
    //load the page.
    
    // storage checking....................................
    chrome.storage.sync.get('store',function(foo){
        var reload=foo.store;
        $('#help').text(reload);
    });
    
    
    
    
    var id_count=0;
    $('#bt0').click(function(){
        id_count=id_count+1;
        var textform=$('#in').val();
    var array=[];
    array.push(textform);
    chrome.storage.sync.set({'store':array});
      var array;
        chrome.storage.sync.get('store',function(foo){
            var bob=foo.store;
            bob.push('Kundu');
            
            chrome.storage.sync.set({'store':bob});
        });
    
    chrome.storage.sync.get('store',function(foo){
      var element=foo.store[id_count];
      var temp=element;
       
      var e=document.getElementById((id_count-1).toString());
                var child=document.createElement("h3");
                child.setAttribute("id",id_count.toString());
                var tt=document.createTextNode(temp);
                child.appendChild(tt);
                 
                e.appendChild(child);
                var color=id_count%2;   
                if(color==0)
                  { var jj=document.getElementById(id_count.toString());
                    jj.setAttribute("style","background-color:beige")
                  }
                else{
                    var jj=document.getElementById(id_count.toString());
                    jj.setAttribute("style","background-color:lightgreen")
                }
                
                       
        // e.insertAdjacentHTML('beforeend',"<p>"+temp+id_count+"</p>");
        
    });//get the chrome data
    });//click event handler
    })//DOM content overload



//script injection!!
document.addEventListener('DOMContentLoaded',function(){
  
    var para=document.createElement("p");
    var node=document.createTextNode("This is new");
    para.appendChild(node);
    para.setAttribute("id",'t1')
    var element=document.getElementById('notes');
    element.appendChild(para);
    

})