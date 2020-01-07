// Import

// Utils
import importAll from '../../../utils/importAll';

export default (content = 'Slide') => {
  const images = importAll(
    require.context('../../../assets/appimages', false, /\.(png|jpe?g|svg)$/),
  );

  const imagesName = Object.keys(images);

  return imagesName.map((image, idx) => ({
    idx: idx + 1,
    content: `${content} #${idx + 1}`,
    image,
  }));
};
