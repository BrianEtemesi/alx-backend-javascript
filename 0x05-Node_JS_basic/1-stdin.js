#!/usr/bin/env node

// Print a welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen for readable events on the standard input
process.stdin.on('readable', () => {
  // Read the input chunk
  const chunk = process.stdin.read();

  // Check if there's data in the chunk
  if (chunk !== null) {
    // Print the user's name based on the input chunk
    process.stdout.write('Your name is: ' + chunk);
  }
});

// Listen for the end event on the standard input
process.stdin.on('end', () => {
  // Print a closing message when the input ends
  console.log('This important software is now closing');
});
