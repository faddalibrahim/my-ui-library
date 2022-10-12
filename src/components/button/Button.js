// libraries
import PropTypes from "prop-types";

//styles
import ButtonStyles from "./button.module.css";

const Button = ({ onClick, children, style }) => {
  return (
    <button
      onClick={(e) => {
        setTimeout(() => e.target.blur(), 300);
        onClick?.();
      }}
      className={ButtonStyles.button}
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Button.defaultProps = {
  children: "text",
  style: {},
};

export default Button;
