export default {
    loadHomeViewData(state, payload) {
        console.info('Loading the homeView data');
        const newState = {
            ...state,
            overview: payload.overview,
            food: payload.food,
            events: payload.events,
            messages: payload.messages,
            recentStudents: payload.recentStudents,
            unpaidTuition: payload.unpaidTuition
        };
        return newState;
    },
    isFetchingData(state, payload) {
        (payload)
            ? console.info('The application is currently fetching data')
            : console.info('The application is no longer fetching data');
		return { ...state, isFetchingData: payload };
    },
    isHomeDataReady(state, payload) {
        console.info('Home data is ready');
        const newState = {
            ...state,
            isHomeDataReady: payload
        };
        return newState;
    }
}