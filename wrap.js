const wrap = (line, maxLen) => { //Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula
  // let finalStr = '';
  line = line.split('')
  for(let i = maxLen; i < line.length; i+=maxLen){
    line.splice(i, 0, '\n')
  }


return line.join('');



};



module.exports = wrap;