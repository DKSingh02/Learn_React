import './App.css';
import LifecycleOne from './react-lifecycles/components/react-lifecycle-one';
import { WelcomeClassComponent, WelcomeFunctionComponent } from './react-props/components'

function App() {
  return (
    <div className="App">
      {/* <LifecycleOne />  */}
      {/* <WelcomeClassComponent firstName='Diwakar' lastName='Kumar'/> */}
      <WelcomeFunctionComponent firstName='Diwakar' lastName='Kumar'/>
    </div>
  );
}

export default App;
