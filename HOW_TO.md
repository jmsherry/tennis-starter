# How to build an app

This is just my suggestion but I think it's best to do it this way to avoid scope-creep, which is the biggest killer of projects!

1. Choose a topic you like!
* It can be something that interests you
* or it can be something from real life you wish were easier!

​
2. Create a sketch of your app on paper

* You want the views/pages that you will see and use (This is what UX people do!)
* Draw the buttons and everything and check the journeys you will make (e.g. I press the login button, I go to the login page which looks like...; I put in my username and password and hit submit. I am redirected to the home page, etc. etc.)
* Check that it makes sense as a user

3. Create those view in react (without reactivity)

* So just hard-code what you want to see until it 'looks like' the app you want.


4. Now check your data

* What data is dynamic in those views?
* What shape is your data?
* Where are you going to get it from?

5. Make the components react

* Use state locally when you're experimenting with the values
* If it's clear that it needs to be shared between lots of components throughout the tree then you can move it to global state.

** Remember that everything here reacts to the data, so you should be able to change the data and have your whole app react. See the data as a remote control for the app. I change the `menuOpen` variable and the menu opens/closes, etc.


6. Remember MVP!
![MVP](https://blog.crisp.se/wp-content/uploads/2016/01/Making-sense-of-MVP-.jpg)

* We made a good start with our app. You can use it as a template for yours if you want
* Try to get whole bits of functionality working
* Try to get the easy bits done first, so if there's lots of fetching of data get it and render it out to a list page
* Then try to do the CUD parts of CRUD for 1 module (e.g. the members); then do the next module (the courts), etc.
* Fineries last. The framework MUI should take care of most of the styling for you. Get the app functionally working before you tidy up. Don't spend too long on CSS problems, you can fix those later.

7. When it goes wrong
* The downside of your job is that it is a very complex one and it regularly goes wrong. 
* To debug this stuff you must be patient
* As it is your job to get data from one place to another you must follow that journey when the data doesn't show up and find out where it went wrong. 
* console.logs can help; so can breakpoints; so can {JSON.stringify(someObject)} 

Remember: We're there for you BUT as you're progressing try to push yourself more to solve the problems. Try to keep calm and methodical. All this will help in time!