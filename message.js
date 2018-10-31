class Message {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

class TelegrammMessage extends Message {
  constructor(title, description, image) {
    super(title, description);
    this.image = image;
  }
}

export { Message, TelegrammMessage };
