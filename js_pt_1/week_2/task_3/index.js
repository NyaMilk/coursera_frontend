// Телефонная книга
var phoneBook = {};

function addContact(name, phones) {
    if (phoneBook.hasOwnProperty(name)) {
        if (!phoneBook[name].hasOwnProperty(phones))
            phoneBook[name] = phoneBook[name].concat(phones);
    }
    else
        phoneBook[name] = phones;
    return phoneBook[name];
}
  
function removePhone(phone) {
    var keys = Object.keys(phoneBook);
    for (var i = 0; i < keys.length; i++)
    {
        var index = phoneBook[keys[i]].indexOf(phone);
        if (index !== -1) {
            phoneBook[keys[i]].splice(index, 1);
            if (phoneBook[keys[i]].length === 0)
                delete phoneBook[keys[i]];
            return true;
        }
    }
    return false;
}  

function showContacts() {
    var contacts = [];
    var keys = Object.keys(phoneBook);
    for (var i = 0; i < keys.length; i++)
        contacts.push(keys[i] + ': ' + phoneBook[keys[i]].join(', '));
    return contacts.sort();
}

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commands = command.split(' ');

    switch(commands[0]) {
        case 'ADD':
            var name = commands[1];
            var phones = commands[2].split(',')
            return addContact(name, phones);
        case 'REMOVE_PHONE':
            var phone = commands[1];
            return removePhone(phone);
        case 'SHOW':
            return showContacts();
      }
};
