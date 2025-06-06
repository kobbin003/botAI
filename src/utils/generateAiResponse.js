import sampleData from "../aiData/sampleData.json";

export async function generateAiResponse(question) {
	//* delay is just to mimic the actual response

	let timer = "";
	const res = await new Promise((resolve) => {
		timer = setTimeout(() => {
			const found = sampleData.find((data) => data.question === question);
			if (found) {
				resolve(found.response);
			} else {
				resolve("Sorry, Did not understand your query!");
			}
		}, 800);
	});

	if (res) {
		clearInterval(timer);
		return res;
	}
	return 200;
}
