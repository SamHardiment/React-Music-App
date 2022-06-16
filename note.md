## useState hook

##### hook?

Hooks are functions that let you "hook into" React state and lifecycle features from function components.
_Hooks don't work inside classes_ - they let you use React without classes.

- _Don't call Hooks inside loops, conditions or nested functions_

##### state is?

The state is a built-in React object that is used to contain data or information about the component. A components state changes state in case of an event such as, 'click', 'hover', 'wheel', etc.

## Convention for events

on Element Event - onInputClick
handle Element Event - handleInputClick

---

## Testing Environment - React Testing Library (rtl)

this library on it's own is not a test runner or framework. That's why we need Jest

- `npm i -D jest babel-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @testing-library/dom`

### Setup

For a non-CRA app we need to do the following this to setup our testing evironment

1. Create a test folder in the src/ create a `setupTest.js` file
2. In this file, import React - `import React from "react";`
3. We may need a few functions for our test suites so import these two
   - `import { fireEvent, render } from '@testing-library/react';`
   - `import userEvent from '@testing-library/user-event';`
4. We are going to keep each test file in each component folder so we need to make these available globally
   - `global.React = React;`
   - `global.render = render;`
   - `global.userEvent = userEvent;`
   - `global.fireEvent = fireEvent;`
5. The fnal thing we want to do is to make sure our setup file runs each timie we run our test. Since we aren't using CRA, we need to add the location of our file using a flag on our test scipt:

- `"test": "jest --watch --setupFilesAfterEnv ./src/test/setupTests.js"`

---

### Testing

Start by importing the file which holds the code we are testing (`import App from '../App.js'`)

```jsx
import App from "../App.js";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });
});

Now we want to use the beforeEach Jest hook to render the component for us beore each test
```

To be able to select elements in the DOM we need to use library that offers a virtual DOM. We use `screen` for this. We consider screen to be like our document when working with the original DOM. Just like document, screen also has methods available for selecting elements.

### Elements

- getByText(): find the element by its textContent value
- getByRole(): by its role attribute value
- getByLabelText(): by its label attribute value
- getByPlaceholderText(): by its placeholder attribute value
- getByAltText(): by its alt attribute value
- getByDisplayValue(): by its value attribute, usually for <input> elements
- getByTitle(): by its title attribute value

###### getByRole

`screen.getByRole` is a fantastic selector tol because iit encourages us to mplement excellent accessibility.

```jsx
import { screen, within } from "@testing-library/react";

let news = screen.getByRole("feed");
{
  /* will select eg. <div role="feed"></div> */
}

let heading = screen.getByRole("heading");
{
  /* will select eg. <h1></h1> as all h? elements automatically get a 'heading' role */
}
```

###### getByLabelText

`screen.getByLabelText` is another great one to encourage accessibility. Sometimes we cannot come up for a role for each element but we can always label them with `aria-label`. `getByLabelText` will select the element wiith a matchin `aria-label` attribute value.

```jsx
let feature = screen.getByLabelText('featured story')
{/* will select the input element with the matching aria-label attribute*/}
<article aria-label="featured story">
```

We can also select input elements by searching with the text content of its attached label

```jsx
let nameInput = screen.getByLabelText('Username')
{/* will select the input element with the matching label */}
<label htmlFor="username">Username</label>
<input type="text" id="username" />
```

###### Specific searches

We can make our queries more specific with options objects;

```jsx
{
  /* To select an element with the role of 'heading' and the name attribute of 'headline' */
}
const headline = getByRole("heading", { name: "headline" });
```

###### QueryBy

`getBy...` selectors will throw an error if no matches are found which is usually okay but something we want to test for absence! In this case, replace `get` with `query` eg.

```jsx
test("loads with no featured story", () => {
  const article = screen.queryByRole("article", { name: "featured story" });
  expect(article).not.toBeInTheDocument();
});
```

This test would fail with a potentally false negative iif we had used `getByRole`

### Simulating an event

The general basis

```jsx
// Select an element you want to interact with
const theElement = screen.findByLabelName("the element");

// Wanna click on it?
userEvent.click(theElement);

// Wanna type in it?
userEvent.type(theElement, "Beth");

// Wanna type in it and then hit the enter key?
userEvent.type(theElement, "Beth{enter}");
```

- For names of all the events (url)[https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js]

### Handling Props

If the component you are testing is expecting props, you will need to pass it some fake ones for test purposes. We pass props to our test components the same way we would anywhere else.

We can also pass fake functions and even test to see if they have been called upon, how many times, and with what arguments.

Example:

```jsx
let likeDog = jest.fn();

beforeEach(() => {
    const dogStub = { name: 'Mochi', age: 1 };
    render(<DogCard dog={dogStub} likeDog={likeDog}/>);
})

test('it calls props.likeDog when clicking on like button', () => {
    const likeButton = screen.getByRole('button', { name: 'like' })
    userEvent.click(likeButton)
    expect(likeDog.mock.calls.length).toBe(1) // checks how many times likeDog was called
    expect(likeDog.mock.calls[0][0].toEqual('Mochi') // checks to see if likeDog was called with argument of 'Mochi'
}
```

### Handling API Calls

We need to mock axios and make sure that we are not looking for headlines before they have a chance to be rendered.

See the example below;

```jsx
import axios from 'axios';
jest.mock('axios');

describe('Headlines', () => {
  beforeEach(() => jest.resetAllMocks())

  const stubStories = [
    { id: 2468, headline: 'Test Story 1', snippet: 'Testing, testing'},
    { id: 4151, headline: 'Test Story 2', snippet: '1, 2, 3'}
  ]

  test('it makes a request to the api on load and renders returned headlines', async () => {
    axios.get.mockResolvedValue({ data: stubStories });
    render(<Headlines />);
    expect(axios.get).toHaveBeenCalledWith(expect.stringMatching(/articles/));
    const headlines = await screen.findAllByRole('listitem')
    expect(headlines[0].textcontent).toBe('Test Story 1')
  })


  test('it renders an error on failed api request', async () => {
    axios.get.mockRejectedValue(new Error('Bad Things'));
    render(<Headlines />);
    const error = await screen.findByRole('alert')
    expect(error).toBeInTheDocument()
  })

}
```

### Coverage

- No CRA :`"coverage": "jest --setupFilesAfterEnv ./src/test/setupTests.js --coverage --watchAll=false"`
- Call with `npm run coverage`

When running tests, adding the `--watch `flag will `watch` which means your test suite will run on every change. The usage instructions are wonderfully clear with your most commonly used commands likely to be `q` to quit watch mode, `a` to re-run all the tests and `f` to re-run only the failing tests.

### Abbreviations

CRA -- Create react app
SPA -- Single page Application
RTL -- React Testing Library
