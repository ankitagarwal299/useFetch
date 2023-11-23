import React from 'react';
import useFetch from './hooks/useFetch';
import useFetch from './hooks/useFetchReducer';

import './style.css';

//const BASE_URL = "https://reqres.in/api/users/";
const BASE_URL = 'https://inshortsapi.vercel.app/news?category=all';

export default function App() {
  // const { response, loading, error } = useFetch(BASE_URL);
  const { response, loading, error } = useFetch(BASE_URL);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      {loading && <h3>Loading....</h3>}
      {error && <h3>{error}</h3>}
      {<pre>{JSON.stringify(response, undefined, 2)}</pre>}
    </div>
  );
}
