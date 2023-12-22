import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('looks the same when clipped to 800 x 800', async () => {
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

    const results = await page.compareScreenshot('', { clip: { x: 0, y: 0, width: 800, height: 800 } });
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 1000 });

    console.log(results);
    // Result: "Error: Image data size does not match width/height."
  });

  it('looks the same when clipped to 600 x 600', async () => {
    const page = await newE2EPage();

    // REPRO STEPS - HAPPY PATH
    // STEP 1. Run yarn install
    // STEP 2. Run yarn run build
    // STEP 3. Run yarn test

    // STEP 4. Comment this line vvvvvvvv  (line 37)
    await page.setContent('<my-component></my-component><div>Hello World</div>');

    // STEP 5. Uncomment this line vvvvvvv  (line 40)
    // await page.setContent('<my-component></my-component><div>Hello World, with visual difference</div>');


    // STEP 6. Run yarn test

    const results = await page.compareScreenshot('', { clip: { x: 0, y: 0, width: 600, height: 600 } });
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 1000 });

    console.log(results);
    // Result: Test passed, screenshots compared: 1
  });

  it('looks the same when not clipped', async () => {
    const page = await newE2EPage();

    // REPRO STEPS - HAPPY PATH
    // STEP 1. Run yarn install
    // STEP 2. Run yarn run build
    // STEP 3. Run yarn test

    // STEP 4. Comment this line vvvvvvvv  (line 61)
    await page.setContent('<my-component></my-component><div>Hello World</div>');

    // STEP 5. Uncomment this line vvvvvvv  (line 64)
    // await page.setContent('<my-component></my-component><div>Hello World, with visual difference</div>');


    // STEP 6. Run yarn test

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot();

    console.log(results);
    // Result: "Error: Image data size does not match width/height."
  });
});
