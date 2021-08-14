import {GET_URL} from '../../src/services/Constants';

describe('Constants', () => {
  it('renders correctly with all cases url values', async () => {
    expect(GET_URL.CASES_URL).toEqual(
      'https://api.corona-zahlen.org/districts/09162/history/cases/',
    );
  });
  it('renders correctly with all incidence url values', async () => {
    expect(GET_URL.INCIDENCE_URL).toEqual(
      'https://api.corona-zahlen.org/districts/09162/history/incidence/',
    );
  });
});
