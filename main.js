function startRec(){
 navigator.mediaDevices.getUserMedia({audio:true})
 classifier=ml5("https://teachablemachine.withgoogle.com/models/jWvLznEu7/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("model is loaded");
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error("error");
        
    }
}