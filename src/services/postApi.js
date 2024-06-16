export const getPostApi = async (url) => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			console.log('Network response was not ok');
		}
		return await response.json();
	} catch (err) {
		console.error('Error fetching posts:', err);
		return [];
	}
};

export const createPostApi = async (url, payload) => {
	try {
		const response = await fetch(`${url}/posts`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})
		return await response.json();
	} catch (e) {
		console.log(e)
	}
}
