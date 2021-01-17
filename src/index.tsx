import ReactDOM from 'react-dom';
import SearchUser from './state/SearchUser';

const App = () => {
  return (
    <div>
      <SearchUser />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
