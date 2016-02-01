(function() {
    'use strict';


    let log = require('ee-log');


    let assert = require('assert');

    process.argv.push('--a=1');
    process.argv.push('--abc=2.0 ');
    process.argv.push('     --b=true');

    process.argv.push('-c 1');
    process.argv.push('-cde 2 ');
    process.argv.push('     -d hui');

    process.argv.push('d');


    let argv = require('../');


    describe('Parser', function() {
        it('double - argument', function(){
            assert.equal(argv.get('a'), 1);
        });

        it('double - argument with trailing whitespace', function(){
            assert.equal(argv.get('abc'), 2);
        });

        it('double - argument staring with whitespace', function(){
            assert.equal(argv.get('b'), true);
        });



        it('single - argument', function(){
            assert.equal(argv.get('c'), 1);
        });

        it('single - argument with trailing whitespace', function(){
            assert.equal(argv.get('cde'), 2);
        });

        it('single - argument staring with whitespace', function(){
            assert.equal(argv.get('d'), 'hui');
        });



        it('anonymous argument', function(){
            assert.equal(argv.anonymous[1], 'd');
        });



        it('flags', function(){
            assert.equal(argv.has('reporter'), true);
        });
    });     
})();


