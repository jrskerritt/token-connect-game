import { mocked } from 'ts-jest/utils';
import fetch from 'unfetch';
import fetchOpponentAction from './fetchOpponentAction';

jest.mock('unfetch', () =>
  jest.fn().mockImplementation((url: string) => {
    const { searchParams } = new URL(url);
    return {
      ok: true,
      status: 200,
      json: async () => [...JSON.parse(searchParams.get('moves') || ''), 0],
    } as Response;
  })
);

beforeEach(() => {
  mocked(fetch).mockClear();
});

test('should work for empty action history', async () => {
  const newActionHistory = await fetchOpponentAction([]);
  expect(newActionHistory.length).toBe(1);
});

test('should return new action history', async () => {
  const actionHistory = [0, 0, 1, 2];
  const newActionHistory = await fetchOpponentAction(actionHistory);
  expect(newActionHistory.length).toBe(actionHistory.length + 1);
});
