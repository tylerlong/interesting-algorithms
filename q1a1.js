
const t = 'abcde'
const s1 = 'ace'
const s2 = 'aec'

const isSubString = (s, t) => {
  if (s.length === 0) {
    return true
  }
  if (t.length < s.length) {
    return false
  }
  const firstCharacterIndex = t.indexOf(s[0])
  if (firstCharacterIndex === -1) {
    return false
  }
  return isSubString(s.substring(1), t.substring(firstCharacterIndex + 1))
}

console.log(isSubString(s1, t))
console.log(isSubString(s2, t))
