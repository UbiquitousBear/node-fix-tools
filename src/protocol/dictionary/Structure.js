export default function Structure ({ header, trailer }) {
	return {
		header: () => header,
		trailer: () => trailer
	}
}