import firebase from 'firebase';


// // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCxFxBsNBHM13iIodrvdIaEV2GW6JWGhKU",
//     authDomain: "trivia-fight.firebaseapp.com",
//     databaseURL: "https://trivia-fight.firebaseio.com",
//     storageBucket: "trivia-fight.appspot.com",
//     messagingSenderId: "571620890403"
//   };
//   firebase.initializeApp(config);

	var firebaseRef = firebase.database().ref();

	firebaseRef.set({
	  app: {
	    name: 'Trivia Fight!',
	    version: '1.0.0'
	  },
	  isRunning: true,
	  user: {
	    firstName: 'Luke',
	    lastName: 'Popwell'
	  }
	});

	var testsRef = firebaseRef.child('tests');

	testsRef.on('child_added', (snapshot) => {
	  console.log('New test added', snapshot.key, snapshot.val());
	});

	testsRef.push({
	  text: 'Test 1 again'
	});

	testsRef.push({
	  text: 'Test 2'
	});
  var chatRef = firebase.database().ref();
  // Create an instance of Firechat
  var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));
  // Listen for authentication state changes
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // If the user is logged in, set them as the Firechat user
      chat.setUser(user.uid, "Anonymous" + user.uid.substr(10, 8));
    } else {
      // If the user is not logged in, sign them in anonymously
      firebase.auth().signInAnonymously().catch(function(error) {
        console.log("Error signing user in anonymously:", error);
      });
    }
  });

  export default firebase;
