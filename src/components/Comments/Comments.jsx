import React from "react";
import "./Comments.css";
import CommentsArray from "./CommentsArray";
import quotes from "../../images/bg-quotes.png";

const Comments = () => {
  return (
    <div>
      <img className="quotes" src={quotes} alt="quotes" />
      <div className="comments__container">
        {CommentsArray.map((comment) => (
          <div>
            <p>{comment.p}</p>
            <div className="comments__container-profile">
              <img src={comment.img} alt={comment.name} />
              <div>
                <h6>{comment.name}</h6>
                <p>Founder & CEO, huddle</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
