function stringCompare(a, b, reversed = false) {
  for (let i = 0; i < a.length && i < b.length; i++) {
    if (a[i] === '*' || b[i] === '*') {
      if (reversed) {
        return true
      } else {
        return stringCompare(a, b, true)
      }
    }
    if (a[i] === '?' || b[i] === '?' || a[i] === b[i]) {
      continue
    }
    return false
  }
  return a.length === b.length
}

function compare(a, b, reversed = false) {
  for (let i = 0; i < a.length && i < b.length; i++) {
    if (a[i] === '**' || b[i] === '**') {
      if (reversed) {
        return true
      } else {
        return compare(a.slice(i).reverse(), b.slice(i).reverse(), true)
      }
    }
    if (stringCompare(a[i].split(''), b[i].split(''))) {
      continue
    }
    return false
  }
  return a.length === b.length
}
function mergeMultipleMatches(pattern) {
  return pattern.replace(/\*\*.*\*\*/, '**')
}

module.exports = function comparePatterns(pattern1, pattern2) {
  const a = mergeMultipleMatches(pattern1).split('.')
  const b = mergeMultipleMatches(pattern2).split('.')

  return compare(a, b)
}
