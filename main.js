function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6kPZ6zjK0/model.json', modelReady);
}
function modelReady()
{
   classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected voice of';
        document.getElementById("result_confidence").innerHTML = 'Detected Dog ' + dog ;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('animal_image');
        if (result[0].label == "Barking") {
            img.src = 'bark.gif'
            dog = dog + 1;
        } else if (results[0].label == "Meowing") {
            img.src = 'meow.gif';
            cat = cat + 1;
        } else {
            img.src = 'listen.gif'
        }
    }
}
