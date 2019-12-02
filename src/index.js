const {spawn} = require('child_process')

const plt = {
  plot (x, y) {
    let data = ''
    let color = 'blue'
    for (let i = 0; i < x.length; i++) {
      data += `${x[i]} ${y[i]}\n`
    }
    let gnuplot = spawn('gnuplot', ['-p']);
    // gnuplot.stdin.write(`set xrange [${minGrayLevel}:${maxGrayLevel}]\n`);
    gnuplot.stdin.write(`plot '-' with line lc rgbcolor "${color}" notitle\n`);
    gnuplot.stdin.write(`${data}`);
    gnuplot.stdin.write(`EOF`);
    gnuplot.stdin.end();
  }
}

module.exports = {
  plt
}