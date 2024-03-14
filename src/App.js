import './App.css';
import LifecycleOne from './react-lifecycles/components/react-lifecycle-one';
import { WelcomeClassComponent, WelcomeFunctionComponent } from './react-props/components';
import { GreetingFromClassComponent, GreetingFromFunctionalComponent } from './react-conditions/components';

function App() {
  return (
    <div className="App">
      {/* <LifecycleOne />  */}
      {/* <WelcomeClassComponent firstName='Diwakar' lastName='Kumar'/> */}
      {/* <WelcomeFunctionComponent firstName='Diwakar' lastName='Kumar'/> */}
      {/* <GreetingFromClassComponent name='Diwakar' isLoggedIn={true} /> */}
      <GreetingFromFunctionalComponent name='Diwakar' isLoggedIn={true} />
    </div>
  );
}

export default App;
