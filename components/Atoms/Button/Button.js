import PropTypes from "prop-types";
import Spinner from "../Spinner";

const Button = ({
  loading,
  className,
  submit,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      className={`${className || "rounded-lg border border-sky-950 bg-black py-2 px-6 text-center text-sm font-bold text-white transition hover:bg-sky-700 hover:text-sky-950 focus:outline-none focus:ring active:bg-sky-700 hover:enabled:scale-[1.05] hover:enabled:shadow-xl disabled:opacity-50"}`}
      type={submit ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.string,
  submit: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
