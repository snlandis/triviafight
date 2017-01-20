var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

module.exports = {
  entry : [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
	plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      Main: 'app/components/Main.jsx',
      Chat: 'app/components/Chat.jsx',
      App: 'app/components/ChatBox/App.js',
      ChatApp: 'app/components/ChatBox/ChatApp.js',
      ChatInput: 'app/components/ChatBox/ChatInput.js',
      Message: 'app/components/ChatBox/Message.js',
      Messages: 'app/components/ChatBox/Messages.js',
      Nav: 'app/components/Nav.jsx',
      Footer: 'app/components/Footer.jsx',
      LogoLeft: 'app/components/LogoLeft.jsx',
      LogoRight: 'app/components/LogoRight.jsx',
      Buttoner: 'app/components/Buttoner.jsx',
      Weather: 'app/components/Weather.jsx',
      Challenge: 'app/components/Challenge.jsx',
			Timer: 'app/components/Timer.jsx',
			CountdownForm: 'app/components/CountdownForm.jsx',
			Countdown: 'app/components/Countdown.jsx',
      Animations: 'app/components/Animations.jsx',
			Controls: 'app/components/Controls.jsx',
			Clock: 'app/components/Clock.jsx',
      Examples: 'app/components/Examples.jsx',
			Login: 'app/components/Login.jsx',
			Gameroom: 'app/components/Gameroom.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.scss',
			actions: 'app/actions/actions.jsx',
			reducers: 'app/reducers/reducers.jsx',
			configureStore: 'app/store/configureStore.jsx',
      TriviaApi: 'app/api/TriviaApi',
      App2: './App2.jsx',
      // Question: 'app/api/Question.jsx',
			Gifs: 'app/components/gifs.jsx',
      QuestionCount: 'app/components/QuestionCount.jsx',
      QuizQuestions: 'app/api/QuizQuestions.js',
      AnswerOption: 'app/components/AnswerOption.jsx',
      Question: 'app/components/Question.jsx',
      Quiz: 'app/components/Quiz.jsx',
      Result: 'app/components/Result.jsx'
        },
    extensions: ['', '.js', '.jsx']
  },
  // because the entry file is jsx we require a loader to get it started
  // babe-loader takes our files pass them through react, get output and run them through es2015 as well
  // preset tells babel what to do
	module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
