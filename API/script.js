const img = document.querySelector('.img');
const follow = document.querySelector('.follow');

const requestUrl = 'https://api.github.com/users/tishyajena';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(this.responseText);
        img.style.backgroundImage = `url(${data.avatar_url})`
        img.style.backgroundSize = "cover";
        img.style.backgroundPosition = "center"
        follow.innerHTML = `Followers: ${data.followers}`;
        follow.style.fontSize = "30px";
    }
}
xhr.send();