
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import TopNavbar from './components/Navbars/TopNavbar/TopNavbar';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TopNavbar />
        <MainContent />
      </div>
    </Provider>
  );
}

export default App;
