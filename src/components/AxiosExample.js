import React, { useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import Message from './Message';


const AxiosExample = () => {
    const API_URL = 'http://localhost:8080/api/v1/person';
    const [persons, setPersons] = useState([]);
    const [message, setMessage] = useState();


    const sendGetRequest = async () => {
        console.log("#### Start");

        // call backend apis
       await axios.get(API_URL).then(response => {
            console.log("RESPONSE: ", response);
            if(response.status === 200){
                console.log("Data:", response.data);
                setPersons(response.data);
                setMessage({value: 'get operation is done!', type: 'success'});

            }
        }).catch(error => {
            console.log("Error: ", error);
            if(error){
                setMessage({value: error.message, type: 'danger'});
            }
        })


        console.log("#### End");

    }


    return (
        <div className='container'>
            {/* render a message  */}
            <Message message={message} />

            <div className='card'>
                <div className='card-header bg-dark text-white'>
                    Example!: Call Get API
                </div>
                <div className='card-body'>
                    <button type='button' className='btn btn-info' onClick={sendGetRequest} >Get List</button>
                </div>
                <br/>
                <DataTable people={persons} />

                <div className='card-footer'></div>
            </div>
            
        </div>
    );

};

export default AxiosExample;