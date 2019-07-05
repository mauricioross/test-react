import React from 'react';
import './searchBar.scss';
/**
 * @author Mauricio ross
 * @name SearchBar
 * @description Componente que contiene el searchbar el cual captura texto para filtrar en su padre elementos listados.
 * @example <SearchBar onChange={this.filterPlaces} />
 */
class searchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			placeToSearch: ''
		}
	}
	/**
	 * @function handleChange
	 * @author Mauricio ross
	 * @description Funcion que es ejecutada cuando se hacen cambios en el elemento input, ejecuta una funcion del padre: onChange()
	 */
	handleChange = (e) => {
		this.setState({
			placeToSearch: e.target.value
		})
		this.props.onChange(e.target.value);
	}
	render() {
		return (
			<div className="searchbar">
				<input type="text" placeholder="Buscar sucursal"
					value={this.state.placeToSearch}
					onChange={this.handleChange} />
			</div>
		);
	}
}
export default searchBar;