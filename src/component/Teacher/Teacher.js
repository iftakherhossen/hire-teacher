import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Teacher.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const Teacher = (props) => {
    const { name, subject, salary, url, degree, university } = props.teacher;
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} className="icon" />;
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} className="icon" />;
    const plusIcon = <FontAwesomeIcon icon={faPlus} />;

    return (
        <div className="teacher">
            <Row xs={1} md={2} lg={3}>
                {Array.from({ length: 1 }).map(() => (
                    <Col>
                        <Card className="card">
                            <Card.Img variant="top" src={url} alt="Teacher" className="teacher-img" />
                            <Card.Body>
                                <Card.Title><h1>{name}</h1></Card.Title>
                                <Card.Text>
                                    <h2 className="txt"><strong>{subject} <small>({degree}, {university})</small></strong></h2>
                                    <h2 className="txt">Salary: {salary}</h2>
                                    <div className="btn-wrapper">
                                        <div className="sm-icon">
                                            <a href="https://www.facebook.com/hosseniftakher">{facebookIcon}</a>
                                            &nbsp; &nbsp;
                                            <a href="https://www.instagram.com/hossen_iftakher/">{instagramIcon}</a>
                                        </div>
                                        <div>
                                            <button onClick="() => props.handleHireBtn(props.teacher">{plusIcon} Hire Now</button>
                                        </div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Teacher;