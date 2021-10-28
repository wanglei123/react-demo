import store from './store';
import { connect } from 'react-redux';


const add = () => {
  store.dispatch({ type: 'ADD' });
};
const minuse = () => {
  store.dispatch({ type: 'MINUS' });
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = {
  add,minuse
}

function count(props) {
  console.log('props', props);
  return (
    <div>
      {props.count}
      <button onClick={add}>+</button>
      <button onClick={minuse}>-</button>
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(count);
