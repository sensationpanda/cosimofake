
let currentNewsIndex = 0;
const newsData = [
    {
        imageUrl: '1.jpeg',
        isFake: true
    },
    {
        imageUrl: '2.JPG',
        isFake: false
    },
    {
        imageUrl: '3.JPG',
        isFake: true
    }
];

function loadNextNews() {
    if (currentNewsIndex < newsData.length) {
        const newsItem = newsData[currentNewsIndex];
        const newsContainer = document.getElementById('newsContainer');
        newsContainer.innerHTML = \`<img src="\${newsItem.imageUrl}" alt="News Image"><p>Is this news real or fake?</p><button onclick="verifyNews(true)">Real</button><button onclick="verifyNews(false)">Fake</button>\`;
        currentNewsIndex++;
    } else {
        alert('No more news!');
    }
}

function verifyNews(userGuess) {
    const correctAnswer = newsData[currentNewsIndex - 1].isFake;
    if (userGuess === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Wrong, try again!');
    }
}

window.onload = loadNextNews;
