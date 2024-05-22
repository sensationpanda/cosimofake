let currentNewsIndex = 0;
const newsData = generateNewsData(10); // 生成10条新闻

function generateNewsData(count) {
    const newsArray = [];
    const titles = [
        { title: "Scientists Discover a Way to Turn Lead into Gold", fake: true },
        { title: "World's First Time Machine Tested Successfully", fake: true },
        { title: "Local Man Predicts the Future Using Only Asparagus", fake: true },
        { title: "Government Plans to Ban All Forms of Cash by 2025", fake: true },
        { title: "New Study Shows Coffee Reduces Risk of All Diseases", fake: true },
        { title: "Recent Elections Found to Be Influenced by Aliens", fake: true },
        { title: "Famous Landmark Disappears Overnight, Experts Baffled", fake: true },
        { title: "Climate Change a Hoax, Claims Noted Scientist", fake: true },
        { title: "Polar Bears Adapt to Global Warming, Now Turning Brown", fake: true },
        { title: "Miracle Fruit Found That Permanently Stops Aging", fake: true },
        { title: "Rare Meteor Shower Visible Every Night This Week", fake: false },
        { title: "Local High School Wins National Science Competition", fake: false },
        { title: "Major Tech Companies Agree to Standardize Charging Ports", fake: false },
        { title: "Government to Increase Funding for Public Schools", fake: false },
        { title: "Breakthrough in Renewable Energy Technology Cuts Costs by 50%", fake: false }
    ];

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * titles.length);
        const titleData = titles[randomIndex];
        newsArray.push({
            title: titleData.title,
            fake: titleData.fake,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus sit amet."
        });
    }

    return newsArray;
}

function loadNextNews() {
    if (currentNewsIndex < newsData.length) {
        const newsItem = newsData[currentNewsIndex];
        const newsContainer = document.getElementById('newsContainer');
        newsContainer.innerHTML = `<h2>${newsItem.title}</h2><p>${newsItem.content}</p><button onclick="verifyNews(${newsItem.fake})">Verify</button>`;
        currentNewsIndex++;
    } else {
        alert('No more news!');
        currentNewsIndex = 0;  // Reset for replayability
    }
}

function verifyNews(isFake) {
    const message = isFake ? "Correct, it is fake news!" : "Wrong, this news is true!";
    alert(message);
    loadNextNews();  // Load the next news item automatically
}

window.onload = loadNextNews;
