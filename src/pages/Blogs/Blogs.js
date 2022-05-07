import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <div className='blog'>
                <h5 className='text-info text-center'>Difference between Javascript and Node.js</h5>
                <table className='w-100' border='1px'>
                    <thead>
                        <tr>
                            <th className='text-center'>Javascript</th>
                            <th className='text-center'>Node.js</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Javascript is a popular programming language and it runs in any web browser with a good web browser.</td>
                            <td>Node.js is an interpreter and environment for the JavaScript with some specific useful libraries which JS programming can be used separately.</td>
                        </tr>
                        <tr>
                            <td>It is mainly used for any frontend development or client side activity for the web application.</td>
                            <td>It is generally used on the server-side.</td>
                        </tr>
                        <tr>
                            <td>IJavaScript can be run on any engine, including Spider Monkey, V8, and JavaScript Core.</td>
                            <td>It only runs in a V8 engine that is mainly used by Google Chrome.</td>
                        </tr>
                        <tr>
                            <td>It is designed to build network-centric applications.</td>
                            <td>It's designed for data-intensive real-time applications that run on several platforms.</td>
                        </tr>
                        <tr>
                            <td>All the JavaScript is not important to the node community.</td>
                            <td>IAll node projects represent the JavaScript community.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='blog mt-5'>
                <h5 className='text-info text-center'>Differences between sql and nosql databases.</h5>
                <table className='w-100' border='1px'>
                    <thead>
                        <tr>
                            <th className='text-center'>Sql databases</th>
                            <th className='text-center'>Nosql databases</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SQL databases are vertically scalable.</td>
                            <td>NoSQL databases are horizontally scalable.</td>
                        </tr>
                        <tr>
                            <td>SQL databases are primarily called as Relational Databases (RDBMS).</td>
                            <td>NoSQL database are primarily called as non-relational or distributed database. </td>
                        </tr>
                        <tr>
                            <td>These databases are best suited for complex queries.</td>
                            <td>These databases are not so good for complex queries.</td>
                        </tr>
                        <tr>
                            <td>SQL databases are better for multi-row transactions.</td>
                            <td>It is better for unstructured data like documents or JSON.</td>
                        </tr>
                        <tr>
                            <td>SQL is old and sometimes constraining.</td>
                            <td>NoSQL databases are new and flexible.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;