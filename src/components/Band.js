import React, { Component } from "react";

class Band extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						{this.props.band.name}
						<button onClick={() => this.props.removeBand(this.props.band.id)}>
							DELETE
						</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default Band;
