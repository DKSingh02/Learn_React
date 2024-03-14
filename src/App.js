import './App.css';
import LifecycleOne from './react-lifecycles/components/react-lifecycle-one';
import { WelcomeClassComponent, WelcomeFunctionComponent } from './react-props/components';
import { GreetingFromClassComponent, GreetingFromFunctionalComponent } from './react-conditions/components';
import { FruitListClassComponent, FruitListFunctionalComponent } from './rendering-lists/index';
import { RefExampleComponent, RefParentComponent } from './react-refs';

function App() {
  return (
    <div className="App">
      {/* <LifecycleOne />  */}
      {/* <WelcomeClassComponent firstName='Diwakar' lastName='Kumar'/> */}
      {/* <WelcomeFunctionComponent firstName='Diwakar' lastName='Kumar'/> */}
      {/* <GreetingFromClassComponent name='Diwakar' isLoggedIn={true} /> */}
      {/* <GreetingFromFunctionalComponent name='Diwakar' isLoggedIn={true} /> */}
      {/* <FruitListFunctionalComponent /> */}
      {/* <RefExampleComponent /> */}
      <RefParentComponent />
    </div>
  );
}

export default App;
