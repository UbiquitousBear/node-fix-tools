import expect from 'expect.js'
import MessageType 
	from '../../../../src/protocol/dictionary/MessageType/MessageType'

describe('Dictionary MessageType', () => {

	const messageType = new MessageType('A', 'Logon')
	
	it ('should return the correct message type', () => {
		expect(messageType.msgType()).to.equal('A')
	})

	it ('should return the correct name', () => {
		expect(messageType.name()).to.equal('Logon')
	})
})
