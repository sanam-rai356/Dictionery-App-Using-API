
const result = document.getElementById("results");
const sound = document.getElementById("sound");
const btn = document.querySelector(".search-btn");

btn.addEventListener("click",async()=>{
    let inputword = document.getElementById("inp-word").value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputword}`;
    let response = await fetch(url);
    let data = await response.json();           
     result.innerHTML=`        
        <div class="word">
            <h3>${inputword}</h3>
            <button onclick="playSound()">
                <i class="fa-solid fa-volume-high"></i>
            </button>
        </div>

        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetics[1].text}</p>
        </div>
        
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">${data[0].meanings[0].definitions[0].example}</p>`

        sound.setAttribute("src",`${data[0].phonetics[0].audio}`); 
})

function playSound(){
    sound.play();
}