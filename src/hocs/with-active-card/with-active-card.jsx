import React from 'react';

const withActiveCard = (Component) => {
  class WithActiveCard extends React.Component {
    constructor(props) {
      super(props);

      this.timeoutId = null;

      this.state = {
        activeCard: null
      };
      this._handleActiveCard = this._handleActiveCard.bind(this);
      this._clearActiveCard = this._clearActiveCard.bind(this);
    }

    _handleActiveCard(activeCard) {
      this.timeoutId = setTimeout(() => {
        this.setState({
          activeCard
        });
      }, 1000);
    }

    _clearActiveCard() {
      clearTimeout(this.timeoutId);
      this.setState({
        activeCard: null,
      });
    }

    render() {
      return (
        <Component
          handleActiveCard={this._handleActiveCard}
          clearActiveCard={this._clearActiveCard}
          {...this.props}
          {...this.state}
        />
      );
    }
  }

  return WithActiveCard;
};

export default withActiveCard;
