import logo from './logo.svg';
import './App.css';
import PostList from './Post/PostList';
import Header from './Post/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PostList></PostList>
    </div>
  );
}

export default App;
