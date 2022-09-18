import React from 'react';
import { useParams } from 'react-router-dom';

const NewTeamForm = () => {
    let { newt } = useParams();
    console.log(useParams());
    console.log('NewTeamForm');
    return (
        <div>
            NewTeamForm
        </div>
    );
}

export default NewTeamForm;