'use strict';

const e = React.createElement;

class Footer extends React.Component {

  render() {

    return (
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <a className="navbar-brand" href="#">Footer</a>
      </nav>
      );
  }
}

const domContainer = document.querySelector('footer');
ReactDOM.render(e(Footer), domContainer);