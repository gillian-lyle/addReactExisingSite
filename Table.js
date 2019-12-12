'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          { className: "h4" },
          "Example bootstrap table"
        ),
        React.createElement(
          "table",
          { className: "table table-striped" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                { scope: "col" },
                "#"
              ),
              React.createElement(
                "th",
                { scope: "col" },
                "First"
              ),
              React.createElement(
                "th",
                { scope: "col" },
                "Last"
              ),
              React.createElement(
                "th",
                { scope: "col" },
                "Handle"
              )
            )
          ),
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                { scope: "row" },
                "1"
              ),
              React.createElement(
                "td",
                null,
                "Mark"
              ),
              React.createElement(
                "td",
                null,
                "Otto"
              ),
              React.createElement(
                "td",
                null,
                "@mdo"
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                { scope: "row" },
                "2"
              ),
              React.createElement(
                "td",
                null,
                "Jacob"
              ),
              React.createElement(
                "td",
                null,
                "Thornton"
              ),
              React.createElement(
                "td",
                null,
                "@fat"
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                { scope: "row" },
                "3"
              ),
              React.createElement(
                "td",
                null,
                "Larry"
              ),
              React.createElement(
                "td",
                null,
                "the Bird"
              ),
              React.createElement(
                "td",
                null,
                "@twitter"
              )
            )
          )
        )
      );
    }
  }]);

  return Table;
}(React.Component);

var domContainer = document.querySelector('.table');
ReactDOM.render(e(Table), domContainer);