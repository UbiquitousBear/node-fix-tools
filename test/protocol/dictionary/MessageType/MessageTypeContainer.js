import expect from 'expect.js'
import MessageType 
	from '../../../../src/protocol/dictionary/MessageType/MessageType'
import MessageTypeContainer
	from '../../../../src/protocol/dictionary/MessageType/MessageTypeContainer'

describe('Dictionary MessageTypeContainer', () => {
	let container, messageTypes

	before(() => {

		messageTypes = [
			new MessageType('A', 'foo'),
			new MessageType('B', 'bar'),
			new MessageType('C', 'baz')
		]
		container = new MessageTypeContainer(messageTypes)
	})

	it('should contain all the message types', () => {
		return expect(container.messageTypes()).to.equal(messageTypes)
	})

	it('should contain all the MessageType values', () => {
		const values = [ 'A', 'B', 'C' ]
		return expect(container.messageTypeValues()).to.eql(values)
	})

	it('should find the MessageType by msgType', () => {
		return expect(container.byMsgType('A').name()).to.equal('foo')
	})

	it('should find the MessageType by name', () => {
		return expect(container.byName('foo').msgType()).to.equal('A')
	})
})
