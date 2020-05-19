import React from 'react'

const Form = (props) => {
    const { values, onInputChange, onSubmit} = props

    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-submit'>
                <h2>Add a Team Member</h2>
                <button>Submit</button>
            </div>

            <div className='form-inputs'>
                <h4>Member Info</h4>
                <label>Name:&nbsp;
                    <input 
                        type='text' 
                        placeholder='Type name here'
                        maxLength='30'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                    />
                </label>
                <label>Email:&nbsp;
                    <input 
                        type='text' 
                        placeholder='Type email'
                        maxLength='30'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>
                <label>Role:&nbsp;
                    <select name='role' value={values.role} onChange={onInputChange}>
                        <option value=''>Select a Role</option>
                        <option value='Server'>Server</option>
                        <option value='Host'>Host</option>
                        <option value='Busser'>Busser</option>
                        <option value='Manager'>Manager</option>
                    </select>
                </label>
            </div>
        </form>
    )
}

export default Form 