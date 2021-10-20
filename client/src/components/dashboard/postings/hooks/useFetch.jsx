import { useState, useEffect } from 'react'
import 'regenerator-runtime/runtime'

const useFetch = url => {
  const [state, setState] = useState(null);
    useEffect(() => {
      (async () => {
        const data = await fetch(url)
          .then(res => res.json());
        data.rows ? setState(data.rows) : setState(data[0]);
      })();
    }, [url]);

  return state;
};

export default useFetch;