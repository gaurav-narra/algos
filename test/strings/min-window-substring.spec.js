const minWindowSubstring = require('../../src/strings/min-window-substring');

describe('min window substring', () => {
  it('should get sub string', () => {
    let resp
    resp = minWindowSubstring.minWindow('ADOBECODEBANC', 'ABC')
    resp.should.eql('BANC')

    resp = minWindowSubstring.minWindow('aa', 'a')
    resp.should.eql('a')

    resp = minWindowSubstring.minWindow('AaBbCc', 'AbC')
    resp.should.eql('AaBbC')

    resp = minWindowSubstring.minWindow('abdbbadcefacdedfabccd', 'abc')
    resp.should.eql('abc')
  })
})
