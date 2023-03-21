import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => {
    return (
      <button
        key={nanoid()}
        onClick={() => {
          onLeaveFeedback(option);
        }}
        type="button"
      >
        {option}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
