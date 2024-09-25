export async function load({ params }) {
	const { slug } = params;

	const poetryData = await fetchPoetryData(slug);

	if (poetryData) {
		return {
			poetry: poetryData
		};
	}

	async function fetchPoetryData(slug) {
		const poems = {
			'sonnet-18': {
				title: 'Sonnet 18',
				content: { text: "Shall I compare thee to a summer's day?", author: 'Author 1' }
			},
			'the-raven': {
				title: 'The Raven',
				content: { text: 'Once upon a midnight dreary...', author: 'Author 2' }
			}
		};
		return poems[slug] || null;
	}
}
