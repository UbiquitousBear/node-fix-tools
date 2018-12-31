export default function MessageTypeContainer ({ messageTypes }) {
	return {
		messageTypes: () => messageTypes,
		messageTypeValues: () => messageTypes.map(msgType => msgType.value()),
		byValue: (value) => messageTypes.find(msgType => msgType.value() === value),
		byName: (name) => messageTypes.find(msgType => msgType.name() === name),
	}
}