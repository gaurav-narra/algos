const minWindowSubstring = require('../../src/strings/min-window-substring');

describe.only('min window substring', () => {
  it('should get sub string', () => {
    let resp
    resp = minWindowSubstring.minWindow('ADOBECODEBANC', 'ABC')
    resp.should.eql('BANC')

    resp = minWindowSubstring.minWindow('aa', 'a')
    resp.should.eql('a')

    resp = minWindowSubstring.minWindow('AaBbCc', 'AbC')
    resp.should.eql('AaBbC')
  })
})
