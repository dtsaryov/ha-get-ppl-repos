const {parseArgs} = require('./../src/args.js');

describe('args', () => {
  it('should not accept missing course descriptor', () => {
    expect(parseArgs()).toEqual({})
  });

  it('should not accept wrong course descriptors', () => {
    expect(parseArgs([null, null, 'ecmascript'])).toEqual({})
  });

  it('should not accept missing target directory', () => {
    expect(parseArgs([null, null, 'ecmascript-15'])).toEqual({});
  });

  it('should accept valid args', () => {
    expect(parseArgs([null, null, 'ecmascript-15', '/'])).toEqual({
      intensive: 'ecmascript-15',
      targetDir: '/'
    })
  });
});
