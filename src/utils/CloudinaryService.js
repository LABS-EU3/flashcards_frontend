import { Util } from 'cloudinary-core';

// eslint-disable-next-line import/prefer-default-export
export const openUploadWidget = (imageTags, callback) => {
  const tags = imageTags.length > 0 ? imageTags : [];
  const options = {
    cloudName: 'quick-decks',
    uploadPreset: 'upload',
    tags,
  };
  const scOptions = Util.withSnakeCaseKeys(options);
  window.cloudinary.openUploadWidget(scOptions, callback);
};
