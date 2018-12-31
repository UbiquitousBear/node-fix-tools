import expect from 'expect.js'
import Field from '../../src/protocol/Field'
import Tag from '../../src/protocol/dictionary/Tag/Tag'

describe('Field', () => {
	let field

	// arrange & act
	before(() => {
		field = new Field({tag: new Tag({ value: 3, name: 'Test'}), value: 'test'})
	})
	it('should return the correct tag', () => {
		// assert
		expect(field.tag().value()).to.equal(3)
	})

	it('should return the correct value', () => {
		// assert
		expect(field.value()).to.equal('test')
	})

	it('should return the correct length', () => {
		// assert
		expect(field.bodyLength()).to.equal(4)
	})

	it('should return the correct string representation', () => {
		// assert
		expect(field.toString()).to.equal('3=test' + String.fromCharCode(1))
	})
})