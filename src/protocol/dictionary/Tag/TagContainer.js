export default function TagContainer ({ tags }) {
	return {
		tags: () => tags,
		tagValues: () => tags.map(tag => tag.value()),
		byValue: (value) => tags.find(tag => tag.value() === value),
		byName: (name) => tags.find(tag => tag.name() === name),
	}
}
