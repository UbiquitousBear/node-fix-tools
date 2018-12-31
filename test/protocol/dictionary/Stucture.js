import expect from 'expect.js'
import Structure from '../../../src/protocol/dictionary/Structure'
import TagContainer from '../../../src/protocol/dictionary/Tag/TagContainer'

describe('Dictionary Structure', () => {
	let structure, headerContainer, trailerContainer

	before(() => {
		headerContainer = new TagContainer([])
		trailerContainer = new TagContainer([])
		structure = new Structure(headerContainer, trailerContainer)
	})

	it('should return the correct header', () => {
		return expect(structure.header()).to.equal(headerContainer)
	})

	it('should return the correct trailer', () => {
		return expect(structure.trailer()).to.equal(trailerContainer)
	})
})
