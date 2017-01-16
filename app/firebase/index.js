import firebase from 'firebase';

try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
  };

  firebase.initializeApp(config);
} catch (e) {

}

/*this line to the next one will be removed later */
var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'Trivia Fight!',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		firstName: 'Burgin',
		lastName: 'Hard'
	}
});

var testsRef = firebaseRef.child('DBConnection');

testsRef.on('child_added', (snapshot) => {
	console.log('DBConnection: ', snapshot.key, snapshot.val());
});

testsRef.push({
	text: 'Firebase is connected'
});


/*this is the bottom cut off line. everything above to be removed */

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var provider = new firebase.auth.TwitterAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
