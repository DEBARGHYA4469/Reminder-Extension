
//script injection!!
document.addEventListener('DOMContentLoaded',function(){
  
    var para=document.createElement("p");
    var node=document.createTextNode("This is new");
    para.appendChild(node);
    para.setAttribute("id",'t1')
    var element=document.getElementById('notes');
    element.appendChild(para);

})