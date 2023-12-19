import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('looks the same', async () => {
    const page = await newE2EPage();

    // REPRO STEPS
    // STEP 1. Run yarn install
    // STEP 2. Run yarn run build
    // STEP 3. Run yarn test

    // STEP 4. Comment this line vvvvvvvv  (line 13)
    await page.setContent('<my-component></my-component><div>Hello World</div>');

    // STEP 5. Uncomment this line vvvvvvv  (line 16)
    // await page.setContent('<my-component></my-component><div>Hello World, with visual difference</div>');


    // STEP 6. Run yarn test

    await page.compareScreenshot('', { clip: { x: 0, y: 0, width: 800, height: 800 } });
  });
});
