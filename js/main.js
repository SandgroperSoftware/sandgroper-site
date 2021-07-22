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