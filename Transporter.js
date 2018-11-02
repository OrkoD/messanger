export default class Transporter {
  constructor( limitMessages ) {
    this.limitMessages = limitMessages;
    this.messages = [];
  }

  sendMessages( ...messages ) {
    if ( messages.length === 0 ) return console.error(`You can't send empty message!`);
    if ( messages.length > this.limitMessages.counter ) return console.error(`Sorry, you can't send messages! :(`);
    for ( let msg of messages ) {
      if (!this.validateMessage( msg )) {
        console.error('Message is invalide. Please, fill all requires fields!');
      } else {
        console.log( msg );
        this.saveMessage( msg );
        this.limitMessages.decreaseCount();
      }
    }
  }
  
  validateMessage( message ) {
    if ( !message.title || !message.description ) return false;
    return true;
  }

  saveMessage( message ) {
    this.messages = [ ...this.messages, message ];
  }

  getLatestMessages( number ) {
    console.log('Messages:');
    console.table(this.messages.length <= number ? this.messages : this.messages.slice( this.messages.length - number ));
  }

  get count() {
    return this.limitMessages.counter;
  }

  set count( count ) {}

  static get spamWords() {
    return /sales|buy now|free|no charge|for free/i;
  }

  static get socialWords() {
    return /facebook|youtube|twitter/i;
  }
}
