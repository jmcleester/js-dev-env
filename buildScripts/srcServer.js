import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from "../webpack.config.dev";

//console.log("test");
const port = 3001;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {

		res.sendFile(path.join(__dirname, '../src/index.html'));
	});
	app.get('/users', function(req, res) {
		res.json([
			{"id": 1,"Name": "John"},
			{"id": 2,"Name": "Mary"},
			{"id": 3,"Name": "Jane"}
		]);
	});

app.listen(port, function(err){
    if(err) {
		//console.log(err);

	} else {
		open('http://localhost:' + port);
	}
});
