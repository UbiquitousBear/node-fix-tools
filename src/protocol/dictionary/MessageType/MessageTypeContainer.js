export default class MessageTypeContainer {

	constructor (messageTypes) {
		this._messageTypes = messageTypes
	}

	messageTypes () {
		return this._messageTypes
	}

	messageTypeValues () {
		return this._messageTypes.map(msgType => msgType.msgType())
	}

	byMsgType (value) {
		return this._messageTypes.find(msgType => msgType.msgType() === value)
	}

	byName (name) {
		return this._messageTypes.find(msgType => msgType.name() === name)
	}
}
