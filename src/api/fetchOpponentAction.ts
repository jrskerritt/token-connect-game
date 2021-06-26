import fetch from 'unfetch';
import config from '../../app.config';

export default async function fetchOpponentAction(
  actionHistory: number[]
): Promise<number[]> {
  const { opponentServiceEndpoint } = config;
  const response = await fetch(
    `${opponentServiceEndpoint}?moves=[${actionHistory.join(',')}]`
  );
  return response.json();
}
