function Recognize_Audio(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eAW0LO8UQ/model.json', modelready);
}

function modelready(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("sound").innerHTML = 'I can hear ' + results[0].label;
        document.getElementById("accuracy").innerHTML = 'accuracy: ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("sound").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("accuracy").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img1 = document.getElementById("img1");
        
        if(results[0].label == "snap"){
            img1.src = "snap.png"
        }
        else if(results[0].label == "clap"){
            img1.src = "clap.png";
        }
        else if(results[0].label == "ringtone"){
            img1.src = "ringtone.png";
        }
        else{
            img1.src = "nothing.png"
        }
    }
}