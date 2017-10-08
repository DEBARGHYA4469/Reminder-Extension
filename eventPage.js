chrome.alarms.onAlarm.addListener(function(alarm) {
   
   var notifOptions={
	type:"basic",
	iconUrl:"images/panic.png",
    title:'Pending Works.....',
    message:"It seems like you woke panic monster!"
};

chrome.notifications.create('notifid',notifOptions);
    
    
    var audio=new Audio("alarm.mp3");
    audio.play();
    for(var delay=0;delay<500;delay=delay+1);//delay loop
    audio.stop();  
    
});