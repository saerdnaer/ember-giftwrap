/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-giftwrap',
  includedCommands: function() {
    return {
      giftwrap: require('./src/giftwrap-command.js')
    };
  }
};
