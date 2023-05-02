function startClassification()
{
    navigator.mediaDevices.getUserMedia({aucio:true});
    clssifier = ml5.soundsClassifier('https://teachablemachine.withgoogle.com/models/WalR2cUpD/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}