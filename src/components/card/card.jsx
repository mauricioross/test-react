import React from 'react';
import './card.scss';
import Usericon from '../../assets/svg/usericon';
import Clockicon from '../../assets/svg/clockicon';
/**
 * @author Mauricio ross
 * @name 
 * @description Componente que contiene el modelo para Card utilizados en este ejemplo, estos tienen un cuerpo con title, body y footer
 * @example <Card
				onChange={this.filterPlaces}
				name={place.name}
				lines={place.lines}
				online={place.online}>
			</Card>
 */
class card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	/**
	 * @author Mauricio Ross
	 * @function totalWaiting
	 * @description Funcion que retorna el total de personas en espera de una sucursal, suma todos sus modulos.
	 */
	totalWaiting = (props) => {
		let total = 0;
		const lines = this.props.lines;
		for (var property in lines) {
			total += lines[property].waiting;
		}
		return total;
	}
	/**
	 * @author Mauricio Ross
	 * @function avarageTime
	 * @description Funcion que retorna tiempo promedio de espera en una sucursal a partir de todos sus modulos 
	 * y los retorna con formato HH:mm:ss segun especificaciones
	 * @returns 00:02:42
	 */
	avarageTime = (props) => {
		let total = 0;
		let times = 0;
		const lines = this.props.lines;
		for (var property in lines) {
			total += lines[property].elapsed;
			times++;
		}

		let time = new Date((total / times) * 1000).toISOString().substr(11, 8)
		return time;
	}
	render() {
		return (
			<div className={"card " + (this.props.online ? 'card--online' : 'card--offline')}>
				<div className="card-title">{this.props.name}</div>
				<div className="card-body">
				</div>
				<div className="card-footer">
					<Usericon width={22} /> {this.totalWaiting(this.props)}
					<Clockicon width={22} />  {this.avarageTime(this.props)}
				</div>
			</div>
		);
	}
}
export default card;