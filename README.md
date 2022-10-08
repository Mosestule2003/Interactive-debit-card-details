# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form solution on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
  - [Challenges](#Challenges)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./images/Screenshot%202022-10-08%20164008.png)

### Links

- Solution URL: https://github.com/Mosestule2003/Interactive-debit-card-details
- Live Site URL: https://mosestule2003.github.io/Interactive-debit-card-details/

## My process

- I used a three part workflow namely;
* HTML
* CSS
* Vanilla Javascript
- I started with making appropriate Html classes for the for my project then, went on to style it using css and add the functionality with vanilla javascript. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla Javascript

# Challenges
- The biggest challenge I faced in this project was in the javascript aspect. Setting up a succesful message function that will run when all input requirements are met and disappear once the provided exit button is displayed. I rather got error message from the browser  toolkit (Shown below). I am yet to solve this issue but I will do so shortly.
- What exactly was the problem and how did I solve it ?

Problem;

- On clicking the submit button, a confirmation message is to be displayed. But this didn't happen, rather no message was displayed.


- When the confirmation message  is shown, on clicking the continue button the conformation message is to fade out of the page and then the form fade in respectively.


Solution;

- I add a custom css class called hidden and then created an if statement to check if all the inputs are filled and are verified accordingly.  Also I added  the classList.add() and classList.remove() javascript attribute to manipulte confirmation message and form declared classes.


- I created a function to handle the the click event for the confirmation message to remove the message and and bring back the form.

![](./images/Screenshot-two%20%202022-10-08%20164918.png)

### Useful resources

- https://www.stackoverflow.com - This helped me to understand fully how position absolute works. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@Mosestule2003](https://www.frontendmentor.io/profile/Mosestule2003)
- Twitter - [@mosestule](https://www.twitter.com/yourusername)
