import logo from './logo.svg';
import './App.css';
import PostList from './Post/PostList';
import Header from './Post/header';
import Timer from './Timer'
import Count from './Count/Count'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PostList></PostList>
      <Timer></Timer>
      <Count></Count>
    </div>
  );
}

export default App;
