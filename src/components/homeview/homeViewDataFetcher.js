const homeViewDataFetcher = {};

homeViewDataFetcher.fetchA = (dispatch) => {
    const expiry = 1*60; //One minutes

    const url = 'https://jsonplaceholder.typicode.com/todos';
    let cacheKey = url;
    let cached = sessionStorage.getItem(cacheKey);
    let whenCached = sessionStorage.getItem(`${cacheKey}:timestamp`);

    (!cached) 
        ? console.info(`::The data is not from the local cache::`)
        : console.info(`::The data came from the local cache::`);

    if (cached !== null && whenCached !== null) {
        let age = (Date.now() - whenCached) / 1000;
        if (age < expiry) {
            return dispatch({type: 'LOAD_POSTS', payload: JSON.parse(cached)});
        } else {
            sessionStorage.removeItem(cacheKey);
            sessionStorage.removeItem(`${cacheKey}:timestamp`);
        }
    }

    return fetch(url).then((response) => {
        dispatch({type: 'IS_FETCHING_DATA', payload: true});
        if (response.status === 200) {
            let contentType = response.headers.get('Content-Type');
            if (contentType && (contentType.match(/application\/json/i) ) ||
            contentType.match(/text\//i)) {
                response.clone().text().then((content) => {
                    sessionStorage.setItem(cacheKey, content);
                    sessionStorage.setItem(`${cacheKey}:timestamp`, Date.now());
                    dispatch({type: 'IS_FETCHING_DATA', payload: false});
                    return dispatch({type: 'LOAD_POSTS', payload: JSON.parse(content)});
                });
            }
        }
    });
}

export default homeViewDataFetcher;