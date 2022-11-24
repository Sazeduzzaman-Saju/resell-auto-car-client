import React from 'react';
import PrimaryButton from '../../comps/PrimaryButton/PrimaryButton';
import blogImage from './Blog post-amico.svg';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center mt-5 mb-5'>
                    <div className='col-lg-5 col-md-6 col-sm1'>
                        <div className=''>
                            <h1 className='fw-bold primary-color'>Welcome To Our Your Professional Blog Community</h1>
                            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero, dolor nisi natus laudantium voluptate laboriosam alias suscipit reprehenderit vel aperiam earum, culpa quis id, excepturi repellat quos at. Nisi odio illo asperiores, aspernatur eos placeat neque sapiente nostrum quasi laborum culpa amet itaque totam laboriosam. Eveniet vero placeat modi.</p>
                            <PrimaryButton>Contact Us</PrimaryButton>
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-6 col-sm1 mt-5'>
                        <div>
                            <img src={blogImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row '>
                    <div className='text-center mb-3'>
                        <h1 className='primary-color fw-bold'>Question?</h1>
                    </div>
                    <div className='col d-flex justify-content-center'>

                        <div className='w-50 mb-5'>
                            <Accordion defaultActiveKey={['0']} alwaysOpen className="accordion" data-aos="fade-left" data-aos-duration="3000">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What are the different ways to manage a state in a React application?</Accordion.Header>
                                    <Accordion.Body>
                                        We have to set initial state value inside constructor function and set click event handler of the element upon which click, results in changing state. Then pass the function to the click handler and change the state of the component inside the function using setState.There are four main types of state you need to properly manage in your React apps:
                                        <ul>
                                            <li>Local state</li>
                                            <li>Global state</li>
                                            <li>Server state</li>
                                            <li>URL state</li>
                                        </ul> web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos..
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How does prototypical inheritance work?</Accordion.Header>
                                    <Accordion.Body>
                                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What is a unit test? Why should we write unit tests? </Accordion.Header>
                                    <Accordion.Body>
                                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>React vs. Angular vs. Vue?</Accordion.Header>
                                    <Accordion.Body>
                                        <strong>React :</strong>
                                        React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework. <br />
                                        <strong>Angular :</strong>
                                        In this article, I’m discussing Angular 2, and not the first version of the framework which is now known as AngularJS.  <br />                                      <strong>Vue :</strong>
                                        The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                                    <Accordion.Body>
                                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                            <div className='d-flex justify-content-center align-items-center mt-5'>
                                <PrimaryButton>Contact Us</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;