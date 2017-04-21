const fs = require('fs');
const cp = require('child_process');

const render = () => exec('node', ['render']);

fs.watch('index.js', render);
fs.watch('render.js', render);

render();

function exec (cmd, args) {
  const child = cp.spawn(cmd, args);

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
}
