import React from 'react';
import DayListItem from 'components/DayListItem';

//Render a list of DayListItem components
export default function DayList(props) {
  //days is an array of day objects [{id, name, spots}]
  //day is a string, currently selected day
  //setDay function that can accepts as an input the name of the day

  const schedule = props.days.map(dayObj => {    
    return (
      <DayListItem
        key={dayObj.id}
        name={dayObj.name}
        spots={dayObj.spots}
        selected={dayObj.name === props.day}
        setDay={props.setDay} />         
    )
  })
  return <ul>{schedule}</ul>
}