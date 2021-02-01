# Hear Project

## Instructions

From the Hear directory

npm i

Build

npm run build

Start the server

npm run dev-server

Go to http://localhost:8080/

## Solution

In creating this project with vanilla JavaScript, HTML and CSS I first built on the structure in the index.html file. My goal was to use semantic HTML - header tags, image descriptions, a new p tag for every new group of text, labels for all radio buttons, etc., to help ensure accessibility. I referenced the svg logos, icons and image with an img tag since it was quick and would also provide the ability to easily nest a hyperlink. With the help of a link in the document I was able to reference my font via font awesome.

The functionality of my carousel was handled through my index.js file. I stored the questions and provided answers via an array of objects. As users submitted their answers I would track the corresponding box in an array variable so that the provided answers could be shown to the user after they completed the survey. By adding event listeners to the html buttons I was able to listen for any clicks and invoke the appropriate function.

With regards to styling it was necessary to incorporate media queries to account for the smart phone design. In setting sizes to the viewport width or height and incorporating flexbox the smartphone design didn't require too much additional styling. I did use classes for all styling, but did add ids on a few elements so it was easier to select with JavaScript.

I ran out of time before getting to the additional features but would probably handle the carousel animations with the transition property next.

Please feel free to contact me if you have any questions.

Thanks!
