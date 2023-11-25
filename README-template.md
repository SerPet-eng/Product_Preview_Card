# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Product Preview Mobile](./screenshots/Product%20Preview%20Mobile.png)
For my **Mobile** Version

![Product Preview Desktop](./screenshots//Product%20Preview%20Desktop.jpeg)
For my **Desktop** Version

![Product Preview Button Hover](./screenshots/Product%20Preview%20Btn%20Hover.png)
For my **Button** when it hovers

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

So I was used to make a conditional statement using **React** in terms of rendering _images_. Jumping back to JS surely take me a while to refresh some of the things that I've learn. Here is what I've learned:

```js
const image = document.getElementById('responsiveImage');

function changeImage() {
  if (window.innerWidth <= 800) {
    image.src = './images/image-product-mobile.jpg';
  } else {
    image.src = './images/image-product-desktop.jpg';
  }
}

window.addEventListener('resize', changeImage);
```

Using `window.innerWidth` to change the image when it met the 800px width.

**Also**

I've encounter some error when doing some JS. Which is called _image is null_. This got me confused but by researching, I found out that I need to add this specific code to my JS so that it loads properly in a web.

```js
document.addEventListener('DOMContentLoaded', function () {});
```

This somehow help me to solve the _image is null_ problem.

### Bugs

The `hero` image when it loads for the first time, it became this image: `image-product-mobile.jpg`.

**BUT**

When I refresh the page it became `image-product-desktop.jpg`.

> The **idea** was, when the screen is about _370px_, the `hero` image is `image-product-mobile.jpg`, but when the screen is about _800px_, the image will turn into `image-product-desktop.jpg`.

#### Image of the bug:

### Continued development

Dealing with CSS sometimes **scares me**, and one of the reason is that when I start _styling_ the web, I ending up coding a lot of CSS properties, For instance this part of my _styles.css_:

```css
.card button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  font-family: var(--ff-Montserrat);
  font-weight: var(--fw-700);
  color: var(--clr-neutral-white);
  background-color: var(--clr-primary-darkCyan);
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
}
```

Also this one:

```css
.card {
  padding: 1em;
  display: flex;
  flex-direction: column;
  background-color: var(--clr-neutral-white);
  border-radius: 0 0 1rem 1rem;
}
```

This works and it meet the requirements of looking somewhat exactly to the design.

When styling a web using CSS, **Is this normal?**

> **Note:** I quite enjoy styling my web using CSS but in terms of 'good practice', I'm not sure if I'm doing such a good job of doing a 'good practice', especially with abundance of using `display: flex` a lot in my CSS.

### Useful resources

- [W3school](https://www.w3schools.com/) - This helps me to refresh my knowledge on using CSS
- [MDN](https://developer.mozilla.org/en-US/) - This helps me to refresh my knowledge on using JS and some of the concepts that has been useful to this _challenge_ which is **changing the image**, according to its `width`.

## Author

- Website - [Netlify](https://magnificent-churros-50a683.netlify.app/)
- Frontend Mentor - [@SerPet-eng](https://www.frontendmentor.io/profile/SerPet-eng)
- Twitter - [@dchristian796](https://twitter.com/dchristian796)
- Facebook - [Christian Ulang de Guzman](https://www.facebook.com/christian.deguzman.1840/)

## Acknowledgments

I want to acknowledge my friends and family that supports me on everything. This maybe not much but this is just how I can repay them for now. By doing what I love and want to do in the future.
