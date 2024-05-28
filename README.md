﻿### pure-interview-task
## Project overview
A task as part of my interview process for Pure Pet Food, where I had to build a React SPA with two modular buttons that are dynamically populated by data fetched from a local API. New dynamic content must render depending on which button has been clicked. The task was quite challenging at first with a few hurdles to get past, but I really enjoyed testing my skills and dipping my toes into a couple of new areas.

## Screenshots of finished project
TBD

## Decisions explained
- **Middleware proxy usage**: After having lots of problems getting around the Cross-Origin Resource Sharing policy due to the use of a local API, I used the _http-proxy-middleware_ npm package to create a proxy for fetch requests to the API. 
- **CSS-in-JS**: Although I had limited prior knowledge, I decided to use CSS-in-JS for all styling (as this is the method used by Pure). I tried to experiment and go beyond just a basic skill level – an example of this being the use of props data to change button styling depending on the prop value being "secondary" or not.
- **Loading and error messages**: Although this was only a test project, I still incorporated "loading" and "error" messages to hopefully share my understanding of how these concepts work.
- **Transition pack**: I may have been misunderstanding how the "12 day transition pack" was meant to work in regards to the API data, therefore I kept the "12 days" part to be non-dynamic on purpose.#
- **Styling choices**: On the buttons page, I tried to mimick the general styling (background colour + button colour) of the Pure website. On the next page, I tried to mimick the design as closely as possible, although there were some minor inconsistencies with how the fonts looked compared to the design, etc.
- **Accessibility and responsiveness**: I purposefully left the arrow image "alt" attribute empty, which means the image is hidden from non-visual users who use the app via the accessibility DOM. I deemed the arrow not to be necessary, as it doesn't provide any extra context (the "THEN" label does the explaining).

## Retrospective and improvements for next time
- **CSS-in-JS component naming**: I feel that my naming of CSS-in-JS components was inconsistent and didn't follow a particular naming convention. Next time, I would ensure more consistent naming (similar to BEM).
- **File directory and references**: Many of my imports referenced file locations like "../../../SignUpForm.js". In retrospect, I should have done something else – I understand that a much easier solution can be achieved through the use of TypeScript, which I aim to explore very soon.
- **Component structure**: I tried to be vigilant with structuring components and subcomponents, however I realise in some cases I didn't get the folder structure right – for example, the "inter-section image" could have arguably come inside the "common" folder, if it was an element that was meant to be reused. The "MORE" label should probably have been set up as a separate "common" component too, with the text added dynamically like the VoucherLabel.js component.

## Having trouble running?
- Be sure to run "npm install" and "npm install express" first
- Make sure the React App is running on port 3000
- Make sure the API is running on port 5000

## Please reach out if you have any questions!
