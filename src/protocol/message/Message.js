import Field from '../Field'
import { TagNames } from '../dictionary/Tag/Tag'

export default class Message {

	constructor(dictionary, messageType) {
		if (!dictionary) {
			throw new Error('Dictionary not specified!')
		}

		this._dictionary = dictionary
		this._messageType = messageType

		this._headerFields = new Map()
		this._trailerFields = new Map()
		this._bodyFields = new Map()
		this._messageStringGenerated = false
		this._messageString = null

		this.addHeaderField(
			new Field({
				tag: this._dictionary.tags().byName(TagNames.BeginString),
				value: this._dictionary.versionString()
			})
		)

		if (messageType) {
			this.addHeaderField(
				new Field({
					tag: this._dictionary.tags().byName(TagNames.MsgType),
					value: this._messageType.msgType()
				})
			)
		}
	}

	rearrangeGroupMap (group, structure) {
		let rearrangedMap = new Map()
		// Rebuild the rearranged map based on the contents of the
		// dictionary structure for the group
		for (const tag of structure.tags()) {
			if (group.has(tag.value())){
				rearrangedMap.set(tag.value(), group.get(tag.value()))
				group.delete(tag.value())
			}
		}

		// Populate the rearranged map with outstanding values
		return new Map([...rearrangedMap, ...group])
	}

	addHeaderField (field) {
		this._headerFields.set(field.tag(), field)
		this._headerFields = this.rearrangeGroupMap(
			this._headerFields,
			this._dictionary.structure().header()
		)
	}

	addTrailerField (field) {
		this._trailerFields.set(field.tag(), field)
		this._trailerFields = this.rearrangeGroupMap(
			this._trailerFields,
			this._dictionary.structure().trailer()
		)
	}

	withField (field) {
		messageStringGenerated = false

		if (dictionary.structure().header().byValue(field.tag())) {
			this.addHeaderField(field)
			return
		}

		if (dictionary.structure().trailer().byValue(field.tag())){
			this.addTrailerField(field)
			return
		}

		this._bodyFields.remove(field.tag())
		this._bodyFields.set(field.tag(), field)
	}

	fieldByTag (tag) {
		const messageMap = new Map(
			[...this._headerFields, ...this._bodyFields, ...this._trailerFields]
		)

		return Array.from(messageMap.values()).find(
			field => field.tag().value() === tag.value()
		)
	}

	messageType () {
		return this.fieldByTag(this._dictionary.tags().byName(TagNames.MsgType))
	}

	toString () {
		const messageMap = new Map(
			[...this._headerFields, ...this._bodyFields, ...this._trailerFields]
		)

		return Array.from(messageMap.values())
		.map(field => field.toString())
		.join('')
	}
}