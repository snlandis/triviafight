#TriviaFight

Real time trivia/chat app where you can compete against people in a battle of wits.

#Technologies Used:
React.js
<br>
Node.js
<br>
Firebase
<br>
Heroku
<br>
Socket.io: https://www.npmjs.com/package/socket.io
<br>
API- Open Trivia DB: https://opentdb.com/
<br>
EJS
<br>
Twilio

#User Stories
As a gamer, I'd like to be able to chat with people and have an interactive experience with my gameplay.

As someone with too much free time, I'd like to be able to talk trash to my friends while not working.
#Wireframe
Loading Page: ![Loading Page](app/images/Wireframe1.jpg)

Chat Page: ![Chat Page](app/images/Wireframe2.jpg)

Challenge Page: ![Alt Text](app/images/Wireframe3.jpg)

Leaderboard: ![Alt Text](app/images/Wireframe4.jpg)

Gameboard: ![Alt Text](app/images/Wireframe5.jpg)

Component Layout: ![Alt Text](app/images/ComponentLayout.png)


###To Run project on your own:
```git clone https://github.com/ZHamburglar/triviafight.git```
<br>
```npm install```
<br>
In your project create a folder on the same level as /images, /public, and /server called "/config"
<br>
In that folder create two files called development.env and test.env
<br>
In those files create variables called:

```
API_KEY=
AUTH_DOMAIN=
DATABASE_URL=
STORAGE_BUCKET=
TWILIO_AUTH_TOKEN=
TWILIO_ACCOUNT_SID=
TWILIO_NUMBER=
```

<br>
Go to firebase and create an account.
<br>
Click on "Get Started for Free"
<br>
Click on "Create New Project"
<br>
Click on "Add Firebase to your Web App"
<br>
When the app modal pops up, copy the variables and paste them into the corresponding variables that you created with the development.env and test.env files.
<br>
To run the file in localhost:

```node server.js```

This is a test.
