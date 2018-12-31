export default class Dictionary {

	constructor (
		dialectName,
		versionString,
		structure,
		tags,
		messageTypes = [],
		sessionMessageTypes = []
	) {
		this._dialectName = dialectName
		this._versionString = versionString
		this._structure = structure
		this._tags = tags
		this._messageTypes = messageTypes
		this._sessionMessageTypes = sessionMessageTypes
	}

	dialectName () {
		return this._dialectName
	}

	versionString () {
		return this._versionString
	}

	structure () {
		return this._structure
	}

	tags () {
		return this._tags
	}

	messageTypes () {
		return this._messageTypes
	}

	sessionMessageTypes () {
		return this._sessionMessageTypes
	}
}
