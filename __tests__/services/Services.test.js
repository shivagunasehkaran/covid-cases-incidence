import {getCovidIncidence} from '../../src/services/Services';

describe('covid incidence API tests', () => {
  const incidence_url =
    'https://api.corona-zahlen.org/districts/09162/history/incidence/30';

  it('handles incidence details api', async () => {
    global.fetch = jest.fn(url =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({incidence_url: url}),
      }),
    );

    const response = await getCovidIncidence();
    expect(response.incidence_url).toEqual(incidence_url);
  });
});

describe('covid cases API tests', () => {
  const cases_url =
    'https://api.corona-zahlen.org/districts/09162/history/cases/30';

  it('handles cases details api', async () => {
    global.fetch = jest.fn(url =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({cases_url: url}),
      }),
    );

    const response = await getCovidIncidence();
    expect(response.cases_url).toEqual(cases_url);
  });
});
