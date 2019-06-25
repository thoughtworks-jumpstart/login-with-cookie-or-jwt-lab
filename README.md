# login-with-cookie-or-jwt-lab

A simple lab to practice cookie and/or JWT login

## Instructions

Implement the following methods according to base on Cookie/JWT

- Post /login: should log in the user.
- Post /logout: should log out the user.
- Get /secure: when the login form reloads, check if JWT or cookie stored on the browser. Automatically log in if so.

1. Duplicate the staterTemplate.js file and rename it to cookieServer.js or jwtServer.js.
2. implement the login mechanism using both cookie or JWT.
3. run the frontEndSperationServer, open the index.html page and try logging in.

- observe that cookie login will fail
- observe that JWT login still works
