import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Acceuil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <ul className="navbar-nav my-2 my-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Français
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Anglais</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default App;
