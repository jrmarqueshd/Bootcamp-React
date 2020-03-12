import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
	state = {
		techs: ["NodeJS", "ReactJS", "React Native"],
		newTech: ""
	};

	handleRemove = tech => {
		this.setState({ techs: this.state.techs.filter(t => t !== tech) });
	};

	handleInputChange = e => {
		this.setState({ newTech: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		this.setState({
			techs: [...this.state.techs, this.state.newTech],
			newTech: ""
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h1>{this.state.newTech}</h1>
				<ul>
					{this.state.techs.map((tech, index) => (
						<TechItem
							key={tech + index}
							tech={tech}
							onDelete={() => this.handleRemove(tech)}
						/>
					))}
				</ul>

				<input
					type="text"
					onChange={this.handleInputChange}
					value={this.state.newTech}
				/>

				<button type="submit">Incluir</button>
			</form>
		);
	}
}

export default TechList;
