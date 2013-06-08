# ee-argv

## installing

	npm install ee-argv

## usage

	you may start your app using argument using the format --key=value or --key
	example: node . --port=2345 --trace-http-request



	var argv = require( "ee-argv" );

	argv.has( "trace-http-request" );  	// true
	argv.get( "port" ); 				// "2345"
	argv.has( "port" ); 				// true

