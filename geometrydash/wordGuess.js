let attempts = 0;
let words = ["table","about","yacht","magic","faith","vague","under","zebra","ocean","gamer","radio","wager","habit","bacon","dance","cabin","sadly","judge","ideal","naked","major","labor","taken","quick","raise","badge","dairy","zeros","false","hairy","after","wagon","party","safer","cable","valid","yield","named","image","unite","nasty","quiet","imply","baker","tales","zesty","early","waist","often","value","unity","young","range","daily","fancy","maker","canoe","candy","youth","hands","maple","quilt","basic","index","older","talks","giant","waste","agent","lakes","zonal","joint","saint","patch","rapid","vapor","knife","fault","quota","ratio","laser","dealt","pause","handy","watch","urban","beach","gifts","ebony","vault"];
let hint = "";
let textBox;
let button;
let display;
let answer;

function setup(){
    new Canvas(600, 400);
    background(220);

    textBox = createInput();
    textBox.position(width / 2 + 380, 300);

    button = createButton("Guess");
    button.position(textBox.x + textBox.width + 30, 300);
    button.mousePressed(displayText);

    hint = random(words)
    console.log(hint);
    hint = hint[0].toUpperCase() + "_ ".repeat(hint.length - 1);
    
    getCorrectLetters(textBox.value(), hint)
}

function draw(){
    textSize(16);
    textAlign(CENTER, TOP);
    text("Guess the Word!", width / 2, 50);
    text("Attempts: " + attempts, width / 2, 100);
    text("Hint: " + hint, width / 2, 150);
    text(display, width / 2, 200);


}

function displayText(){
    display = textBox.value();
}

function getCorrectLetters(guess, hint){
    let correctLetters = "";
    for(let i = 0; i < guess.length; i++){
        if((words.includes(guess[i])) && !(correctLetters.includes(guess[i].toUpperCase()))){
            correctLetters += guess[i].toUpperCase() + " ";
        }
    }
}

function checkGuess(){
    let guess = textBox.value().toLowerCase();
    attempts += 1;

    if(guess) {
        // TODO: implement guess validation and response
    }
}