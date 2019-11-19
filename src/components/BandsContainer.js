import React, { Component } from "react";
import BandInput from "./BandInput";
import ACTIONS from "../reducers/actions";
import { connect } from "react-redux";
import Band from "./Band";

class BandsContainer extends Component {
  renderBands = bands =>
    bands.map(band => (
      <Band key={band.id} {...band} delete={this.props.delete} />
    ));

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />

        <ul>{this.renderBands(this.props.bands)}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: ACTIONS.ADD_BAND, name }),
  delete: id => dispatch({ type: ACTIONS.DELETE_BAND, id })
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
