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

    // Result: "Error: Image data size does not match width/height."
  });

  it('looks the same when clipped to 600 x 600', async () => {
    const page = await newE2EPage();

    // REPRO STEPS - HAPPY PATH
    // STEP 1. Run yarn install
    // STEP 2. Run yarn run build
    // STEP 3. Run yarn test

    // STEP 4. Comment this line vvvvvvvv  (line 35)
    await page.setContent('<my-component></my-component><div>Hello World</div>');

    // STEP 5. Uncomment this line vvvvvvv  (line 38)
    // await page.setContent('<my-component></my-component><div>Hello World, with visual difference</div>');


    // STEP 6. Run yarn test

    await page.compareScreenshot('', { clip: { x: 0, y: 0, width: 600, height: 600 } });

    // Result: Test passed, screenshots compared: 1
  });
});
