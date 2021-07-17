import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';

import './styles.css';

export default function App() {
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const myRequest = async (url) => {
    console.log(url);
    console.log(formData);
    console.log(qs.stringify(formData));

    try {
      // const response = await axios.post(url);
      const response = await axios({
        method: 'POST',
        url,
        data: qs.stringify(formData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.clear();

    const id = '1PX6M1EZK6el-ScKSNVR0oFL1zw1yvXbiX3y7oYfw20Q';
    const formUrl = `https://docs.google.com/forms/d/${id}/formResponse`;

    myRequest(formUrl);
  };

  return (
    <div className='App'>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* <iframe
        title="Google Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScM9Y4DsKMBfgKnQ3PrhP04Y4us1CaUHM8M5aV-QTNLpIcGWw/viewform?embedded=true"
        width="640"
        height="943"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
      >
        Loading…
      </iframe> */}

      {/* <form
        method="POST"
        action="https://docs.google.com/forms/d/1PX6M1EZK6el-ScKSNVR0oFL1zw1yvXbiX3y7oYfw20Q/formResponse"
      >
        <input
          className="input"
          type="text"
          name="entry.2005620554"
          placeholder="Name"
        />
        <input
          className="input"
          type="email"
          name="entry.1045781291"
          placeholder="Email"
        />
        <input
          className="input"
          type="number"
          name="entry.1166974658"
          placeholder="Phone number"
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form> */}

      <form onSubmit={onSubmitHandler}>
        <input
          className='input'
          type='text'
          name='entry.2005620554'
          placeholder='Name'
          onChange={handleChange}
        />
        <input
          className='input'
          type='email'
          name='entry.1045781291'
          placeholder='Email'
          onChange={handleChange}
        />
        <input
          className='input'
          type='number'
          name='entry.1166974658'
          placeholder='Phone number'
          onChange={handleChange}
        />
        <button className='button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}
