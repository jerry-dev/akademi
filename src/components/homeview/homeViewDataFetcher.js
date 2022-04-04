const homeViewDataFetcher = (dispatch, isViewDataReady) => {
    const expiry = 10*60; //Ten minutes

    const url = 'https://akademi-server.herokuapp.com/';
    
    let cacheKey = url;
    let cached = sessionStorage.getItem(cacheKey);
    let whenCached = sessionStorage.getItem(`${cacheKey}:timestamp`);

    if (cached !== null && whenCached !== null) {
        let age = (Date.now() - whenCached) / 1000;
        if (age < expiry) {
            if (!isViewDataReady) {
                dispatch({type: 'LOAD_HOMEVIEW_DATA', payload: JSON.parse(cached)});
                return dispatch({type: 'IS_HOME_DATA_READY', payload: true});
            } else {
                return dispatch({type: 'IS_HOME_DATA_READY', payload: true});
            }
        } else {
            sessionStorage.removeItem(cacheKey);
            sessionStorage.removeItem(`${cacheKey}:timestamp`);
        }
    }

    const fetchOptions = {
        method: 'GET'
    }

    return fetch(url, fetchOptions).then((response) => {
        dispatch({type: 'IS_FETCHING_DATA', payload: true});
        if (response.status === 200) {
            let contentType = response.headers.get('Content-Type');
            if (contentType && (contentType.match(/application\/json/i) ) ||
            contentType.match(/text\//i)) {
                response.clone().text().then((content) => {
                    sessionStorage.setItem(cacheKey, content);
                    sessionStorage.setItem(`${cacheKey}:timestamp`, Date.now());
                    dispatch({type: 'IS_FETCHING_DATA', payload: false});
                    dispatch({type: 'LOAD_HOMEVIEW_DATA', payload: JSON.parse(content)});
                    return dispatch({type: 'IS_HOME_DATA_READY', payload: true});
                });
            }
        }
    });
}

export default homeViewDataFetcher;