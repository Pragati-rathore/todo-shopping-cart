import React, { useState } from 'react';
import "../Style/contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, query, feedback } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!query.trim()) {
      errors.query = 'Query is required';
    }

    if (!feedback.trim()) {
      errors.feedback = 'Feedback is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Process the form submission or perform other actions
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className='contact'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div >
          <label>Name:</label>
          <input
          className='inputx'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div  >
          <label>Email:</label>
          <input
           className='inputx'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div  >
          <label>Query:</label>
          <input
          className='inputx'
            type="text"
            name="query"
            value={formData.query}
            onChange={handleInputChange}
          />
          {errors.query && <span className="error">{errors.query}</span>}
        </div>

        <div >
            <div>
            <label>Feedback:</label>
            </div>
         
          <textarea
          style={{height:"80px",width:"400px"}}
          className='inputx'
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
          />
          {errors.feedback && <span className="error">{errors.feedback}</span>}
        </div>

        <button  className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
