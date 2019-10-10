const diff = (a,b) => {
  
  return a.filter(n => {
    return !b.includes(n)
  });
}

module.exports = diff;