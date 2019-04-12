# Chatly-ifer
Chat Transcript

The project can be run by "yarn run dev-server"

This is my submission for the interview process with Red Ventures. 

Note in app.js : When I fetch the api json data, I get double the results. Using .forEach() method, I get double data printed to the HTML. The issue may have something to due with the WebPack config file. I couldn't figure it out but according to the Network tab in Chrome, I do see two fetch requests. One from VM and the other from app.js. They are both being printed to the HTML. You'll will see repeated messages once the page is loaded. 
Also the image url from the api isn't working. That's the reason why the image parameter isn't included from the data. 

