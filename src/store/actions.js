export default {
    loadPosts(state, payload) {
        console.info('Loading the posts')
        const newState = { ...state, test: payload };
        return newState;
    },
    isFetchingData(state, payload) {
        (payload)
            ? console.info('The application is currently fetching data')
            : console.info('The application is no longer fetching data');
		return { ...state, isFetchingData: payload };
    },
}