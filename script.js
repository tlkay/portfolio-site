//about me page
function displayMore() {
    let moreEl = document.getElementById("more")
    let moreSelected = moreEl.options[moreEl.selectedIndex].value
    let msEl = document.getElementById("morestuff") 

    msEl.textContent = getMoreStuff(moreSelected)
}

function getMoreStuff(moreSelected) {

        switch(moreSelected){
            case "training":
                return "Therese has over 15 years of training adults in a variety of industries including: government (FAA & EPA), legal, corporate (KPMG, Nestle, Canon), and workforce development."
            case "tw":
                return "Therese has over a decade of documentation development and technical writing including: user manuals, training manuals, quick references, process documentation, SOPs, slide decks, and style guides."
            case "cw":
                return "Therese has been writing creatively since she was a child. More recently, as an adult, she has self-published several books and has two children's book manuscripts ready for submission."
            case "photography":
                return "Therese bought herself a lovely Pentax SLR film camera as a graduation present for herself when she finished college. While trying to learn how to use it, she joined a local photography club and the rest is history. She's been a shutterbug ever since and it is now intertwined in her DNA."
            case "stuff":
                return "Therese considers herself a lifelong learner. She is also a lover of nature, reading, writing, photography, and creating random things with her craft supplies. Her favorite achievement thus far in life is the first book that she co-created with a very good friend. She also firmly believes that a good solid night's sleep is one of the keys to good health."
            default:
                return ""
        }
    }

//contact me page

function displayThanks(){
    alert("Thank you for your message. I will get back to you within 3 business days.")
}