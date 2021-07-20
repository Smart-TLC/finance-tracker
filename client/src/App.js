import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import AddTransaction from './pages/AddTransaction/AddTransaction';
import TransactionPage from './pages/Transaction/TransactionPage';
import CategoryDetailsPage from './pages/Category/CategoryDetailsPage';

function App() {
  return (
    <Router>
      <Sidebar/>
      <AddTransaction />
      <Switch>
        <Route path="/transaction">
          <TransactionPage />
        </Route>
        <Route path="/category/:cate">
          <CategoryDetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
