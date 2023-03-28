import './App.module.css';
import { NavBarComponet, ItemListContainerComponent, ItemListDetailContainer } from './components';
import { MainRoutes } from './routes/MainRoutes';  

function App() {
  return (
    <div className="title">
      <NavBarComponet/>
      <MainRoutes />
    </div>
  );
}

export default App;
