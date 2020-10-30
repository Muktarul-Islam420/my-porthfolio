import React from 'react';
import BlogMain from '../BlogMain/BlogMain';

const Blog = () => {
    const MyBlogs = [{
        id: '1',
        name: 'HTML',
        description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript....',
        image: 'https://img.techpowerup.org/201030/html.jpg',
        webLink: 'https://medium.com/muktarul-khan-akash/introduction-with-javascript-2613247359b0'
    },{
        id: '2',
        name: 'CSS',
        description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript....',
        image: 'https://img.techpowerup.org/201030/css.jpg',
        webLink: 'https://medium.com/muktarul-khan-akash/introduction-with-javascript-2613247359b0'
    },{
        id: '3',
        name: 'JavaScript',
        description: 'JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions....',
        image: 'https://img.techpowerup.org/201030/js.jpg',
        webLink: 'https://medium.com/muktarul-khan-akash/introduction-with-javascript-2613247359b0'
    },{
        id: '4',
        name: 'React JS',
        description: 'React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies....',
        image: 'https://img.techpowerup.org/201030/react.jpg',
        webLink: 'https://medium.com/muktarul-khan-akash/introduction-with-javascript-2613247359b0'
    },{
        id: '5',
        name: 'Bootstrap',
        description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components....',
        image: 'https://img.techpowerup.org/201030/bootstrap.jpg',
        webLink: 'https://medium.com/muktarul-khan-akash/introduction-with-javascript-2613247359b0'
    },{
        id: '6',
        name: 'Node JS',
        description: 'Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts....',
        image: 'https://img.techpowerup.org/201030/nodejs.jpg',
        webLink: 'https://medium.com/muktarul-khan-akash/introduction-with-javascript-2613247359b0'
    }

]
    return (
        <div>
            <h1 className="my-blog">My Blog</h1>
            <div className="row d-flex">
                {
                    MyBlogs.map(blog =><BlogMain blog={blog} key={blog.id}></BlogMain>)
                }
            </div>
        </div>
    );
};

export default Blog;