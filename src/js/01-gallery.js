// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
};

refs.gallery.innerHTML = createGalleryMarkup();

const createdGallery = new SimpleLightbox('.gallery a', {
    caption: true,
    captionType: 'attr',
    overlay: true,
    captionsData: 'alt',
});

function createGalleryMarkup(){
    return galleryItems.map(({ preview, original, description }) => 
        `<a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>`)
        .join('')
};

console.log(galleryItems);

