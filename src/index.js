module.exports = function check(str, bracketsConfig) {
  let firstBracket = []
  let stack = []
  let openAndClose = {}
  bracketsConfig.forEach(el => { 
    firstBracket.push(el[0])
    openAndClose[el[1]] = el[0]
  })
  for(let i = 0; i < str.length; i++){
    if(str[i] === stack[stack.length - 1] && str[i] === openAndClose[str[i]]) stack.pop()
    else if(firstBracket.includes(str[i])) stack.push(str[i])
    else {
      let lastBracketIndex = 0
      bracketsConfig.forEach((el, index) => {
        if(str[i] === el[1]) lastBracketIndex = index
      })
      if(bracketsConfig[lastBracketIndex][0] === stack[stack.length - 1]) stack.pop()
      else return false
    }
  }
  if (!stack.length) return true
  else return false
}