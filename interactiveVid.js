blendModes = ["source-over", "lighter", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];

function startStuff(){
    console.log(videoLayer1.paused)
    if (!videoLayer1.paused) {
        videoLayer1.pause();
        videoLayer2.pause();
        sample.pause();
    }
    else {
        videoLayer1.play();
        videoLayer2.play();
        sample.play();
    }
}

function randomBlend() {
    randomBlendMode = blendModes[Math.floor(Math.random() * blendModes.length)];
    videoLayer2.style.mixBlendMode = randomBlendMode;
    theBlendMode.innerHTML = randomBlendMode;
}

async function setup() {
    //load our soundfile here
    sample = await loadSound("media/music.mp3");
    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();

    // Patch the sound file output to the analyzer
    sample.connect(analyzer);
}

function draw() {
    //do our audio analysis stuff here
    let rms = analyzer.getLevel();
    videoLayer1.style.opacity = rms * 5;
}

