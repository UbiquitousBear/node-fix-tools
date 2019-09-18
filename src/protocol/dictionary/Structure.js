export default class Structure {

	constructor (header, trailer) {
		this._header = header
		this._trailer = trailer
	}

	header () {
		return this._header
	}

	trailer () {
		return this._trailer
	}
}
