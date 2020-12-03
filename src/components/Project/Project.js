import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectMain from '../ProjectMain/ProjectMain';
import Aos from 'aos';
import "aos/dist/aos.css";
// technology: 'HTML, CSS, Javascript, React JS, React Modal, Bootstrap, React-router-dom, FontAwesome, Firebase, Heroku, Google Font,Node JS, Netlify',

const Project = () => {
    useEffect(() =>{
        Aos.init({duration: 3000});
      },[])
    

    const projectsCollection = [{
        id: '1',
        name: 'Doctors Portal',
        image: 'https://img.techpowerup.org/201030/doctorsportal.jpg',
        details: 'This is a web application for web development organization , this is simple application for creative organization management.',
        feature: {
            feature1: 'Dental treatment',
            feature2: 'Dental Doctors Support',
            feature3: 'Show appointments by date',
            feature4: 'feedback system',
            feature5: ' Show appointment by user',
            feature6: 'UI user effective',
            feature7: 'Easily use',
            feature8: '',
        },
        technology: {
            T1: 'HTML',
            T2: 'CSS',
            T3: 'JavaScript',
            T4: 'React.js',
            T5: 'Bootstrap',
            T6: 'MongoDB',
            T7: 'Firebase',
            T8: 'Heroku',
            T9: 'React Modal',
            T10: 'React Router dom',
            T11: 'FontAwesome',
            T12: 'googleFonts'
        },
        screenshots: 'https://drive.google.com/drive/folders/1JJluqvxdLTw65Rnz6lgxPuy09NogPv_q',
        webLink: 'https://doctors-portal-8165f.web.app/',
        codeLink: 'https://github.com/Muktarul-Islam420/doctor-portal-web',
    
    },{
        id: '2',
        name: 'Creative Agency',
        image: 'https://img.techpowerup.org/201030/creativeagency.jpg',
        details: 'This is a web application for web development organization , this is simple application for creative organization management.',
        feature: {
            feature1: 'Login system',
            feature2: 'Sign up system',
            feature3: ' Review System',
            feature4: 'Get order system',
            feature5: 'Show data by user',
            feature6: 'Make admin facilities',
            feature7: 'User effective UI',
            feature8: 'Easily use',
        },
        technology:{
            T1: 'HTML',
            T2: 'CSS',
            T3: 'JavaScript',
            T4: 'React.js',
            T5: 'Bootstrap',
            T6: 'MongoDB',
            T7: 'Firebase',
            T8: 'Heroku',
         
            T10: 'React Router dom',
            T11: 'FontAwesome',
            T12: 'googleFonts'
        },
        screenshots: 'https://drive.google.com/drive/folders/1PleC6Gz7F6e1nemKYKgsq3FfKwIYstj5',
        webLink: 'https://creative-agency-4b26f.web.app/',
        codeLink: 'https://github.com/Muktarul-Islam420/creative-agency-client-site',
    },{
        id: '3',
        name: 'Volunteer Network Service',
        image: 'https://img.techpowerup.org/201030/volunteernetwork.jpg',
        details: 'This is a web application for web development organization , this is simple application for creative organization management.',
        feature: 'Login system, Sign up system, Review System, Get order system, Show data by user',
        feature: {
            feature1: 'Login system',
            feature2: 'Sign up system',
            feature3: ' Review System',
            feature4: 'Get order system',
            feature5: 'Show data by user',
            feature6: 'Make admin facilities',
            feature7: 'User effective UI',
            feature8: 'Easily use',
        },
        technology: {
            T1: 'HTML',
            T2: 'CSS',
            T3: 'JavaScript',
            T4: 'React.js',
            T5: 'Bootstrap',
            T6: 'MongoDB',
            T7: 'Firebase',
            T8: 'Heroku',
          
            T10: 'React Router dom',
            T11: 'FontAwesome',
            T12: 'googleFonts'
        },
        screenshots: 'https://drive.google.com/drive/folders/1faWJm-QwckTnTWtlk5NrgVTFPudM3KJf',
        webLink: 'https://volunteer-service-2ee59.web.app/',
        codeLink: 'https://github.com/Muktarul-Islam420/volunteerNetwork-service-client',
    },{
        id: '4',
        name: 'Hard Rock Solution',
        image: 'https://img.techpowerup.org/201030/hardrock.jpg',
        details: 'This is an music lyric web application. This application show you song lyrics from their lyrics library.',
        feature: {
            feature1: 'Login system',
            feature2: 'Sign up system',
            feature3: ' Review System',
            feature4: 'Get order system',
            feature5: 'Show data by user',
            feature6: 'Make admin facilities',
            feature7: 'User effective UI',
            feature8: 'Easily use',
        },
        technology: {
            T1: 'HTML',
            T2: 'CSS',
            T3: 'JavaScript',
            T4: 'React.js',
            T5: 'Bootstrap',
            T6: 'MongoDB',
            T7: 'Firebase',
            T8: 'Heroku',
          
            T10: 'React Router dom',
            T11: 'FontAwesome',
            T12: 'googleFonts'
        },
        screenshots: 'https://drive.google.com/drive/folders/1faWJm-QwckTnTWtlk5NrgVTFPudM3KJf',
        webLink: 'https://muktarul-islam420.github.io/hard-rock-solution/index.html',
        codeLink: 'https://github.com/Muktarul-Islam420/hard-rock-solution',
    }
    ]

    return (
        <div>
           
            <Link to="/project">
            <h1 className="my-blog" data-aos="fade-right">My Recent Projects</h1>
            </Link>
          
           
            <br/>
            <br/>
            <div className="row d-flex">
                {
                    projectsCollection.map(project =><ProjectMain project={project} key={project.id}></ProjectMain>)
                }
            </div>
        </div>
    );
};

export default Project;