import expect from 'expect.js'
import Tag from '../../../../src/protocol/dictionary/Tag/Tag'

describe('Dictionary Tag', () => {

	const tag = new Tag('foo', 'bar')

	it('should return the correct value', () => {
		return expect(tag.name()).to.equal('bar')
	})

	it('should return the correct name', () => {
		return expect(tag.value()).to.equal('foo')
	})
})
