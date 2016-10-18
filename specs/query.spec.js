'use strict';


describe('query', () => {
  const Query = require('../libs/query')

  describe('constructor', () => {
    it('should not construct with invalid file', () => {
      expect(Query).toThrow()
    })
  })
})