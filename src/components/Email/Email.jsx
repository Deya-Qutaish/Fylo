import React from "react";
import "./Email.css";

const Email = () => {
  return (
    <div className="email__container">
      <form action="submit">
        <h1>Get early access today</h1>
        <p>
          it only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <input type="email" placeholder="email@example.com" />

        <button type="submit">Get Started For Free</button>
      </form>
    </div>
  );
};

export default Email;
