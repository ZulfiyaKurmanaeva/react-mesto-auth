function InfoTooltip({
    name,
    isOpen,
    registered,
    onClose,
    onOverlayClick,
    onTransitionEnd,
}) {
    return (
        <div
            className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}
            onClick={onOverlayClick}
            onTransitionEnd={onTransitionEnd}
        >
            <div className="popup__container">
                <div className="popup__tooltip-content">
                    <img
                        className="popup__tooltip-image"
                        src={
                            registered
                                ? require("../images/success.png")
                                : require("../images/failed.png")
                        }
                        alt="статус отправки формы"
                    />
                    <h2 className="popup__title popup__tooltip-title">
                        {registered
                            ? "Вы успешно зарегистрировались!"
                            : `Что-то пошло не так!
  Попробуйте ещё раз.`}
                    </h2>
                </div>

                <button
                    type="button"
                    className="popup__close-button"
                    onClick={() => {
                        onClose(true);
                    }}
                ></button>
            </div>
        </div>
    );
}

export default InfoTooltip;