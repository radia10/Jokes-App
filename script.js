const jokeEle =document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// using async await 
const generateJoke = async () => {
    const config = {
        headers : {
            'Accept' : 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com',config) ;
    const data = await res.json();

    jokeEle.innerHTML = data.joke; 
   
}

// using .then
/* const generateJoke = () => {
    const config = {
        headers : {
            'Accept' : 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com',config)
    .then( (res) => res.json())
    .then((data) => {
        jokeEle.innerHTML = data.joke;
    })
}
*/
generateJoke();

jokeBtn.addEventListener('click',generateJoke);

