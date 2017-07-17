export function getExternalImageUrl(image, height = 512) {
  return `https://s3-eu-central-1.amazonaws.com/yard-images/${image.id}-${height}`;
}

export function formatPrice(price) {
  return (price / 1000000).toFixed(2);
}
