import HOC from './Components/HOC';
import AddBackgroundColor from './Components/AddBackgroundColor';
import ChangeColor from './Components/ChangeColor';
import PureCompo from './Components/PureCompo';
import NormalCompo from './Components/NormalCompo';

function App() {
  return (
    <>
      <div><h1>HOC : </h1>
        <AddBackgroundColor value={<HOC/>}/>
        <ChangeColor value={<HOC/>}/>
      </div>
      <div>
        <h1>Normal Component : </h1>
        <NormalCompo/>
      </div>
      <div>
        <h1>Pure Component : </h1>
        <PureCompo/>
      </div>
    </>
  );
}

export default App;
