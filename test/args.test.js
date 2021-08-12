const {parseInput} = require('./../src/args');

describe('args', () => {
  it('should not accept missing course descriptor', () => {
    expect(parseInput()).toEqual({})
  });

  it('should not accept wrong course descriptors', () => {
    expect(parseInput([null, null, 'ecmascript'])).toEqual({})
  });

  it('should not accept missing target directory', () => {
    expect(parseInput([null, null, 'ecmascript-15'])).toEqual({});
  });

  it('should accept valid args', () => {
    expect(parseInput([null, null, 'ecmascript-15', '/'])).toEqual({
      intensive: 'ecmascript-15',
      targetDir: '/'
    })
  });
});
