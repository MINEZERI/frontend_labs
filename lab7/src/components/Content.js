import React, {Component} from 'react';

class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hobbyStyle: {},
			bookStyle: {}
		};
	}
	
	getRandomHexColor = () => {
		return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
	}
	
	handleHobbyClick = () => {
		this.setState({
			hobbyStyle: {
				backgroundColor: this.getRandomHexColor(),
				color: this.getRandomHexColor()
			}
		});
	}
	
	handleBookClick = () => {
		this.setState({
			bookStyle: {
				backgroundColor: this.getRandomHexColor(),
				color: this.getRandomHexColor()
			}
		});
	}
	
	render() {
		return (
			<div className="content">
				<p>Дата та місце народження: 05.02.2006, м. Чернівці</p>
				
				<h4>Освіта</h4>
				<p>
					Гімназія №3 м. Чернівці<br/>
					Фаховий коледж ЧНУ ім. Юрія Федьковича м. Чернівці<br/>
					КПІ ім. Ігоря Сікорського м. Київ
				</p>
				
				<h4>Хобі</h4>
				<ul
					id="hobbies"
					onClick={this.handleHobbyClick}
					style={this.state.hobbyStyle}
				>
					<li>Дно айсбергу ск</li>
					<li>Казаки</li>
					<li>Дріп</li>
					<li>Фарм крипти як скуф</li>
				</ul>
				
				<h4
					className="books-title"
					onClick={this.handleBookClick}
					style={this.state.bookStyle}
				>
					Улюблені книги
				</h4>
				<ol>
					<li>Дежавю</li>
					<li>Шлях до успіху</li>
					<li>Біблія</li>
				</ol>
				
				<p>
					Впродовж віків Чернівці сформувались як місто з унікальною різностильовою архітектурою...
					(текст скорочено для зручності)
				</p>
			</div>
		);
	}
}

export default Content;