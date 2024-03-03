import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Register() {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [webUrl, setWebUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [gender, setGender] = useState('male');
    const [skills, setSkills] = useState([]);

    const handleSkillChange = (e) => {

        const selectedSkill = e.target.value;
        if (e.target.checked) {
            setSkills((prevSkills) => [...prevSkills, selectedSkill]);
        } else {
            setSkills((prevSkills) => prevSkills.filter((skill) => skill !== selectedSkill));
        }
    };

    const submitData = (eve) => {
        eve.preventDefault();
        let payload = { name, email, webUrl, imageUrl, gender, skills }
        setUsers([...users, payload])
        console.log(payload)
        // users.push(payload)
    }

    const clearData = (eve) => {
        eve.preventDefault();
        setName('')
        setEmail('')
        setWebUrl('')
        setImageUrl('')
        setGender('Options')
        setSkills([])
    }

    return (
        <div className='container w-100'>
            <h2 className='my-5 text-center'>Register</h2>
            <div className='row'>
                <div className="col-md-6">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={(ev) => setName(ev.target.value)} placeholder="Your Name" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-1">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} placeholder="Enter email" />
                            </Form.Group>

                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Website</Form.Label>
                            <Form.Control value={webUrl} onChange={(ev) => setWebUrl(ev.target.value)} placeholder="https://www.google.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control value={imageUrl} onChange={(ev) => setImageUrl(ev.target.value)} placeholder="Profile Image Url" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select value={gender} onChange={(ev) => setGender(ev.target.value)} >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3 d-inline-flex" id="formGridCheckbox">
                            <label>Skills:</label>
                            <Form.Check className='mx-4' type="checkbox" value="Java" checked={skills.includes("Java")} onChange={handleSkillChange} label="Java" />
                            <Form.Check className='mx-1' type="checkbox" value="Html" checked={skills.includes("Html")} onChange={handleSkillChange} label="Html" />
                            <Form.Check className='mx-5' type="checkbox" value="CSS" checked={skills.includes("CSS")} onChange={handleSkillChange} label="CSS" />
                        </Form.Group> <br />

                        <Button onClick={submitData} variant="btn btn-success mx-5" type="submit">
                            Enroll Student
                        </Button>
                        <Button onClick={clearData} variant="btn btn-danger mx-1" type="submit">
                            Clear
                        </Button>
                    </Form>

                </div>
                <div className="col-md-6">
                    {
                        users.map((val, key) =>

                            <div className="card mb-3" key={key}>
                                <div className="row g-0 align-items-center p-2">
                                    <div className="col-md-4">
                                        <img src={val.imageUrl} className="img-thumbnail" alt="..." />
                                    </div>
                                    <div className="col-md-8 p-2">
                                        <div className="card-body">
                                            <h5 className="card-title">{val.name}</h5>
                                            <p className="card-text">Gender : {val.gender}</p>
                                            <p>Skills : </p>
                                            <ul className="list-group">
                                                {
                                                    val.skills.map((v, k) => <li key={k} className="list-group-item">{v}</li>)
                                                }


                                            </ul>
                                            <p className="card-text pt-3"><small className="text-body-secondary">{val.email} - <a href={val.webUrl}>Visit Us</a></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}