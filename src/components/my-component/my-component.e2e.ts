import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('looks the same', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');

    // By default the screenshot size is 800 x 600
    // But the width and height parameters sent to pixel-match are 600 x 600
    // Therefore it fails at line 39 of pixel-match.js
    // if (img1.length !== width * height * 4) throw new Error('Image data size does not match width/height.');

    await page.compareScreenshot();

    // The same error happens in my real project when I add a clip option like this:
    // await page.compareScreenshot('', { clip: { x: 0, y: 0, width: 800, height: 800 } });
  });
});
