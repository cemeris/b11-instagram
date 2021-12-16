document.querySelector('.dropdown_link').onclick = function (event) {
    event.preventDefault();
    document.querySelector('.top_menu').classList.toggle('open');
}

const gallery_nav = document.querySelector('.gallery_nav');
const gallery_grid = document.querySelector('.gallery_grid');

window.onhashchange = changeGalleryTab;
changeGalleryTab();

function changeGalleryTab() {
    let subpage = location.hash.substring(1);
    const subpages = ['posts', 'tagged'];

    if (!subpages.includes(subpage)) {
        subpage = 'posts';
    }
    change_active_link: {
        const link = gallery_nav.querySelector('[href="#' + subpage + '"]');
        let active_link = gallery_nav.querySelector('.active');
        if (active_link) {
            active_link.classList.remove('active');
        }
        link.classList.add('active');
    }

    request.get('data.json', function (data) {
        gallery_grid.innerHTML = '';
        for (let img of data[subpage]) interate_images_for_subpage: {
            const div_element = document.createElement('div');
            const img_element = document.createElement('img');
            img_element.setAttribute('src', img.url);
            div_element.append(img_element);
            div_element.classList.add(subpage + '-card');
            gallery_grid.append(div_element);
        }
    });
}