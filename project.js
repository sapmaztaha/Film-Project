// * ↓↓↓ Element Seçimi ↓↓↓

const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");  
const directorElement = document.getElementById("director"); 
const urlElement = document.getElementById("url"); 
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films")




eventListeners();

function eventListeners()
{
    
    
    form.addEventListener("submit",addFilm);
    
    
    document.addEventListener("DOMContentLoaded",function()
    {
        let films = Storage.getFilmsFromToStorage();
        UI.loadAllFilms(films);
    })


    cardBody.addEventListener("click",deleteFilm);


    clear.addEventListener("click",clearAllFilms);


}


function addFilm(event)
{
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title == "" || director == "" || url == "")
    {
        UI.displayMessages("Boş alanları doldurunuz","danger"); 
    }
    else
    {
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm); 

        Storage.addFilmToStorage(newFilm); 
        
        UI.displayMessages("Film Eklendi","success");  
        
        UI.clearInput(titleElement,directorElement,urlElement);
    }

    event.preventDefault();
}




function deleteFilm(e)
{
    if (e.target.id === "delete-film");
    {
        UI.deleteFilmFromUI(e.target);
        
    }

    Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent); 

    UI.displayMessages("Filmler Silindi","success");

}



function clearAllFilms(e)
{
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
}