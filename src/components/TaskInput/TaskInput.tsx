import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './TaskInput.module.css';

function Input({ type = "text", theme = "", unique = "", initValue = "", name = "", autofocus = false, ...props }: TaskInputProps) {
    const [value, change] = useState(initValue);

    // Обработчик изменений в поле
    const callbacks = {
        onChange: useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
            change(event.target.value);
            props.onChange(event.target.value);
        }, [change, props.onChange, value]),

        onSubmit: useCallback((e: React.FormEvent<HTMLFormElement>) => {
            props.onSubmit(e);
            change("");
        }, [props.onSubmit])
    };

    // Обновление стейта, если передан новый value
    useEffect(() => {
        change(initValue);
    }, [initValue]);

    return (
        <form onSubmit={callbacks.onSubmit} className={styles.form}>
            <input
                className={cn(unique, theme)}
                name={name}
                value={value}
                type={type}
                placeholder={props.placeholder}
                onChange={callbacks.onChange}
                autoFocus={autofocus}
                maxLength={props.maxLength}
            />
        </form>
    );
}

interface TaskInputProps {
    initValue?: string,
    type?: string,
    name?: string,
    placeholder?: string,
    onChange: (value: string) => void,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    theme?: string,
    unique?: string,
    autofocus?: boolean,
    maxLength?: number,
}

export default React.memo(Input);
