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
