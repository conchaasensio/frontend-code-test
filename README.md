# Frontend code test

The main objective of this technical excercise was for me to get a good grasp of what kind of problems face developers in their day to day at the company . You can find the test instructions [in its original README](/TEST_REQUIREMENTS.md).

---
## 🗂️ Content

- [Frontend code test](#frontend-code-test)
  - [🗂️ Content](#️-content)
  - [🚀 How to run the App.](#-how-to-run-the-app)
    - [Pre-requeriments](#pre-requeriments)
    - [➡️ Launch the project](#️-launch-the-project)
  - [🌐 View the App deployed in GitHub Pages.](#-view-the-app-deployed-in-github-pages)
  - [🧪 How to run the Tests.](#-how-to-run-the-tests)
  - [⚒️ Process](#️-process)
    - [✳️ Update dependencies](#️-update-dependencies)
    - [✳️ Using JavaScript instead of TypeScript](#️-using-javascript-instead-of-typescript)
    - [✳️ Using mobx-state-tree](#️-using-mobx-state-tree)
    - [✳️ Using interact.js](#️-using-interactjs)
    - [✳️ Testing with React Testing Library](#️-testing-with-react-testing-library)
  - [Test requirements](#test-requirements)
  - [💪 Possible improvements](#-possible-improvements)
  - [👩‍💻 Author](#-author)
***

## 🚀 How to run the App.

### Pre-requeriments

> [!IMPORTANT]
> You need to have [```Node```](https://nodejs.org/es/).


To start using this project, clone this repo into a new directory and move inside it.
> ```console
>  $ git clone https://github.com/conchaasensio/frontend-code-test.git
>  $ cd frontend-code-test
> ```

### ➡️ Launch the project

First of all you have to install the dependencies.
> ```console
> $ npm install
> ```

Run the app.
> ```console
> $ npm start
> ```

Navigate to the app

👉 Open http://localhost:3000 to view in the browser
***

## 🌐 View the App deployed in GitHub Pages.

Should you like to take a look to the deployed app, [here you have the link](https://conchaasensio.github.io/frontend-code-test/).
***


## 🧪 How to run the Tests.


Finally, to run the tests you need to introduce the following commands on your terminal:
```console
$ npm run test
```
***

## ⚒️ Process

### ✳️ Update dependencies

I updated the packages to their latest version, since some of them were really outdated, and much of the information I was reading about the technologies I needed to apply referred to later versions.

### ✳️ Using JavaScript instead of TypeScript

This was one of the first decisions I had to make. The technical test repository was initially set up in JavaScript, and although I considered implementing it in TypeScript (as I understand it is valued for this role), I ultimately decided to proceed with JavaScript. Given the short timeframe and the need to learn two completely new libraries, I chose to focus on delivery using a language I am more experienced with. This allowed me to prioritize achieving the required functionalities, and I am confident that with more time, I could easily transition this to TypeScript.

### ✳️ Using mobx-state-tree

This is the app state manager we use at our React apps. It's meant to be used with mobx, and unlike it, is very opinionated as how you should define your stores, models etc.

As it was my first experience with `mobx-state-tree`, I focused on quickly grasping its fundamentals to implement the required functionality within the timeframe. Despite the learning curve, I successfully integrated it into the project and achieved the expected outcomes. This experience has sparked my interest in further exploring this library to deepen my understanding and identify potential enhancements for future iterations.

### ✳️ Using interact.js

Genially is a very interactivity-heavy application. Almost everything you use on the app can be moved around with your mouse, selected, scaled, rotated, etc. This library does most of the heavy lifting for them.

This was also my first time working with `interact.js`, and I found it quite engaging since it allowed me to implement draggable elements -something I hadn’t tackled before. Given the timeframe, I focused on learning the essentials to get this functionality up and running, and I was able to achieve the required draggable behavior successfully. Working with interact.js has opened up new possibilities, and I’m keen to explore the documentation further to deepen my understanding and refine this implementation even more in future iterations.

### ✳️ Testing with React Testing Library

I am really interested in all that having to do with clean code and best practices. Testing is something that I keep learning. Although I am not an "advanced user" regarding this practice, I wanted to try to put it into practice during this exercise. I have included [tests files](/src/tests/App.test.js) for the components, using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

***

## Test requirements

The test is an extremely simplified version of the Genially editor. We provide you a working area, named `Canvas`, and elements that are displayed inside of it, named `Box`.

We've also added a rudimentary toolbar for some of the required functionality.

When finished, the app should let the user:

- [x] Add and remove boxes.
- [x] Select a box, which should visually indicate that is selected
- [x] Drag the boxes around using interact.js and using React refs.
  - Keep in mind you should be able to drag a box even if it's not selected when the dragging starts.
- [x] Changing a box's color.
- [x] Display a counter indicating how many boxes are selected.
- [x] Support selection, dragging and color changing for multiple boxes.
- [x] Save the state of the app locally and restore it when it loads.
- [x] Undo / Redo capabilities
  - **hint**: mobx-state-tree provides a middleware for this.

***


## 💪 Possible improvements

+ Add TypeScript.
+ Add more tests.
+ Add e2e tests.
+ Make it responsive.
+ Improve the design and architecture of the app.
+ Improve the look and feel and UI of the app.
+ Dockerize the app.
***

## 👩‍💻 Author

This App has been developed by [**Concha Asensio**](https://www.linkedin.com/in/conchaasensio/).