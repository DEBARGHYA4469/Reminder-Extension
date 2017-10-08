chrome.alarms.onAlarm.addListener(function(alarm) {
   
   var notifOptions={
	type:"basic",
	iconUrl:"images/icon48.png",
    title:'Pending Works.....',
    message:"It seems like you need to check your reminders!"
};

chrome.notifications.create('notifid',notifOptions);
    
    
    var audio=new Audio("alarm.mp3");
    audio.play();
    for(var delay=0;delay<1000;delay=delay+1);//delay loop
    audio.stop();  
    
});