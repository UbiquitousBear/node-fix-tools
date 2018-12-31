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

export default function Tag ({ value, name }) {
	return {
		value: () => value,
		name: () => name
	}
}
