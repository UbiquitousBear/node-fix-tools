import expect from 'expect.js'
import Message from './../../src/protocol/message/Message'
import MessageType from '../../src/protocol/dictionary/MessageType/MessageType'
import { fromFilePath } from './../../src/protocol/dictionary/Builder'

describe('Message', () => {

	let dictionary, message

	before(async () => {
		const messageType = new MessageType('A', 'Logon')
		dictionary = await fromFilePath('./resources/FIXDictionary/')
		message = new Message(dictionary[0], messageType)
	})

	it ('should have the correct message type', () => {
		expect(message.messageType().value()).to.equal('A')
	})

	it ('should contain the correct version string', () => {
		expect(message.toString()).to.contain('8=FIX.4.2')
	})

	it ('should contain the message type in string format', () => {
		expect(message.toString()).to.contain('35=A')
	})
})
