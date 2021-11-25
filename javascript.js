console.log("This is my program");
/*WRITING_PROMPT*/

var WRITING_PROMPT = [
    "Space",
    "Dinosaurs",
    "Movies",
    "Memories",
    "Your favorite toy",
    "What you were last Halloween"
]

function newWritingPrompt() {
    var randomNumber = Math.floor(Math.random() * (WRITING_PROMPT.length));
    document.getElementById('writingPromptDisplay').innerHTML = WRITING_PROMPT[randomNumber];
    console.log(randomNumber);
}
 