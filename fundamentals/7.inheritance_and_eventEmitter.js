/*
This code emit and catch events using two ways, one with inheritance
and another one with no inheritance.

ex: emit('event_name', 'argument1', 'argument2', ...)

.....................................................................
author: Jefferson Palheta
jeffersonpalheta.com
Copyright (C) 2018 Eng Jefferson Palheta. All rights reserved.
*/


var events = require('events');
var util = require('util');
var EventEmitter = events.EventEmitter;
var emitter = new events.EventEmitter();

// Inheritance ..................................................
var Person = function(name){
  this.name = name;
}

util.inherits(Person, EventEmitter); //Person inherits EventEmitter.

var jeff = new Person('Jefferson Palheta');

jeff.on('speak', function(said){
  console.log(`${this.name} said "${said}"`);
});

jeff.emit('speak', 'yo guys');

// No inheritance ...............................................
emitter.on('showMyFullName', (firstName, lastName) => {
  console.log(`my full name: ${firstName} ${lastName}`);
});

emitter.emit('showMyFullName', 'Jefferson', 'Palheta');
