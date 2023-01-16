import React from 'react';

const DataTable = (props) => {
    return (
        <div className='container'>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>

                <tbody>
                {
                    props.people.map( person => {
                        const row = (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.firstName} {person.lastName}</td>
                            </tr>
                        );
                        return row;
                    })
                   }

                </tbody>

            </table>
            
        </div>
    );
};

export default DataTable;