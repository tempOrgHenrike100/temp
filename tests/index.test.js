const {showMessage, showMessage2} = require('../src/index.js');

test('Successful Message', () => {
  expect(showMessage("Success!")).toBe("Message: Success!");
});

test('Successful Message2', () => {
    expect(showMessage2("Success!")).toBe("Message2: Success!");
  });