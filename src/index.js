const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = document.querySelector("#searchByID")

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => {
            const movieTitle = document.getElementById("title")
            const p = document.getElementById('summary')

            movieTitle.innerText = data.title;
            p.innerText = data.summary;

        });

        inputForm.reset();
    });
  
}

document.addEventListener('DOMContentLoaded', init);

