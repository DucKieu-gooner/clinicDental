import Floor from './Floor';

	function Clinic(props) {    
		return (
			<div className="clinic-container">
				<div className='clinic-title-container' style={ {textAlign: 'left', marginLeft: 20 }}>
					<h1>{ props.clinic_name }</h1>
				</div>
				<div className='clinic-list-floors-container' style={ {display:'flex', justifyContent: 'center', padding: 20, flexDirection: 'column' }}>
					{ props.list_floors.map((floor) => <Floor floor_name={floor.floor_name} list_rooms={floor.list_rooms} key={floor.id} floor_id={floor.id}></Floor>) } 
				</div>                
			</div>
		);
	}

	export default Clinic;