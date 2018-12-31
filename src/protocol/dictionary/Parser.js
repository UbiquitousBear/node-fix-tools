import Dictionary from './Dictionary'
import Tag from './Tag/Tag'
import TagContainer from './Tag/TagContainer'
import MessageType from './MessageType/MessageType'
import MessageTypeContainer from './MessageType/MessageTypeContainer'
import Structure from './Structure'

export function parseToDictionary ({ data }) {
	let tags = [],
		messageTypes = [],
		sessionMessageTypes = [],
		structureHeaderTags = [],
		structureTrailerTags = []
		
	data.tags.forEach(
		element => tags.push(
			new Tag({ value: element.tag, name: element.name })
		)
	)

	data.message_types.forEach(
		element => messageTypes.push(
			new MessageType({ msgType: element.msgType, name: element.name }))
	)

	data.structure.header.forEach(
		element => structureHeaderTags.push(
			new Tag({ value: element.tag, name: element.name })
		)
	)

	data.structure.trailer.forEach(
		element => structureTrailerTags.push(
			new Tag({ value: element.tag, name: element.name })
		)
	)

	data.session_message_types.forEach(
		element => sessionMessageTypes.push(element)
	)

	return new Dictionary({
		dialectName: data.dialect_name,
		versionString: data.fix_version,
		structure: new Structure({
			header: new TagContainer({ tags: structureHeaderTags }),
			trailer: new TagContainer({ tags: structureTrailerTags })
		}),
		tags: new TagContainer({ tags }),
		messageTypes: new MessageTypeContainer({ messageTypes }),
		sessionMessageTypes
	})
}
