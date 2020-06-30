import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';


const AddTechModal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    

    const onSubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({html: 'Please Enter technicians first and last name'})
        } else {
            console.log(firstName, lastName);
            setFirstName('');
            setLastName('');
        }
    }

    return (
        <div id="add-tech-modal" className="modal"> 
            <div className="modal-content">
                <h4>Add Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstname" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        <label htmlFor="firstname" className="active">First Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="lastname" value={lastName} onChange={e => setLastName(e.target.value)}/>
                        <label htmlFor="lastname" className="active">Last Name</label>
                    </div>
                </div>
            </div>

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect cyan lighten-3 waves-light btn">Enter</a>
            </div>
        </div>
    )
}

export default AddTechModal;
