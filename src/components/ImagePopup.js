function ImagePopup({
    card,
    isOpen,
    onClose,
    onOverlayClick,
    onTransitionEnd,
}) {
    return (
        <div
            className={`popup ${isOpen && "popup_opened"}`}
            onClick={onOverlayClick}
            onTransitionEnd={onTransitionEnd}
        >
            <div className="popup_type_big-picture ">
                <figure className="popup__picture-container">
                    <img src={card.link} alt={card.name} className="popup__big-picture" />
                    <figcaption className="popup__picture-caption">{card.name}</figcaption>
                </figure>
                <button
                    type="button"
                    className="popup__close popup__close-button"
                    onClick={onClose}
                ></button>
            </div>
        </div>
    );
}

export default ImagePopup;