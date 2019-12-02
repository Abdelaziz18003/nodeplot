'use strict'

const {spawn} = require('child_process')

const plt = {
  options: {
    xlabel: '',
    ylabel: '',
    title: ''
  },

  xlabel (label) {
    this.options.xlabel = label 
  },

  ylabel (label) {
    this.options.ylabel = label
  },

  title (title) {
    this.options.title = title
  },

  plot (x, y) {
    let data = ''
    let color = 'blue'
    for (let i = 0; i < x.length; i++) {
      data += `${x[i]} ${y[i]}\n`
    }
    let gnuplot = spawn('gnuplot', ['-p']);
    gnuplot.stdin.write(`set xlabel "${this.options.xlabel}"\n`)
    gnuplot.stdin.write(`set ylabel "${this.options.ylabel}"\n`)
    gnuplot.stdin.write(`set title "${this.options.title}"\n`)
    gnuplot.stdin.write(`plot '-' with boxes lc rgbcolor "${color}"\n`);
    gnuplot.stdin.write(`${data}`);
    gnuplot.stdin.write(`EOF`);
    gnuplot.stdin.end();
  }
}

module.exports = {
  plt
}