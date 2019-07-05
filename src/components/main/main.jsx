import React from 'react';
import './main.scss';
import Card from '../card';
import SearchBar from '../searchBar';
/**
 * @author Mauricio ross
 * @name Main
 * @description Componente que contiene el main con searchbar y loading
 * @example <Main/>
 */
class main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			places: null,
			placesFilter: [],
			isLoading: false
		}
	}
	async componentDidMount() {
		const url = "https://boiling-mountain-49639.herokuapp.com/desafio-frontend";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ places: data, placesFilter: data })
	}
	/**
	 * @function filterPlaces
	 * @author Mauricio ross
	 * @description Funcion que filtra el contenido de sucursales.
	 */
	filterPlaces = (searchFilter) => {
		let placesFilter = this.state.places
		placesFilter = placesFilter.filter((place) => {
			let placeName = place.name.toLowerCase()
			return placeName.indexOf(
				searchFilter.toLowerCase()) !== -1
		})
		this.setState({
			placesFilter: placesFilter
		})
	}
	render() {
		return (
			<div>
				<SearchBar onChange={this.filterPlaces} />
				<div className="main">
					{this.state.isLoading || !this.state.places ? (
						<div className="loading">Loading</div>
					) : (
							<div>
								<div className="container">
									<div className="grid-container">
										{this.state.placesFilter.map(place =>
											<div className="grid-item" key={place.name}>
												<Card
													onChange={this.filterPlaces}
													name={place.name}
													lines={place.lines}
													online={place.online}></Card>
											</div>
										)}

									</div>
								</div>
							</div>
						)}
				</div>
			</div>
		);
	}
}
export default main;