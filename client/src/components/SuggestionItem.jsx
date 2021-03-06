import React from 'react';
import moment from 'moment';

class SuggestionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var time = moment.parseZone(this.props.event.time).local().format('MMMM Do YYYY @ h:mm a')
    var title = this.props.event.title.length > 55 ? this.props.event.title.substring(0,55) + '...' : this.props.event.title;
    var category = this.props.event.category.toLowerCase();
    return (
      <div className="eventSuggestionContainer">
        <div className="eventPhoto"><img src={this.props.event.photo} height={140.63} width={250}></img></div>
        <div className="eventTitle">{title}</div>
        <div className="eventTime">{time}</div>
        <div className="eventLocation">{this.props.event.location}</div>
        <div className="eventCategory">#{category}</div>
      </div>
    )
  }
}

export default SuggestionItem;