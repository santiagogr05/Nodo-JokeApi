// api in spanish https://v2.jokeapi.dev/joke/Programming?lang=es
// api in english https://v2.jokeapi.dev/joke/Programming

const langButton = document.getElementById('language');
const singleJoke = document.getElementById('joke');
const setupJoke = document.getElementById('setup');
const deliveryJoke = document.getElementById('delivery');
const deliveryButton = document.getElementById('show-delivery');

const showJoke = document.getElementById('show-joke');

langButton.addEventListener('click', () => {

    if (langButton.innerHTML == 'EN'){
        langButton.innerHTML = 'ES';
    } else {
        langButton.innerHTML = 'EN';
    }

});

const getJoke = async () => {

    const jokeType = document.getElementById('joke-type-choise').value;

    if (langButton.innerHTML == 'EN'){
        const response = await fetch(`https://v2.jokeapi.dev/joke/${jokeType}`);
        const data = await response.json();
        return data;
    } else {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${jokeType}?lang=es`);
        const data = await response.json();
        return data;
    }
}

deliveryButton.addEventListener('click', () => {
    deliveryJoke.style.display = 'block';
    
});

const determineJoke = async () => {
    const joke = await getJoke();

    if (joke.type == 'single'){
        singleJoke.innerHTML = joke.joke;
    } else {
        singleJoke.style.display = 'none';

        setupJoke.innerHTML = joke.setup;
        deliveryJoke.innerHTML = joke.delivery;

        setupJoke.style.display = 'block';
        deliveryButton.style.display = 'block';
          
    }

    
}


showJoke.addEventListener('click', () => {
    setupJoke.style.display = 'none';
    deliveryButton.style.display = 'none'
    deliveryJoke.style.display = 'none';
    singleJoke.style.display = 'block';
    determineJoke();
});