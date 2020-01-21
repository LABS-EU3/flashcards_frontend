import { Util } from 'cloudinary-core';

// eslint-disable-next-line import/prefer-default-export
export const openUploadWidget = (options, callback) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  window.cloudinary.openUploadWidget(scOptions, callback);
};
