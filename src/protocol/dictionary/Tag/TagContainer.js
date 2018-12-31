export default class TagContainer {

	constructor(tags) {
		this._tags = tags
	}

	tags () {
		return this._tags
	}

	tagValues () {
		return this._tags.map(tag => tag.value())
	}

	byValue (value) {
		return this._tags.find(tag => tag.value() === value)
	}

	byName (name) {
		return this._tags.find(tag => tag.name() === name)
	}
}
