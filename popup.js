document.addEventListener('DOMContentLoaded',function(){
    
    /*chrome.storage.sync.get({'store':[]},function(foo){
        $('#fun').text(foo.store);        
    })*/
    
    array=['happy','birthday','to','you'];
    array.push('Debarghya');
    chrome.storage.sync.set({'store':array});
                            
    
    chrome.storage.sync.get('store',function(foo){
      var element=foo.store[4];
      var temp=element;
      var e=document.getElementById("fun");
        e.insertAdjacentHTML('beforeend',"<h1>"+temp+"</h1>");
        
    });      
    
})



//script injection!!
document.addEventListener('DOMContentLoaded',function(){
  
    var para=document.createElement("p");
    var node=document.createTextNode("This is new");
    para.appendChild(node);
    para.setAttribute("id",'t1')
    var element=document.getElementById('notes');
    element.appendChild(para);

})