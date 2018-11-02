import Transporter from './Transporter.js';

export default class Emailer extends Transporter {
  constructor( limitMessages ) {
    super( limitMessages );
    this.spamMessages = [];
    this.socialMessages = [];
  }

  saveMessage( message ) {
    for ( let k in message ) {
      if (this.containsWords( message[k], Transporter.spamWords )) {
        return this.pushToArray( 'spamMessages', message );
      } else if (this.containsWords( message[k], Transporter.socialWords )) {
        return this.pushToArray( 'socialMessages', message );
      }
    }
    return this.pushToArray( 'messages', message );
  }

  pushToArray( array, message ) {
    return this[array] = [ ...this[array], message ];
  }

  containsWords( value, searchWords ) {
    return value.match(searchWords);
  }

  getLatestMessages( messages, number ) {
    messages === 'spamMessages' ? console.log('Spam:') :
    messages === 'socialMessages' ? console.log('Social:') :
    console.log('Messages:');
    this.returnMessages( this[messages], number );
  }

  returnMessages( messages, number ) {
    console.table(messages.length <= number ? messages : messages.slice( messages.length - number ))
  }
}
