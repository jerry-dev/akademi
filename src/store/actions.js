export default {
    getHomeData() {
        const homeData = {};
        homeData.overview = store.getState().overview;
        homeData.unpaidstudentintuition = store.getState().unpaidstudentintuition;
        return homeData;
    },
}