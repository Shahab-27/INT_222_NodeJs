import { EventEmitter } from 'events';
const emitter = new EventEmitter();

// emitter.on('greet', () => {
//     console.log('Good morning!');
// });

// emitter.emit('greet');

// // example with a parameter
// emitter.on('greetName', (name) => {
//     console.log(`Good morning, ${name}!`);
// });

// emitter.emit('greetName', 'Shahab');

// const showMessage = () => console.log('Event Triggered');

// emitter.on('remove', showMessage);
// emitter.emit('remove'); // works

// emitter.removeListener('remove', showMessage);
// emitter.emit('remove'); // No output

emitter.once('start', () => {
    console.log('This event runs only Once!');
});

emitter.emit('start');

emitter.emit('start');








