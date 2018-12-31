export const typeNames = {
	Heartbeat: 'Heartbeat',
	Logon: 'Logon',
	Logout: 'Logout',
	Reject: 'Reject',
	Resend_Request: 'Resend_Request',
	Sequence_Reset: 'Sequence_Reset',
	Test_Request: 'Test_Request'
}

export default class MessageType {

	constructor(msgType, name) {
		this._msgType = msgType
		this._name = name 
	}

	msgType () {
		return this._msgType
	} 

	name () {
		return this._name
	}
}