import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MessageList from './components/NotesList';
import MessageForm from './components/NotesForm';
import Navigation from './components/Navbar';
import 'bootswatch/dist/lux/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={MessageList} />
          <Route exact path="/post" component={MessageForm} />
          <Route path="*">
            <h1>Error 404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
