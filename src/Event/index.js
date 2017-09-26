import {default as React} from 'react';
import './styles.css';
import FaHospitalO from 'react-icons/lib/fa/hospital-o';
import FaPhone from 'react-icons/lib/fa/phone';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaSmileO from 'react-icons/lib/fa/smile-o';
import FaFrownO from 'react-icons/lib/fa/frown-o';

const iconComponentByType = {
	"Hospital": FaHospitalO,
	"Message" : FaEnvelope,
	"Phone" : FaPhone
};

const voteByType = {
	"Up" : FaSmileO,
	"Down" : FaFrownO
}

const defaultIcon = () => (<i></i>);

const formatDate = (date) => {
	let dateParsed = `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear().toString().substring(2)}`;
	let timeParsed = `${date.getHours()}:${date.getMinutes()}`;
	return `${dateParsed} ${timeParsed}`;
}

class Event extends React.Component{
	render(){
		let {item, item:{content}} = this.props;
		let {type = ""} = content;
		let {vote = ""} = content; 
		let Icon = iconComponentByType[type] || defaultIcon;
		let VoteIcon = voteByType[vote] || defaultIcon;
		return (
			<div className="display-item-container">
				<div className="display-item-header">
					{formatDate(item.start)}
				</div>
				<div className="display-item-body">
					<Icon className="item-icon-style"/>
					<VoteIcon 
						className="emoji-icon-style" 
						style={{color: vote=="Up"?"#2E7D32":"#c62828"}}
					/>
				</div>
				<EventInfo info={content.eventInfo || []}/>
			</div>
		);
	}
	
}

export default Event;
