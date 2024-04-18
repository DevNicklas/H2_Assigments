import { useState } from 'react';

function Form() {

    const [inputData, setInputData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputData({ ...inputData, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${inputData.name}`);
        console.log(`Email: ${inputData.email}`);
    }
 
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter name" value={inputData.name} onChange={handleChange} required/><br/>
                <input type="email" name="email" placeholder="Enter email" value={inputData.email} onChange={handleChange} required/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
            <p></p>
        </div>
        
    );
}

export default Form