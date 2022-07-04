import { io } from 'socket.io-client';
	import Room from './Room';

	function Floor(props) {
		const socket = io('http://localhost:3000/', {transports: ['websocket']});       

		const handleClick = function(room){        
			const newData = JSON.parse(JSON.stringify(props.list_rooms));
			let currentRowToChange = newData.find((r => r.id === room.id));
			currentRowToChange.room_status = !currentRowToChange.room_status;

			socket.emit("roomChange", { list_rooms: newData, id: props.floor_id }, function(data){
				console.log(data);
			});
		}

		return (
			<div className="floor-container" style={ {borderBottom: '1pt dashed red', padding: 20, paddingTop: 0 }}>
				<div className='floor-title-container' style={ {textAlign: 'left', marginLeft: 20 }}>
					<h1>{ props.floor_name }</h1>
				</div>
				<div className='floor-list-rooms-container' style={ {display:'flex', justifyContent: 'center', border: '1pt solid black', padding: 20 }}>
					{ props.list_rooms.map((room) => <Room room_number={room.room_name} room_status={room.room_status} onClick={() => handleClick(room)} key={room.id}></Room>) } 
				</div>                
			</div>
		);
	}

	export default Floor;