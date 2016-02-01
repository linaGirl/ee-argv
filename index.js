(function() {
	'use strict';

	let log = require('ee-log');


	class PseudoSet extends Array {

		has(item) {
			return this.indexOf(item) >= 0;
		}
	}



	let args = new Map();
	args.anonymous = new PseudoSet();



	let parseResult = (input) => {
		if (/[^0-9\.]/.test(input)) {
			if (input.toLowerCase() === 'true') return true;
			else if (input.toLowerCase() === 'false') return false;
			else return input;
		}
		else if (/[^0-9]/.test(input)) return parseFloat(input);
		else return parseInt(input, 10);
	};



	Array.prototype.slice.call(process.argv, 2).forEach((item) => {
		if (/^\s*--([^=]+)=(.+)\s*$/gi.test(item)) {
			let result = /^\s*--([^=]+)=(.+)\s*$/gi.exec(item);

			args.set(result[1], parseResult(result[2]));
		}
		else if (/^\s*-(\S+)\s(.+)\s*$/gi.test(item)) {
			let result = /^\s*-(\S+)\s(.+)\s*$/gi.exec(item);

			args.set(result[1], parseResult(result[2]));
		}
		else if (/^\s*--([^\s]+)\s*$/gi.test(item)) {
			let result = /^\s*--([^\s]+)\s*$/gi.exec(item);

			args.set(result[1], true);
		}
		else args.anonymous.push(item);
	});

 
	module.exports = args;
})();
