function speech(){
 var a=document.getElementById('iop');
 var b=document.getElementsByClassName('bto');
 var c=webkitSpeechRecognition || SpeechRecognition;
 var d= new c();
 d.onresult=function(e){
 	var fe=e.results[0][0].transcript;
 	a.innerHTML=     fe ;
 	//a.classlist.remove('text')

 }
 d.start();

 }