
import './App.css';
import Banner from './components/Banner/Banner';
import NaveBar from './components/NaveBar/NaveBar';
import RowPosters from './components/RowPosters/RowPosters';
import {Action,Comedy,Horror,originals} from './urls'

function App() {
  return (
    <div className="App">
      <NaveBar />
      <Banner />
      <RowPosters url={Action} title='Netflix Original' />
      <RowPosters url={originals} title='Action Movies' isSmall/>
      <RowPosters url={Comedy} title='Comedy Movies' isSmall/>
      <RowPosters url={Horror} title='Horror Movies' isSmall/>
    </div>
  );
}

export default App;
