import { hot } from 'react-hot-loader/root';
import { Layout } from './Layout';
import { BoardContainer } from './Board';
import { ColumnSelectorContainer } from './ColumnSelector';
import { GameStatusContainer } from './GameStatus';
import 'normalize.css';
import '../styles/base.scss';

function App() {
  return (
    <Layout>
      <ColumnSelectorContainer />
      <BoardContainer />
      <GameStatusContainer />
    </Layout>
  );
}

export default hot(App);
