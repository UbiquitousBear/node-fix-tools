export default function Dictionary ({
	dialectName,
	versionString,
	structure,
	tags,
	messageTypes = [],
	sessionMessageTypes = []
}) {
	return {
		dialectName: () => dialectName,
		versionString: () => versionString,
		structure: () => structure,
		tags: () => tags,
		messageTypes: () => messageTypes,
		sessionMessageTypes: () => sessionMessageTypes
	}
}
