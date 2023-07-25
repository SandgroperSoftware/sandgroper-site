var menubutton = document.querySelector('.menu-button');
menubutton.onclick = function(e)
{
    e.preventDefault();
    document.querySelector('.radial-menu').classList.toggle('open');
}

var items = document.querySelectorAll('.radial-menu a');
for(var i = 0, l = items.length; i < l; i++)
{
    items[i].style.left = (48 - 70 *Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
    items[i].style.top = (50 + 70 * Math.sin(-0.5 * Math.PI - 2 * (1/l) * i * Math.PI)).toFixed(4) + "%";
}


function collateNewsArea(newsAreaId, newsItemId) {
const intervalTime = 4000;
let currentIndex = 0;
	const newsArea = document.querySelector(newsAreaId);
    	const newsItems = newsArea.querySelectorAll(newsItemId);

	currentIndex++;

	if(currentIndex > newsItems.length) {
		currentIndex = 0;
	}

	if(currentIndex > 0) {
		newsItems[currentIndex-1].classList.remove('visible');
	}

	if(currentIndex < newsItems.length) {
		newsItems[currentIndex].classList.add('visible');
	}
	else {
		newsItems[0].classList.add('visible');
	}

}

function showHideNews() {
	collateNewsArea('#news-area', '.news-text');
}

