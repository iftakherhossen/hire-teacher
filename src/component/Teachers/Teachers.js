import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Teachers.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, []);


    const handleHireBtn = (teacher) => {
        const newCart = [...cart, teacher];
        setCart(newCart);
    }

    return (
        <div className="wrapper">
            <div className="teachers-wrapper">
                {
                    teachers.map(teacher => <Teacher
                        teacher={teacher}
                        key={teacher.id}
                        handleHireBtn={handleHireBtn}
                    ></Teacher>)
                }
            </div>
            <div className="cart-wrapper">
                <Cart cart={cart} teacher={teachers}></Cart>
            </div>
        </div>
    );
};

export default Teachers;