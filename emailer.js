export default class Emailer {
  constructor( counter ) {
    this.counter = counter
    this.messages = [];
  }

  sendMessages(...messages) {
    if ( messages.length < this.counter.counter ) {
      for ( let m of messages ) {
        if ( !m.title || !m.description ) {
          console.log('Title and description are required!');
        } else {
          console.log( m );
          this.saveMessage( m );
          this.counter.decreaseCount();
        }
      }
    } else {
      console.log(`Sorry, you can't send messages! :(`);
    }
  }

  saveMessage( message ) {
    this.messages = [ ...this.messages, message ];
  }

  getLatestMessages() {
    return this.messages.length <= 5 ? this.messages : this.messages.slice( this.messages.length - 5 );
  }

  get count() {
    return this.counter.counter;
  }

  set count( count ) {}
}
