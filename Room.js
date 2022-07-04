function Room(props) {
    return (
      <div className="room-container" style={ {display:'flex', height: 200, width: 400, justifyContent: 'center', border: '1pt solid #E7E6E6', marginLeft: 10, alignItems: 'center', backgroundColor: props.room_status ? "green" : "#E7E6E6" }}>
          <a className='room-link' style={{ cursor: 'pointer' }} onClick={() => props.onClick()}>
              <div className="room-number">
                  <h2>{ props.room_number }</h2>
              </div>
          </a>
      </div>
    );
  }

  export default Room;