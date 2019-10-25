import React, { Component } from "react";
import BandInput from "./BandInput";

import { connect } from "react-redux";
import Band from "./Band";

class BandsContainer extends Component {
	render() {
		return (
			<div>
				<BandInput addBand={this.props.addBand} />
				{this.props.bands.map(band => (
					<Band band={band} removeBand={this.props.removeBand} key={band.id} />
				))}
			</div>
		);
	}
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
	addBand: name => dispatch({ type: "ADD_BAND", name: name }),
	removeBand: id => dispatch({ type: "DELETE_BAND", id: id }),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(BandsContainer);
