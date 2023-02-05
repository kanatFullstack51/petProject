import React, { useEffect, useState } from 'react';
import { BASE_URL, NAME_URL } from '../consts/baseUrl';
import '../App.css'
function Seatstable() {
    // STATES
    const [names, setNames] = useState([])
    const [seats, setSeats] = useState([])
    // 
    // URLS
    const nameUrl = NAME_URL
    const seatUrl = BASE_URL
    // 
    // FUNCTIONS
    // AVATARS
    const getApi = () => {
        fetch(nameUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setNames(json)
            })
    }
    // 
    // TABLES
    const getSeats = () => {
        fetch(seatUrl)
            .then((response) => response.json())
            .then((json) => {
                setSeats(json)
            })
    }
    // 
    // USEEFFECT
    useEffect(() => {
        getSeats();
        getApi();

    }, [])


// TYPES FROM BACK || CLASSES
    const typesAndclasses = {
        "desk": "desk",
        "pillar": "pillar",
        "table": "table"
    }
    // 

    return (

        <div className="container">
            {
                seats.map((item) => {
                    const users = names.filter((user) => user.object_id === item.id)

                    return (
                        <div className='object_tables' style={ { left: item.left, top: item.top, transform:`rotate(${item.angle}deg)`} } key={ item.type }>
                            <div className={ typesAndclasses[item.type]}>
                            { users.map((user) => (
                                <div key={ user.id } >

                                    <img src={ user.avatar } className="forAv" alt="" />
                                    
                                </div>
                            )) }
                            </div>
                          
                        </div>
                    )
                }

                )
            }
        </div>
        
    );
}

export default Seatstable;




