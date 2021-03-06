import { Util } from 'cloudinary-core';
import sha1 from 'sha1';
import { v4 } from 'uuid';

/**
 * a signature generation util for signed uploads to Cloudinary,
 * necessary for overwriting images.
 *
 * Callback accepts the generated signature which is used by the
 * upload widget of Cloudinary. Params are just the image attributes
 * to be signed. They have to be sorted alphabetically before signature
 * is generated.
 *
 * @param {function} callback Callback that accepts generate signature
 * @param {Object} params Object of all attributes to be signed
 */
const generateSignature = async (callback, params) => {
  let signature = '';
  const keys = Object.keys(params);
  keys.sort();

  keys.forEach((key, index) => {
    signature = signature.concat(`${key}=${params[key]}`);

    signature = index === keys.length - 1 ? signature : signature.concat('&');
  });
  signature = signature.concat(process.env.REACT_APP_CLOUDINARY_SECRET);
  callback(sha1(signature));
};

/**
 *
 * Opens the interactive Cloudinary upload widget. Applies the array
 * of tags passed in to the image and uses the imageId as
 * the unique identifier for the image
 * making it possible to replace the image at a later time.
 *
 * @param {string[]} imageTags - an array of all tags for this image
 * @param {string} imageId - a unique identifier for this image
 * @param {function} onUploadFailedCallback - function invoked when upload fails
 * @param {function} onUploadSuccessCallback -function invoked when  succeess
 *
 * @example
 *
 *      openUploadWidget(
 *          ['an', 'array'],
 *          'flashcard34'
 *          error => { // do stuff with error message },
 *          image_url => { // do stuff with image_url })
 */

// eslint-disable-next-line import/prefer-default-export
export const openUploadWidget = (
  imageTags,
  imageId,
  onUploadFailedCallback,
  onUploadSuccessCallback,
) => {
  const tags = imageTags.length > 0 ? imageTags : [];
  /*   if (!imageId) {
    onUploadFailedCallback('Please choose a unique identifier for this image');
    return;
  } */
  const options = {
    tags,
    cloudName: process.env.REACT_APP_CLOUD_NAME,
    uploadSignature: generateSignature,
    apiKey: process.env.REACT_APP_CLOUDINARY_API_KEY,
    publicId: imageId || v4(),
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
