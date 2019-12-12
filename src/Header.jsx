'use strict';

const e = React.createElement;

const marginBotZero = {
  marginBottom:"0"
}

class Header extends React.Component {

  
  render() {

    return (
        <div>
          <div className="jumbotron" style={marginBotZero}>
            <h1 className="display-4">Header</h1>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
            NavBar
            </a>
            </nav>
        </div>
      );
  }
}

const domContainer = document.querySelector('header');
ReactDOM.render(e(Header), domContainer);