import React from 'react';

const inputChange = (Component) => {
  class OnInputChange extends React.Component {
    constructor(props) {
      super(props);

      this.timeoutId = null;

      this.state = {
        activeCard: null
      };
      this._handleChangeInfo = this._handleChangeInfo.bind(this);
      this._clearActiveCard = this._clearActiveCard.bind(this);
    }

    _handleChangeInfo(e) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    render() {
      return (
        <Component
          handleChangeInfo={this._handleChangeInfo}
          {...this.props}
          {...this.state}
        />
      );
    }
  }

  return OnInputChange;
};

export default inputChange;
