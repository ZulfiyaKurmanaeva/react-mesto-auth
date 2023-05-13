function InfoTooltip({ name, isOpen, registered, onClose, onOverlayClick }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`} onClick={onOverlayClick}>
            <div className="popup__container">
                <div className="popup__tooltip-content">
                    <img className="popup__tooltip-image"
                        src={
                            registered
                                ? require("../images/success.png")
                                : require("../images/failed.png")
                        }
                    />
                    <h2 className="popup__title popup__tooltip-title">
                        {registered
                            ? "Вы успешно зарегистрировались!"
                            : `Что-то пошло не так! Попробуйте ещё раз.`}
                    </h2>
                </div>

                <button type="button" className="popup__close-button" onClick={() => { onClose(true); }} />
            </div>
        </div>
    );
}

export default InfoTooltip;