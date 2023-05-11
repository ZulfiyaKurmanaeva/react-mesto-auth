import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import useFormValidation from "../utils/useFormValidation.js";

function AddPlacePopup({
    isOpen,
    onClose,
    onOverlayClick,
    onAddPlace,
    onLoading,
}) {
    const { values, errors, isValid, handleChange, setValue, reset, formRef } =
        useFormValidation();

    useEffect(() => {
        setValue("name", "");
        setValue("link", "");
    }, [isOpen, setValue]);

    function handleSubmit(e) {
        e.preventDefault();
        if (isValid) {
            onAddPlace({ name: values.name, link: values.link });
        }
    }

    const onClosePopup = () => {
        onClose();
        reset();
    };

    return (
        <PopupWithForm
            title="Новое место"
            name="place"
            isOpen={isOpen}
            onClose={onClosePopup}
            onOverlayClick={onOverlayClick}
            onSubmit={handleSubmit}
            onLoading={onLoading}
            isValid={isValid}
            ref={formRef}
        >
            <input
                name="name"
                value={values["name"] ?? ""}
                type="text"
                onChange={handleChange}
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
                id="locate-name"
                className="popup__input popup__input_type_elements-title"
            />
            <span className="elements-title-error popup__input-error">{errors.name}</span>
            <input
                name="link"
                value={values["link"] ?? ""}
                type="url"
                onChange={handleChange}
                placeholder="Ссылка на картинку"
                required
                id="avatar-link"
                className="popup__input popup__input_type_elements-link"
            />
            <span className="elements-link-error popup__input-error">{errors.link}</span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;