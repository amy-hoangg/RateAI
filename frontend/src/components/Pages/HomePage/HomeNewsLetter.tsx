import React, { useState } from 'react';

const HomeNewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic to subscribe the email here
    console.log('Subscribing email:', email);
  };

  return (
    <div>
      <h2>SIGN UP FOR THE NEWSLETTER</h2>
      <p>Subscribe for the latest stories and promotions</p>
      <form onSubmit={handleSubmit}>
          Enter your e-mail address
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your e-mail address"
            required
          />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default HomeNewsLetter;
