import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Iblood from './iblood';
import Login from './components/Login';


const Root = createStackNavigator({
  login:{
    screen:Login,
  },
  iblood:{
    screen:Iblood,
  }
  
});
const App = createAppContainer(Root);
export default App;