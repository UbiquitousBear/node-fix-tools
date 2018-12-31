export const TagNames = {
	BeginString: 'BeginString',
	BodyLength: 'BodyLength',
	CheckSum: 'CheckSum',
	MsgSeqNum: 'MsgSeqNum',
	MsgType: 'MsgType',
	SenderCompID: 'SenderCompID',
	SendingTime: 'SendingTime',
	TargetCompID: 'TargetCompID'
}

export default class Tag {

	constructor(value, name) {
		this._name = name
		this._value = value
	}

	name () {
		return this._name
	}

	value () {
		return this._value
	}
}
