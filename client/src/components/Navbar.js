import { Link } from 'react-router-dom';

const Navigation = () => (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand mx-4" to="/">Hker$hit</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Notes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post">Post</Link>
            </li>
          </ul>
        </div>
      </nav>
)

export default Navigation;