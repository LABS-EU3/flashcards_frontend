import { Util } from 'cloudinary-core';

// eslint-disable-next-line import/prefer-default-export
export const openUploadWidget = (imageTags, callback) => {
  const options = {
    cloudName: process.env.cloudName,
    uploadPreset: process.env.cloudinaryPresetName,
    tags: imageTags,
  };
  const scOptions = Util.withSnakeCaseKeys(options);
  window.cloudinary.openUploadWidget(scOptions, callback);
};
