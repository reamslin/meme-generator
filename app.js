const imageElement = document.querySelector('#image');
const topTextElement = document.querySelector('#toptext');
const bottomTextElement = document.querySelector('#bottomtext');
const submitButton = document.querySelector('#submit');
const memeHolderElement = document.querySelector('#memes');
const textSizeElement = document.querySelector('#textsize');

submitButton.addEventListener("click", generateMeme);
memeHolderElement.addEventListener("click", deleteMeme);

function deleteMeme(e) {
    if(e.target.parentElement.classList.contains('meme')) {
        e.target.parentElement.remove();
    }
}

function generateMeme(e) {
    e.preventDefault();
    image = imageElement.value;
    topText = topTextElement.value;
    bottomText = bottomTextElement.value;
    textSize = textSizeElement.value;
    imageElement.value = "";
    topTextElement.value= "";
    bottomTextElement.value = "";
    if (image == ""){
        alert("You need to put in an image!");
    } else {
        memeContainer = document.createElement('div');
        memeContainer.innerHTML = `<img src=${image}>
                                    <div class="meme_overlay"></div>
                                    <div class='top'>${topText}</div>
                                    <div class='bottom'>${bottomText}</div>`
        memeContainer.classList.add("meme");
        switch (textSize) {
            case "small":
                memeContainer.style.fontSize = "20px";
                break;
            case "medium":
                memeContinaer.style.fontSize = "30px";
                break;
            default:
                memeContainer.style.fontSize = "40px";
        }
        memeHolderElement.appendChild(memeContainer);
    }
}