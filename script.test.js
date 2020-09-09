const {sortABC, chekType} = require('./script')

describe('sortABC function', () => {
    test('sortABC should take text and return text in which the letters of the words are sorted alphabetically', () => {
        expect(sortABC('')).toBe('')
        expect(sortABC(2)).toBe('2')
        expect(sortABC('2')).toBe('2')
        expect(sortABC('2@#$$%')).toBe('2@#$$%')
        expect(sortABC('2@#$$% new string')).toBe('2@#$$% enw ginrst')
        expect(sortABC('2@#$$% ne6w strin3g# ')).toBe('2@#$$% en6w ginrst3#')
    })
})

describe('chekType function', () => {
    test('chekType should return true or false of char', () => {
        expect(chekType(5)).toBe(true)
        expect(chekType('$')).toBe(true)
        expect(chekType('f')).toBe(false)
        expect(chekType(' ')).toBe(true)
    })
})


