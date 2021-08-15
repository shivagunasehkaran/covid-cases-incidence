import {useState, useEffect} from 'react';
import {GET_URL} from './Constants';

export const getCovidIncidence = count => {
  const [state, setState] = useState({data: null, isLoading: true});
  const url = GET_URL.INCIDENCE_URL + `${count}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(responseJson => {
        setState({data: responseJson.data['09162'].history, isLoading: false});
      })
      .catch(err => {
        setState({data: err, isLoading: false});
      });
  }, []);

  return state;
};

export const getCovidCases = count => {
  const [state, setState] = useState({data: null, isLoading: true});
  const url = GET_URL.CASES_URL + `${count}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(responseJson => {
        setState({data: responseJson.data['09162'].history, isLoading: false});
      })
      .catch(err => {
        setState({data: err, isLoading: false});
      });
  }, []);

  return state;
};
