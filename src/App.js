import logo from './logo.svg';
import './App.css';
import PostList from './Post/PostList';
import Header from './Post/header';
import Timer from './Timer'
import Count from './Count/Count'
import Count2 from './count'
import FetchData from './FetchData/FetchData'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PostList></PostList>
      <Timer></Timer>
      <Count></Count>
      <hr/>
      <Count2></Count2>
      <hr/>
      <FetchData />
    </div>
  );
}

export default App;
