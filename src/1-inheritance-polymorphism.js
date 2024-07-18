class Phone {
  constructor(phoneNumber) {
    this.contacts = []
    this.phoneNumber = phoneNumber
  }

  makeCall(contactName) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].name === contactName || this.contacts[i].phoneNumber === contactName) {
        return (`Calling ${this.contacts[i].name}...`)
      }
    }
    if (contactName. length === 10) {
      return `Calling ${contactName}...`
    }
    return 'Invalid'
  }

  addContact(contact) {
    if (!contact.name || !contact.phoneNumber || contact.phoneNumber.length != 10) {
      return "Invalid"
    }
    this.contacts.push(contact)
    return `${contact.name} added.`
  }

  removeContact(contactName) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].name === contactName) {
        this.contacts.splice(i, 1)
        return (`${contactName} removed.`)
      }
    }
    return "Contact not found."
  }
}

class AppleIPhone extends Phone{
  constructor(phoneNumber, model) {
    super(phoneNumber)
    this.model = model
  }

  sendIMessage(phone, text) {
    if (phone instanceof AppleIPhone) {
      return `Message: ${text} - sent from ${this.model}`
    }
    return 'Message could not be sent.'
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
