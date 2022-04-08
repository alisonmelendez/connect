import React from 'react';
import '../Modal/Modal.scss';

function Modal({ open, onClose }) {

    if(!open){
        return null
    }

        return (
            <div className="overlay">
                <div className="entireModal">
                    <p>I have stuff inside</p>

                    <form>
                        <label>
                            Event Name: <input type="text" name="name" />
                        </label>
                        <label>
                            Date: <input type="text" name="name" />
                        </label>
                        <label>
                            Time: <input type="text" name="name" />
                        </label>
                        <label>
                            Description: <textarea type="text" name="name" />
                        </label>
                        <label>
                            Image: <input type="text" name="name" />
                        </label>
                        <label>
                            Created By: <input type="text" name="name" />
                        </label>
                    <input type="submit" value="Submit" />
                    </form>
                    
                    <button onClick={onClose}> X </button>
                </div>
            </div>
        );
}

export default Modal;