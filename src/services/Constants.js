// Base URL
const BASE_URL = 'https://api.corona-zahlen.org/';
const END_POINT_INCIDENCE = 'districts/09162/history/incidence/';
const END_POINT_CASES = 'districts/09162/history/cases/';

// API URL
export const GET_URL = {
  INCIDENCE_URL: `${BASE_URL}${END_POINT_INCIDENCE}`,
  CASES_URL: `${BASE_URL}${END_POINT_CASES}`,
};
