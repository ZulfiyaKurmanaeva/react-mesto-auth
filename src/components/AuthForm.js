import { Link } from "react-router-dom";
import { forwardRef } from "react";

const AuthForm = forwardRef(
    ({ title, name, onLoading, buttonText, buttonTextOnLoading, linkText = "", handleSubmit, isValid, children },
        ref) => {
        return (
            <div className="auth-form">
                <form
                    className="auth-form__item"
                    name={name}
                    onSubmit={handleSubmit}
                    action="#"
                    ref={ref}
                    noValidate
                >
                    <h2 className="auth-form__title">{title}</h2>
                    {children}
                    <button
                        type="submit"
                        className={`auth-form__button ${!isValid && "auth-form__button_disabled"}`}
                    >
                        {isValid && onLoading ? buttonTextOnLoading : buttonText}
                    </button>
                    <Link to="/sign-in" className="auth-form__link">
                        {linkText}
                    </Link>
                </form>
            </div>
        );
    }
);

export default AuthForm;