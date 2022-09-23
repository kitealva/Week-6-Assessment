const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    test("array length", () => {
        expect(shuffleArray.length).toBe(1)
    })

    test('check if all items are the same', () => {
        let otherArray = [1, 2, 3, 4, 5]
        expect(shuffleArray(otherArray).length).toEqual (otherArray.length)
    })
})