import Transporter from './Transporter.js';

export default class Telegrammer extends Transporter {
  constructor( limitMessages ) {
    super( limitMessages );
  }

  validateMessage( message ) {
    if ( !message.title || !message.description || !message.image ) return false;
    return true;
  }
}
