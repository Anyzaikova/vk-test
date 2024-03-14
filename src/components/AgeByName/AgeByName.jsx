import * as yup from 'yup';
import './AgeByName.css';
import React, {useState, useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";


const apiRef='https://api.agify.io/?name=';

const AgeByName = () => {
    const [name, setName] = useState ('');
    const [age, setAge] = useState (null);
    const nameMap = useRef (new Map ());
    const nameRef = useRef ('');
    let timeoutId;
    const schema = yup.object ().shape ({
        name: yup.string ().required ('Введите имя').matches (/^[A-Za-z]+$/,
            'Имя должно содержать только английские буквы')
    });
    const {register, handleSubmit, formState: {errors}} = useForm (
        {
            resolver: yupResolver (schema),
        }
    );

    useEffect (() => {
        timeoutId = setTimeout (() => {
            if (nameRef.current !== '' && nameRef.current === name) {
                send (nameRef.current);
            }
        }, 3000);

        return () => clearTimeout (timeoutId);
    }, [name]);

    const onSubmit = (data) => {
        send (data.name);
    }

    function send (name) {
        const curAge = nameMap.current.get (name);
        if (curAge !== undefined) {
            setAge (curAge);
        } else {
            fetch (apiRef + name)
                .then (response => response.json ())
                .then (json => {
                    setAge (json.age);
                    nameMap.current.set (name, json.age);
                })
                .catch (error => console.error (error));
        }
        clearTimeout (timeoutId);
    }

    const handleInputChange = (e) => {
        setName (e.target.value);
        nameRef.current = e.target.value;
    }

    return (
        <div className='age_by_name'>
            <p className='age_by_name_heading'>Введи имя,  чтобы узнать возраст </p>
            <form className='age_by_name_form' onSubmit={handleSubmit (onSubmit)}>
                <input
                    type='text'
                    {...register ('name')}
                    onChange={handleInputChange}
                />
                {errors.name && <p>{errors.name.message}</p>}
                <div>{age !== null ? `Возраст: ${age}` : ""}</div>
                <button type="submit" className='age_by_name_btn'>Получить возраст</button>
            </form>
        </div>

    )
}

export default AgeByName;
