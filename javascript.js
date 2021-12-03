/*WRITING_PROMPT
- Improve non repeating code
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
    var oldrandomNumber = document.getElementById('btn').value
    document.getElementById('writingPromptDisplay').innerHTML = WRITING_PROMPT[randomNumber];
    document.getElementById('btn').value = randomNumber
    if (randomNumber == oldrandomNumber) {
        randomNumber = Math.floor(Math.random() * (WRITING_PROMPT.length));
    }
}
 
