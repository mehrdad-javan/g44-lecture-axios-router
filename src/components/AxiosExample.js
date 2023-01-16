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

    const sendPostRequest = async () => {
        const data = {firstName: 'Test', lastName: 'test', email: 'test@test.se', title: 'TEST'};

       await axios.post(API_URL, data)
        .then(response => {
            console.log("RESPONSE:", response);
            if(response.status === 201){
                setMessage({value: 'post operation is done!', type: 'success'});
                sendGetRequest();
            }

        })
        .catch(error => {
            console.log("Error: ", error);
            if(error){
                setMessage({value: error.message, type: 'danger'});
            }
        });


    }

    const sendDeleteRequest = async () => {
        const id = 8;

        await axios.delete(API_URL+ '/' + id).then(response=> {
            if(response.status === 204){
                setMessage({value: 'delete operation is done!', type: 'success'});
                sendGetRequest();
            }

        }).catch(error=> {
            console.log("Error: ", error);
            if(error){
                setMessage({value: error.message, type: 'danger'});
            }
        });

    }

    const sendPutequest = async () => {
        const data = {id: 7, firstName: 'Simon', lastName: 'Elbrink', email: 'test@test.se', title: 'TEST'};

        await axios.put(API_URL, data)
        .then(response => {
            if(response.status === 204){
                setMessage({value: 'update operation is done!', type: 'success'});
                sendGetRequest();
            }

        }).catch( error => {
            console.log("Error: ", error);
            if(error){
                setMessage({value: error.message, type: 'danger'});
            }
        });

    }

    return (
        <div className='container'>
            {/* render a message  */}
            <Message message={message} />

            <div className='card'>
                <div className='card-header bg-dark text-white'>
                    Example1: Call Get API
                </div>
                <div className='card-body'>
                    <button type='button' className='btn btn-info' onClick={sendGetRequest} >Get List</button>
                </div>
                <br/>
                <DataTable people={persons} />

                <div className='card-footer'></div>
            </div>
            
            <br/>

            <div className='card'>
                <div className='card-header bg-dark text-white'>
                    Example2: Call Post API
                </div>
                <div className='card-body'>
                    <button type='button' className='btn btn-success' onClick={sendPostRequest} >Register Person</button>
                </div>
                <br/>

                <div className='card-footer'></div>
            </div>

            <br/>

            <div className='card'>
                <div className='card-header bg-dark text-white'>
                    Example3: Call Delete API
                </div>
                <div className='card-body'>
                    <button type='button' className='btn btn-danger' onClick={sendDeleteRequest} >Delete Person</button>
                </div>
                <br/>

                <div className='card-footer'></div>
            </div>


            <br/>

            <div className='card'>
                <div className='card-header bg-dark text-white'>
                    Example4: Call Put API
                </div>
                <div className='card-body'>
                    <button type='button' className='btn btn-warning' onClick={sendPutequest} >Update Person</button>
                </div>
                <br/>

                <div className='card-footer'></div>
            </div>
        </div>
    );

};

export default AxiosExample;