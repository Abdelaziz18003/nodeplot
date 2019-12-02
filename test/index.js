const {plt} = require('../src/index')

const x = [0, 1, 2, 3, 4, 5]
const y = [0, 2, 4, 9, 16, 25]

plt.xlabel('my x label')
plt.ylabel('my y label')
plt.title('my title')
plt.plot(x, y)