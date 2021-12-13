document.querySelector('.dropdown_link').onclick = function (event) {
    event.preventDefault();
    document.querySelector('.top_menu').classList.toggle('open');
}