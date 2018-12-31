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

	return new Dictionary(
		definition.dialect_name,
		definition.fix_version,
		new Structure({
			header: new TagContainer(structureHeaderTags),
			trailer: new TagContainer(structureTrailerTags)
		}),
		new TagContainer(tags),
		new MessageTypeContainer(messageTypes),
		sessionMessageTypes
	)
}
