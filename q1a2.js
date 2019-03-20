const t = 'abcde'
const s1 = 'ace'
const s2 = 'aec'

const isSubString = (s, t) => {
  return new RegExp('.*' + s.split('').join('.*') + '.*').test(t)
}

console.log(isSubString(s1, t))
console.log(isSubString(s2, t))
