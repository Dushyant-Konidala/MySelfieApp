var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();


function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
console.log(event);
var content = event.results[0][0].transcript;
console.log(content);

document.getElementById("textbox").innerHTML=content;
if(content == "take my selfie"){
    console.log("taking selfie");
    speak();   
}

}


function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(Camera);
    
        setTimeout(function(){
            takeSnapshot();
            save();
        },5000);
    }

Camera = document.getElementById("camera");
Webcam.set({
    width : 360 , 
    height : 250 , 
    image_format : 'png' , 
    png_quality : 90 
});

function takeSnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id = "my_selfie" src = "'+ data_uri + '">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("my_selfie").src;
    link.href = image;
    link.click();

}