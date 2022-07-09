# Scrimba - Airbnb Clone solution

This is a solution to the [Airbnb Clone project on Scrimba](https://scrimba.com/learn/learnjavascript/). Scrimba helps you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Requirements](#requirements)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Getting Started with Create React App](#getting-started-with-create-react-app)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Requirements

- Data array in a separate .js file
  - Title, description, price, cover image, rating, review count, location, open spots
- Use .map() and props
- Style & polished
- Mobile designed

### Screenshot

![screenshot](/src/screenshots/screenshot.png)

### Links

- Solution URL: [@GitHub](https://github.com/xdelmo/airbnb-clone)

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- React.JS
- Flexbox

### Useful resources

- [ReactJS](https://reactjs.org/tutorial/tutorial.html) - How to set up a local development environment on your computer
- [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - Array.prototype.map()
- [StackOverflow](https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react) - How to reference a local image in React
- [W3Schools](https://www.w3schools.com/tags/ref_pxtoemconversion.asp) - PX to EM converter
- [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) - Spread in object literals

### What I Learnt

```js
// required to display local imgs in src folder
<img src={require(`../images/${props.img}`)} />
```

```js
// badgeText has no value because I need in the conditional rendering

let badgeText;
if (props.openSpots === 0) {
  badgeText = "SOLD OUT";
} else if (props.location === "Online") {
  badgeText = "ONLINE";
}

// Conditional rendering
// If badgeText has something assigned (means badgeText is truthy) card--badge div will be displayed corrisponding badgeText

{
  badgeText && <div className="card--badge">{badgeText}</div>;
}
```

## Author

- Website - [Emanuele Del Monte](https://www.emanueledelmonte.it)
