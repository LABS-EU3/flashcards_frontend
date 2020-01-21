import { Util } from 'cloudinary-core';

/**
 *
 * @param {string[]} imageTags - an array of all tags for this image
 * @param {function} onUploadFailedCallback - function invoked when upload fails
 * @param {function} onUploadSuccessCallback -function invoked when  succeess
 *
 * @example
 *
 *      openUploadWidget(
 *          ['an', 'array'],
 *          error => { // do stuff with error message },
 *          image_url => { // do stuff with image_url })
 */

// eslint-disable-next-line import/prefer-default-export
export const openUploadWidget = (
  imageTags,
  onUploadFailedCallback,
  onUploadSuccessCallback,
) => {
  const tags = imageTags.length > 0 ? imageTags : [];
  const options = {
    cloudName: 'quick-decks',
    uploadPreset: 'upload',
    tags,
  };
  const scOptions = Util.withSnakeCaseKeys(options);
  window.cloudinary.openUploadWidget(scOptions, (error, photos) => {
    if (!error) {
      if (photos.event === 'success' && onUploadSuccessCallback) {
        // eslint-disable-next-line camelcase
        const { secure_url } = photos.info;
        onUploadSuccessCallback(secure_url);
      }
    } else {
      const errorMessage = error.status ? error.status : 'Image upload failed';
      if (onUploadFailedCallback) onUploadFailedCallback(errorMessage);
    }
  });
};
