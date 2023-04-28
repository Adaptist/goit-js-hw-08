// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

// ================
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" 
          />
        </a>
      </li>
    `;
  })
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

// ================
var lightbox = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
});