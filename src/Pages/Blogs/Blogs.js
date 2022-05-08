import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container faq mt-3'>
            <h1 style={{ color: 'teal' }}>FAQ Blog Section</h1>
            <div className='container typeOne' style={{ backgroundColor: '#bae5d5bd' }}>
                <h3>Difference between javascript and node js?</h3>
                <p>Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage.On the contrairy NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side.Nodejs allows Javascript code to run outside the browser but Javascript can only be run in the browsers.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. On the other hand, Node JS is only supported by the V8 engine which is google's chrome specific.Javascript  was introduced by Brendan Eich in 1995 and Node.js was developed and introduced by Ryan Dahl in 2009.</p>
            </div>
            <div className='container' style={{ backgroundColor: "#d7acd4ad" }}>
                <h3>When should you use nodejs and when should you use mongodb?</h3>
                <p>When a Javascript project needs a programming environment and a runtime library that offers basic programming tools/support and can compile and/or interpret your code then you need Nodejs.If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, you need a database.MongoDB is the document oriented database. MongoDB stores a lot of data in JSON format and its performance is much faster than any RDBMS.So  MongoDB is a database where we can store data and NodeJS helps us to connect our client site to database by it's server site.</p>
            </div>
            <div className='container' style={{ backgroundColor: "#eec2c2" }}>
                <h3>Differences between sql and nosql databases?</h3>
                <p>SQL Databases are categorized as Relational Database Management System (RDBMS).On other hand,NoSQL databases are categorized as Non-relational or distributed database system.SQL databases have fixed or static or predefined schema but NoSQL databases have dynamic schema.SQL databases are vertically scalable whereases NoSQL databases are horizontally scalable.SQL is not suited for hierarchical data storage but NoSQL is best suited for hierarchical data storage.SQL follows ACID(Atomicity, Consistency,Isolation,Durability) property and NoSQL follows CAP(Consistency, Availability, Partition tolerance)property.MongoDB, BigTable, Redis, RavenDB, Cassandra, Hbase, Neo4j, CouchDB etc. are the example of NoSQL database whereases MySQL, Oracle, Sqlite, PostgreSQL and MS-SQL etc. are the example of SQL database.</p>
            </div>
            <div className='container' style={{ backgroundColor: "#f2f2b0" }}>
                <h3>What is the purpose of jwt and how does it work?</h3>
                <p>JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between client and server site.It is a JSON object and digital signed method  to encrypt authentication key.JWT is usefull for both authentication and information exchange.In its compact form, JSON Web Tokens consist of three parts separated by dots which are Heade,Playload and Signature.</p>

                <p>Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the authorization header using the bearer schema.When a user logs in to an application with a username and password, or otherwise proves his/her identity.Then the server confirms his/her identity and sends back an access token containing a reference to the user.Then the client includes this access token with every request to the server.The server's protected routes will check for a valid JWT in the authorization header, and if it is present, the user will be allowed to access protected resources.
                    One of the greatest advantages of this approach is that it is stateless. It doesn’t require the client or the REST server to maintain sessions. Indeed, no database lookup is required at all to verify the identity of the requesting user.</p>
            </div>
        </div>
    );
};

export default Blogs;