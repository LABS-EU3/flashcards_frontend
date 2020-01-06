// This function takes all image files in a folder and render  their imports
// usage:
// const images = importAll(require
//  .context('../../../assets/appimages', false, /\.(png|jpe?g|svg)$/)
//  images[imagename]

/* eslint-disable no-unused-vars */
export default function importAll(r) {
  // eslint-disable-next-line prefer-const
  let images = {};
  r.keys().map((item, index) => {
    // eslint-disable-next-line no-return-assign
    return (images[item.replace('./', '')] = r(item));
  });
  return images;
}
