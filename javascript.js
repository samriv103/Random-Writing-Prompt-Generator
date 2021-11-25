console.log("This is my program");
/*WRITING_PROMPT
- do not repeat previous number
- make it HTML responsive
*/

var WRITING_PROMPT = [
    "Space.",
    "Dinosaurs.",
    "Movies.",
    "Memories.",
    "Your favorite toy.",
    "What did you do on the weekend.",
    "What you got for Christmas last year.",
    "Favarite food.",
    "Favorite animal.",
    "Favorite video game.",
    "Favorite sport.",
    "What you were last Halloween."
]

function newWritingPrompt() {
    var randomNumber = Math.floor(Math.random() * (WRITING_PROMPT.length));
    document.getElementById('writingPromptDisplay').innerHTML = WRITING_PROMPT[randomNumber];
    console.log(randomNumber);
}
 