import React, { useState} from 'react';
import useCustomFetchData from './useReduceFetchData'

function App() {
  const [state,setUrl] = useCustomFetchData('https://hn.algolia.com/api/v1/search?query=redux',
  { hits: [] })
  const [query, setQuery] = useState()
  return (
    <div>
      <form
        onSubmit={(event) => {
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
        {state.isError && <div>Something went wrong ...</div>}
        {state.isLoading ? (
          <div>Loading ...</div>
        ) : (
          <ul>
            {state.data.hits.map((item) => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default App;
