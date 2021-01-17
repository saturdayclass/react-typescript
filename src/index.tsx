import ReactDOM from 'react-dom';
import SearchUser from './classes/SearchUser';

const App = () => {
  const listUser = [{ name: 'Raihan', age: 20 }];
  return (
    <div>
      <SearchUser users={listUser} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
