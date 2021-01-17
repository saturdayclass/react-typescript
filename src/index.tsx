import ReactDOM from 'react-dom';
import SearchUser from './refs/SearchUser';

const App = () => {
  // const listUser = [{ name: 'Raihan', age: 20 }];
  return (
    <div>
      <SearchUser />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
