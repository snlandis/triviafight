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

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('leaderboard/' + userId).orderByChild('score');
}

var firebaseRef = firebase.database().ref('leaderboard/');
firebaseRef.orderByChild('score');
firebaseRef.set([
	{
		username: "Kollin Brandenburg",
		score: 432,
	},
	{
		username: "Stephen Landis",
		score: 420,
	},
	{
		username: "Kyle Crichton",
		score: 230,
	},
	{
		username: "Paul Lizama",
		score: 8,
	},
	{
		username: "Dirk Diggler",
		score: 12,
	},
	{
		username: "Mike Dang",
		score: -69,
	},
	{
		username: "Luke Popwell",
		score: 100,
	},
	{
		username: "Stephanie Workman",
		score: 6,
	},
	{
		username: "Britt Shroyer",
		score: 32,
	},
	{
		username: "John Doe",
		score: 45,
	},
	{
		username: "Scott Fuller",
		score: 22,
	},
	{
		username: "Peter Griffin",
		score: 999,
	},
]
)

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var provider = new firebase.auth.TwitterAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
