import Dictionary from './Dictionary'
import Tag from './Tag/Tag'
import TagContainer from './Tag/TagContainer'
import MessageType from './MessageType/MessageType'
import MessageTypeContainer from './MessageType/MessageTypeContainer'
import Structure from './Structure'

export function parseToDictionary (definition) {
	let tags = [],
		messageTypes = [],
		sessionMessageTypes = [],
		structureHeaderTags = [],
		structureTrailerTags = []
		
	definition.tags.forEach(
		element => tags.push(
			new Tag(element.tag, element.name)
		)
	)

	definition.message_types.forEach(
		element => messageTypes.push(
			new MessageType({ msgType: element.msgType, name: element.name }))
	)

	definition.structure.header.forEach(
		element => structureHeaderTags.push(
			new Tag(element.tag, element.name)
		)
	)

	definition.structure.trailer.forEach(
		element => structureTrailerTags.push(
			new Tag(element.tag, element.name)
		)
	)

	definition.session_message_types.forEach(
		element => sessionMessageTypes.push(element)
	)

	return new Dictionary({
		dialectName: definition.dialect_name,
		versionString: definition.fix_version,
		structure: new Structure({
			header: new TagContainer(structureHeaderTags),
			trailer: new TagContainer(structureTrailerTags)
		}),
		tags: new TagContainer(tags),
		messageTypes: new MessageTypeContainer(messageTypes),
		sessionMessageTypes
	})
}
