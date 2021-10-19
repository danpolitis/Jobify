import { useState, useEffect } from 'react'
import 'regenerator-runtime/runtime'
const useFetch = url => {
    const [state, setState] = useState([null, false]);
    useEffect(() => {
        setState([null, true]);

        (async () => {
            const data = await fetch(url)
                .then(res => res.json());
            setState([data[0], false]);
        })();
    }, [url]);

    return state;
};

export default useFetch;