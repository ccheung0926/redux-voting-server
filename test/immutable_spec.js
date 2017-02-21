import {expect} from 'chai';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });
  	describe('A List', () => {
	   function addMovie(currentState, movie) {
	      return currentState.push(movie);
	    }
	    it('is immutable', () => {
	      let state = List.of('Trainspotting', '28 Days Later');
	      let nextState = addMovie(state, 'Sunshine');

	      expect(nextState).to.equal(List.of(
	        'Trainspotting',
	        '28 Days Later',
	        'Sunshine'
	      ));
	      expect(state).to.equal(List.of(
	        'Trainspotting',
	        '28 Days Later'
	      ));
	    });
	});
	describe('a tree', () => {

	    function addMovie(currentState, movie) {
	      return currentState.set(
	        'movies',
	        currentState.get('movies').push(movie)
	      );
	    }
	    it('converts to immutable', () => {
	    	const state = Map();
	    	const entries = ['Trainspotting', '28 Days Later'];
		  	const nextState = setEntries(state, entries);
		  	expect(nextState).to.equal(Map({
		    	entries: List.of('Trainspotting', '28 Days Later')
		  	}));
		  });
	})

});