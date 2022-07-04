import './App.css';
	import { io } from 'socket.io-client';
	import Clinic from './Components/ClinicOverview/Clinic';
	import { useEffect, useState } from 'react';

	function App() {
	  const [listFloors, setListFloors] = useState([]);
	  const socket = io('http://localhost:3000/', {transports: ['websocket']});


	  socket.emit("getFloors", {}, (res) => {
		console.log(res);
		if (listFloors.length === 0)
		  setListFloors(res);
	  });

	  useEffect(() => {
		socket.on("roomChange", (data) => {
		  setListFloors(prevData => {
			const newData = JSON.parse(JSON.stringify(prevData));
			newData.forEach(element => {
			  if (element.id === data.id)
				element.list_rooms = data.list_rooms;
			});
			return newData;
		  });
		});
	  })
	  
	  return (
		<div className="App">
		  <Clinic clinic_name="Phòng khám Răng hàm mặt Anh Đức" list_floors={listFloors}></Clinic>
		</div>
	  );
	}

	export default App;