import Emailer from './emailer.js';

export default class Telegrammer extends Emailer {
  constructor( counter ) {
    super( counter );
  }
  sendMessages( ...messages ) {
    if ( [ ...messages ].length !== [ ...messages ].filter(m => m.image).length )
      return console.log('image are required!');
    super.sendMessages( ...messages );
  }
}
