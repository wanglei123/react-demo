import  { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const myReduce = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, isError: true };
    case 'FETCH_HIDE_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    default:
      throw new Error();
  }
};

function useCustomFetchData(initialUrl, initialData) {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(myReduce, {
    data: initialData,
    isError: false,
    isLoading: false,
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await axios(url);
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
      dispatch({ type: 'FETCH_HIDE_LOADING' });
    };

    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl ];
}

export default useCustomFetchData;
