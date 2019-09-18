import expect from 'expect.js'
import Tag from '../../../../src/protocol/dictionary/Tag/Tag'
import TagContainer from '../../../../src/protocol/dictionary/Tag/TagContainer'

describe('Dictionary TagContainer', () => {
	let container, tags

	before(() => {
		tags = [
			new Tag('A', 'foo'),
			new Tag('B', 'bar'),
			new Tag('C', 'baz')
		]
		container = new TagContainer(tags)
	})

	it('should return an array of tags', () => {
		expect(container.tags()).to.eql(tags)
	})

	it('should return an array of tag values', () => {
		const values = [ 'A', 'B', 'C' ]
		expect(container.tagValues()).to.eql(values)
	})

	it('should return a tag by value', () => {
		expect(container.byValue('A').name()).to.equal('foo')
	})

	it('should return a tag by name', () => {
		expect(container.byName('foo').value()).to.equal('A')
	})
})
