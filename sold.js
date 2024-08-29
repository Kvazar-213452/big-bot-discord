const { exec } = require('child_process');

exec('node ask.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка під час виконання ask.js: ${error}`);
    return;
  }
  console.log(`ask.js виконано: ${stdout}`);
});

exec('node music.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка під час виконання music.js: ${error}`);
    return;
  }
  console.log(`music.js виконано: ${stdout}`);
});

exec('node index.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка під час виконання index.js: ${error}`);
    return;
  }
  console.log(`index.js виконано: ${stdout}`);
});

exec('node index_2.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка під час виконання index_2.js: ${error}`);
    return;
  }
  console.log(`index_2.js виконано: ${stdout}`);
});

exec('node ask_2.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка під час виконання ask_2.js: ${error}`);
    return;
  }
  console.log(`ask_2.js виконано: ${stdout}`);
});

exec('node music_2.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка під час виконання music_2.js: ${error}`);
    return;
  }
  console.log(`music_2.js виконано: ${stdout}`);
});

exec('node host.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка під час виконання host.js: ${error}`);
    return;
  }
  console.log(`host.js виконано: ${stdout}`);
});

exec('node host_2.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка під час виконання host.js: ${error}`);
    return;
  }
  console.log(`host.js виконано: ${stdout}`);
});