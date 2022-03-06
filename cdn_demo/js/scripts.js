var recorder = new SigmindRecorder(
    true, 
    function() {
        document.getElementById('record-button').classList.remove("disabled");
    }
);

var recording = false;

function toggleRecorder() {

    var btn = document.getElementById('record-button');

    if (recording === true) {
        console.log('ToggleRecorder: STOP');
        recorder.stopRecording(false, addAudioPlayer);
        btn.classList.remove("btn-danger");
        btn.classList.add("btn-primary");
        btn.innerText = 'Start recording';
        recording = false;
    
    } else {
        console.log('ToggleRecorder: START');
        recorder.startRecording();
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-danger");
        btn.innerText = 'Stop recording';
        recording = true;

    }
}

function addAudioPlayer(blob) {

    var container = document.getElementById('main-container');

    var row = document.createElement("div");
    row.classList.add('row');
    row.classList.add('mt-3')
    container.appendChild(row);

    var col = document.createElement("div");
    col.classList.add('col');
    row.appendChild(col)

    var audio = document.createElement("audio");
    audio.controls = "controls";
    col.appendChild(audio);

    var source = document.createElement("source");
    source.type = "audio/webm";
    source.src = URL.createObjectURL(blob);
    audio.appendChild(source);
                  
}