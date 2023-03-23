// establish type for function that returns a promise that resolves to an img.onload event or rejects with an img.onerror event.

/**
 * cacheImages takes in an array of images
 * to cache prior to using them.
 */

function cacheImages( images : Array<string>): Promise<unknown> {
  return Promise.all(
    images.map((image: string) => {
      return new Promise((resolve, reject) => {
        const img: HTMLImageElement = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = () => reject();
      });
    })
  );
}

export default cacheImages;

