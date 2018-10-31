import Emailer from './emailer.js';
import Telegrammer from './telegrammer.js';
import counter from './counter.js';
import { Message, TelegrammMessage } from './message.js'

const emailer = new Emailer( counter );
const telegrammer = new Telegrammer( counter );

telegrammer.sendMessages(
  new TelegrammMessage(
    'title for tel message',
    'discription for tel message',
    'image'
  )
)

emailer.sendMessages(
  new Message('title message', 'description message'),
  new Message('title message 2', 'description message 2'),
  new Message('title message 3', 'description message 3')
);
