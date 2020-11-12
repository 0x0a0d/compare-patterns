const comparePatterns = require('../index')

describe('test comparePatterns', () => {
  it('should run as expected', () => {
    expect(comparePatterns('a.**.b', '**.b')).toBe(true)
    expect(comparePatterns('a.**.b', 'a.**')).toBe(true)
    expect(comparePatterns('a.**.b', 'a.**.c')).toBe(false)
    expect(comparePatterns('**.c', 'a.**.c')).toBe(true)
  })
})
describe('Test match', () => {
  it('should pass default', () => {
    expect(comparePatterns('1.2.3', '1.2.3')).toBe(true)
    expect(comparePatterns('a.b.c.d', 'a.b.c.d')).toBe(true)
    expect(comparePatterns('aa.bb.cc', 'aa.bb.cc')).toBe(true)

    expect(comparePatterns('a1c', 'a?c')).toBe(true)
    expect(comparePatterns('a2c', 'a?c')).toBe(true)
    expect(comparePatterns('a3c', 'a?c')).toBe(true)
    expect(comparePatterns('ac', 'a?c')).toBe(false)

    expect(comparePatterns('aa.1b.c', 'aa.?b.*')).toBe(true)
    expect(comparePatterns('aa.2b.cc', 'aa.?b.*')).toBe(true)
    expect(comparePatterns('aa.3b.ccc', 'aa.?b.*')).toBe(true)
    expect(comparePatterns('aa.4b.cccc', 'aa.?b.*')).toBe(true)
    expect(comparePatterns('aa.5b.ccccc', 'aa.?b.*')).toBe(true)
    expect(comparePatterns('aa.5b.ccccc.d', 'aa.?b.*')).toBe(false)

    expect(comparePatterns('aa.bb.cc', 'aa.bb.*')).toBe(true)
    expect(comparePatterns('aa.bb.cc', '*.bb.*')).toBe(true)
    expect(comparePatterns('bb.cc', 'bb.*')).toBe(true)
    expect(comparePatterns('dd', '*')).toBe(true)

    expect(comparePatterns('abcd', '*d')).toBe(true)
    expect(comparePatterns('abcd', '*d*')).toBe(true)
    expect(comparePatterns('abcd', '*a*')).toBe(true)
    expect(comparePatterns('abcd', 'a*')).toBe(true)

    // --- DOUBLE STARS CASES ---

    expect(comparePatterns('aa.bb.cc', 'aa.*')).toBe(false)
    expect(comparePatterns('aa.bb.cc', 'a*')).toBe(false)
    expect(comparePatterns('bb.cc', '*')).toBe(false)

    expect(comparePatterns('aa.bb.cc.dd', '*.bb.*')).toBe(false)
    expect(comparePatterns('aa.bb.cc.dd', '*.cc.*')).toBe(false)

    expect(comparePatterns('aa.bb.cc.dd', '*bb*')).toBe(false)
    expect(comparePatterns('aa.bb.cc.dd', '*cc*')).toBe(false)

    expect(comparePatterns('aa.bb.cc.dd', '*b*')).toBe(false)
    expect(comparePatterns('aa.bb.cc.dd', '*c*')).toBe(false)

    expect(comparePatterns('aa.bb.cc.dd', '**.bb.**')).toBe(true)
    expect(comparePatterns('aa.bb.cc.dd', '**.cc.**')).toBe(true)

    expect(comparePatterns('aa.bb.cc.dd', '**aa**')).toBe(true)
    expect(comparePatterns('aa.bb.cc.dd', '**bb**')).toBe(true)
    expect(comparePatterns('aa.bb.cc.dd', '**cc**')).toBe(true)
    expect(comparePatterns('aa.bb.cc.dd', '**dd**')).toBe(true)

    expect(comparePatterns('aa.bb.cc.dd', '**b**')).toBe(true)
    expect(comparePatterns('aa.bb.cc.dd', '**c**')).toBe(true)

    expect(comparePatterns('aa.bb.cc', 'aa.**')).toBe(true)
    expect(comparePatterns('aa.bb.cc', '**.cc')).toBe(true)

    expect(comparePatterns('bb.cc', '**')).toBe(true)
    expect(comparePatterns('b', '**')).toBe(true)

    expect(comparePatterns('$node.connected', '$node.*')).toBe(true)
    expect(comparePatterns('$node.connected', '$node.**')).toBe(true)
    expect(comparePatterns('$aa.bb.cc', '$aa.*.cc')).toBe(true)

    // ---
    expect(comparePatterns('$aa.bb.cc', '$aa.*.cc')).toBe(true)
    expect(comparePatterns('$aa.bb.cc', '$aa.**')).toBe(true)
    expect(comparePatterns('$aa.bb.cc', '$aa.**.cc')).toBe(true)
    expect(comparePatterns('$aa.bb.cc', '$aa.??.cc')).toBe(true)
    expect(comparePatterns('$aa.bb.cc', '?aa.bb.cc')).toBe(true)
    expect(comparePatterns('$aa.bb.cc', 'aa.bb.cc')).toBe(false)
    expect(comparePatterns('$aa.bb.cc', '**.bb.cc')).toBe(true)
    expect(comparePatterns('$aa.bb.cc', '**.cc')).toBe(true)
    expect(comparePatterns('$aa.bb.cc', '**')).toBe(true)
    expect(comparePatterns('$aa.bb.cc', '*')).toBe(false)
  })
})
