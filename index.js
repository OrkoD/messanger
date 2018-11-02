import Emailer from './Emailer.js';
import Telegrammer from './Telegrammer.js';
import limitMessages from './limit-messanges.js';
import { Message, TelegrammMessage } from './Message.js'

const emailer = new Emailer( limitMessages );
const telegrammer = new Telegrammer( limitMessages );

telegrammer.sendMessages(
  new TelegrammMessage(
    'title for tel message',
    'discription for tel message',
    'some image'
  )
);

emailer.sendMessages(
  new Message('message', 'desc'),
  new Message('title message', 'desc Sales'),
  new Message('title message 2', 'description message 2 sAles'),
  new Message('title message 3 tWitter', 'description message 3')
);


emailer.getLatestMessages('spamMessages');
emailer.getLatestMessages('socialMessages');
emailer.getLatestMessages('messages');