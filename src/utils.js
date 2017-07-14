export function getExternalImageUrl(image, height = 512) {
  return `https://s3-eu-central-1.amazonaws.com/yard-images/${image.id}-${height}`;
}
const API_URL = 'https://yard.moscow/api/v1/';

export const get = resource => fetch(API_URL + resource).then(res => res.json());

export function getPhotoCountLocale(count) {
  if (count <= 1) {
    return `${count} фотография`;
  }
  if (count > 1 && count <= 4) {
    return `${count} фотографии`;
  }
  return `${count} фотографий`;
}

export function formatPrice(price) {
  return (price / 1000000).toFixed(2);
}
