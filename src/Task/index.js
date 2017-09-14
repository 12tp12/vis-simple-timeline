import {default as React} from 'react';
import './styles.css';


class Task extends React.Component{
	render(){
		let {item} = this.props; 
		return (
			<div className="container">
				<label>{item.content}</label>
			</div>
		);
	}
}

export default Task;
