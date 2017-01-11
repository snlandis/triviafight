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
