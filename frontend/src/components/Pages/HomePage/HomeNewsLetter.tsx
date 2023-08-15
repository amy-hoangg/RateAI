import React, { useState } from 'react';
import subscribeService from '../../../service/subscribeService';
import { TypeSubscriber } from '../../../types';

const HomeNewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newSubscriber: TypeSubscriber = {
      subcriber_email: email
    };

    try {
      await subscribeService.subscribe(newSubscriber);
      console.log('Subscribing email:', email);
    } catch (error) {
      console.error('Error subscribing:', error);
    }
    setEmail('');
  };

  return (
    <div>
      <h2>SIGN UP FOR THE NEWSLETTER</h2>
      <p>Subscribe for the latest stories and promotions</p>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your e-mail address
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your e-mail address"
            required
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default HomeNewsLetter;
