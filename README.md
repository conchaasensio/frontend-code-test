# Genially Frontend code test

The main objective of this technical excercise was for me to get a good grasp of what kind of problems face developers on Genially. You can find the test instructions in its original README.
<!-- Añadir un documento con el README original (TEST_REQUIREMENTS.md) y enlazarlo -->

---
## 🗂️ Content

- [Genially Frontend code test](#genially-frontend-code-test)
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

Should you like to take a look to the deployed app, [here you have the link]().
<!-- Desplegarlo en GitHub Pages y enlazarlo -->

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

This was one of the first decisions I had to make. Although the initial project was written in JavaScript, I was aware that knowing TypeScript was valued for the position, and at first, I was determined to do it in this language. However, I ultimately decided to go with JavaScript because, honestly, even though I've been working with TypeScript in my daily work lately, my knowledge isn’t advanced enough to confidently apply it in a project like this one, where I had to learn and apply completely new and unfamiliar technologies in a very limited time. So, for practicality and to feel more comfortable, I ended up choosing JavaScript. Nonetheless, I'm continuing to learn and improve with TypeScript, so I believe I could manage it in TS in a second iteration.

### ✳️ Using mobx-state-tree

This is the app state manager we use at our React apps. It's meant to be used with mobx, and unlike it, is very opinionated as how you should define your stores, models etc.

It was my first time using this library. I've tried to learn the basics within this limited time to get the application working with the required features. I feel that there are many things I could improve, especially in terms of design, so I would like to continue reading the documentation more thoroughly, fully understand how to apply it, and see what improvements I could make.

### ✳️ Using interact.js

It was also my first time using this library. I found it very interesting since I hadn’t done anything similar before. As with the previous case, I tried to learn the basics to apply the functionality for making the elements draggable, and although I eventually managed to get it working, I think there is a lot of room for improvement, and there are probably things I haven't taken into account. I'll keep looking over the documentation.

### ✳️ Testing with React Testing Library

I am really interested in all that having to do with clean code and best practices. Testing is something that I keep learning. Although I am not an "advanced user" regarding this practice, I wanted to try to put it into practice during this exercise. I have included [tests files](/src/tests/App.test.js) for the components, using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

***

## Test requirements

The test is an extremely simplified version of the Genially editor. We provide you a working area, named `Canvas`, and elements that are displayed inside of it, named `Box`.

We've also added a rudimentary toolbar for some of the required functionality.

When finished, the app should let the user:

[x] Add and remove boxes.
[x] Select a box, which should visually indicate that is selected
[x] Drag the boxes around using interact.js and using React refs.
  - Keep in mind you should be able to drag a box even if it's not selected when the dragging starts.
[x] Changing a box's color.
[x] Display a counter indicating how many boxes are selected.
[x] Support selection, dragging and color changing for multiple boxes.
[x] Save the state of the app locally and restore it when it loads.
[] Undo / Redo capabilities
  - **hint**: mobx-state-tree provides a middleware for this.

***


## 💪 Possible improvements

+ Add TypeScript.
+ Add more tests.
+ Add e2e tests.
+ Make it responsive.
+ Improve the design of the app.
+ Improve the look and feel of the app.
+ Dockerize the app.
***

## 👩‍💻 Author

This App has been developed by [**Concha Asensio**](https://www.linkedin.com/in/conchaasensio/).