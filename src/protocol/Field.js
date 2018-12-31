export default function Field({ tag, value }) {

	this.delimeter = String.fromCharCode(1)
	this.tag = tag
	this.value = value

	return {
		tag: () => tag,
		value: () => value,
		bodyLength: () => ~-encodeURI(value).split(/%..|./).length,
		toString: () => `${this.tag.value()}=${this.value}${this.delimeter}`
	}
}
