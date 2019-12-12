'use strict';

const e = React.createElement;

class SuccessMessage extends React.Component {

  render() {

    return (
      <div class="alert alert-success" role="alert">
        We have successfully added React components to an existing HTML page =)
      </div>
      );
  }
}

const domContainer = document.querySelector('.successMessage');
ReactDOM.render(e(SuccessMessage), domContainer);