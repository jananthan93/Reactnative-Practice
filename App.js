
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './Login'
import TodoList from './Todo/TodoList'

const Root = createStackNavigator({
  login:{
    screen:Login,
  },
  todo:{
    screen:TodoList,
  }
  
});
const App = createAppContainer(Root);
export default App;
