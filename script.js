const chekType = char => char ?  new RegExp('[0-9 !@#$%^&*(),.?":{}|<>]').test(char) : throw new Error('required parameter')

const sortABC = str => {
    if (str){
        const words = str.toString().trim().split(' ')
        let newStr = ''
        for (let i = 0; i < words.length; i++){
            if (words[i].length){
                let word = words[i].split('')
                word.sort((a, b) => {
                    if (chekType(a) || chekType(b)) return
                    return a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt()
                })
                word = word.join('')
                if (i + 1 < words.length){
                    newStr += word + ' '
                }else {
                    newStr += word
                }
            }
        }
        return newStr
    }
    return str
}

module.exports = {
    chekType, sortABC
}