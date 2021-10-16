import React from "react";
import s from "../FeedbackOptions/FeedbackOptions.module.css";
import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.btn__list}>
      {options.map((option) => {
        return (
          <li className={s.btn__item} key={option}>
            <button
              className={s.btn__feedback}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
