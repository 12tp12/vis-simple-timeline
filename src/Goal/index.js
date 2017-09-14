import {default as React} from 'react';
import './styles.css';


class Goal extends React.Component{
	render(){
		let {group} = this.props; 
		return (
			<div className="container">
				<label>{group.content}</label>
			</div>
		);
	}
}

export default Goal;
