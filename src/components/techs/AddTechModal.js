import React, { useState } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTech } from '../../actions/techActions';
import PropTypes from 'prop-types';


const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    

    const onSubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({html: 'Please Enter technicians first and last name'})
        } else {

            addTech({firstName, lastName});
            M.toast({html: `Added tech ${firstName} ${lastName}`});

            // Clear fields
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

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
}

export default connect(null, {addTech})(AddTechModal);
