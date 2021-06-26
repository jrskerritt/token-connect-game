import GameParameters from './src/models/GameParameters';

const config: GameParameters = {
  opponentServiceEndpoint:
    'https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production',
  boardHeight: 4,
  boardWidth: 4,
  tokensToWin: 4,
};

export default config;
