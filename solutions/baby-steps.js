const args = process.argv.slice(2)

let sum = 0
args.forEach(elem => {
  sum+= parseInt(elem)
});

console.log(sum)