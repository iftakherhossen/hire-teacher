import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Teachers.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('./teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, []);

    const handleHireBtn = teacher => {
        
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
                <h1>Hired Teachers: {teachers.length}</h1>
                {
                    teachers.map(teacher => <Cart teacher={teacher}></Cart>)
                }
            </div>
        </div>
    );
};

export default Teachers;