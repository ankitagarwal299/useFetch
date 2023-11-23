import { useEffect, useReducer } from 'react';

function reducerfn(state, { type, error, response }) {
  console.log('sadfsadf', type, error, response);

  switch (type) {
    case 'loading':
      return { ...state, response: [], loading: true, error: null };
    case 'success':
      return { ...state, response: response, loading: false, error: null };
    case 'error':
      return { ...state, response: [], loading: false, error: error };
    default:
      return state;
  }
}

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function useFetch(url) {
  const [state, dispatch] = useReducer(reducerfn, initialState);

  useEffect(() => {
    async function callApi() {
      dispatch({ type: 'loading' });

      try {
        const res = await fetch(url);
        const result = await res.json();
        console.log('result-->', result);
        dispatch({ type: 'success', response: result });
      } catch (err) {
        dispatch({ type: 'error', error: err });
      }
    }

    callApi();
  }, [url]);

  return state;
}
