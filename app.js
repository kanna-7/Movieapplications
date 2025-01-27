const movies = document.getElementById("movies");
function fetchMovies(){
    fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=3f5aebcc&s=avengers")
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        
      data.Search.forEach((ele)=>{
        const div=document.createElement("div");
        div.className="movie-card";
        const img=document.createElement("img");
        const h3=document.createElement("h3");
        img.src=ele.Poster;
        h3.innerHTML=ele.Title;
        div.append(img,h3);
        const closeButton=document.getElementById("close");
        closeButton.addEventListener("click",()=>{
            const model = document.getElementById("model");
            model.style.display="none";
        })
        div.addEventListener("click",()=>{
            const model = document.getElementById("model");
            const year=document.getElementById("year");
            const title=document.getElementById("title");
            model.style.display="block";

            title.textContent=ele.Title; 

            year.textContent=ele.Year;
            console.log("card clicked");

        })
        movies.appendChild(div);
        })

        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
}
fetchMovies();