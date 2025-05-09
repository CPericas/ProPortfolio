import React from 'react';
import { motion } from 'framer-motion';
import { Figure } from 'react-bootstrap';
import CardHover from '../components/CardHover';
import FlipCard from '../components/FlipCard/FlipCard';
import SkillsTable from '../components/SkillsTable';

const LandingPage = () => {
  return (
    <main className="min-vh-100 bg-white text-dark">
      {/* Hero Section */}
        <section className="d-flex flex-column justify-content-center align-items-center text-center py-5 px-3 bg-primary text-white">
            <motion.h1
                className="display-3 fw-bold mb-4 text-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                Christopher Angel Pericas' Professional Portfolio
            </motion.h1>
            <motion.p
                className="lead mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                >
                Front End Developer | JavaScript, HTML5, CSS3 | React, Bootstrap, Vite <br />
                Full Stack Experience | Python | Flask, SocketIO
            </motion.p>
            <a href="mailto:pericasca@yahoo.com">
                <motion.button
                    className="btn btn-light btn-lg shadow-lg"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact Me
                </motion.button>
            </a>
        </section>
        {/* Projects Section */}
        <section className="py-5 px-3">
            <div className="d-flex justify-content-center">
                <Figure>
                    <motion.img
                        src="picsNvids/Chris1.jfif"
                        alt="Chris Pericas"
                        width={180}
                        height={180}
                        className="rounded-circle mx-auto d-block"
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { yoyo: Infinity, duration: 1.5, ease: "easeInOut" },
                        }}
                    />
                    <Figure.Caption className="text-center mt-2">
                        Christopher Angel Pericas
                    </Figure.Caption>
                </Figure>
            </div>
            <h2 className="text-center mb-5 display-5">Favorite Projects</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                <div className="col">
                    <CardHover
                        title="E-Commerce App"
                        shortText="Modern shopping platform built with React + Vite."
                        longDescription="This is a full-featured e-commerce web application built using React, Redux, React-Bootstrap, Axios, Jest, and GitHub Actions for CI/CD integration. The app allows users to browse products, manage their cart, login, view order details, and perform actions like updating profiles or deleting accounts."
                        link="https://github.com/CPericas/E-Commerce-App"
                    />
                </div>
                <div className="col">
                    <CardHover
                        title="Chat WebSocket App"
                        shortText="Real-time chat with Flask and Socket.IO."
                        longDescription="Simple WebSocket Chat Application is a real-time chat app that enables users to send and receive messages instantly using WebSockets. The backend is built with Python (Flask-SocketIO), and the frontend uses React, TypeScript, and Bootstrap."
                        link="https://github.com/CPericas/ChatWebsocket"
                    />
                </div>
                <div className="col">
                    <CardHover
                        title="Task Manager App"
                        shortText="Task tool built with TypeScript and clean UI."
                        longDescription="A simple and responsive React-based task management application that allows authenticated users to manage their tasks efficiently."
                        link="https://github.com/CPericas/Task-Management-TypeScript"
                    />
                </div>      
            </div>
            <p className="text-center mt-4 fs-5">
                For all projects, visit my{' '}
                    <a
                        href="https://github.com/CPericas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fw-bold text-primary text-decoration-underline"
                    >
                        GitHub
                    </a>
            </p>
        </section>
        {/* About me / skills */}
        <section className="py-5 px-3">
            <h2 className="text-center mb-5 display-5">Get To Know Me</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <FlipCard
                        imageSrc="picsNvids/CG.jpg"
                        backText="I joined the U.S. Coast Guard in 2004. I served as an Operations Specialist specializing in
                        search and rescue in both Northern California then Upstate New York on the Great Lakes."
                    />
                </div>
                <div className="col">
                    <FlipCard
                        imageSrc="picsNvids/NBfitness.jpg"
                        backText="After the USCG, I began personal training. After managing personal training departments
                        for multiple national chains, I opened my own personal training studio, New Beginnings Fitness."
                    />
                </div>
                <div className="col">
                    <FlipCard
                        imageSrc="picsNvids/welding.jpg"
                        backText="I took up welding. Although I do not continue to do it professionally, I still enjoy
                        the activity, and make welding art with my personal mig welding rig at home."
                    />
                </div>
                <div className="col">
                    <FlipCard
                        imageSrc="picsNvids/diving.jpg"
                        backText="I then took my welding underwater and became a certified commercial diver where I
                        became proficient in all forms of underwater construction and inspections.
                        Unfortunately, injuries and surgeries made that career path come to an end. However, I still enjoy
                        scuba diving and getting in the water as much as possible."
                    />
                </div>
                <div className="col">
                    <FlipCard
                        imageSrc="picsNvids/family.jpg"
                        backText="I now spend as much time with my family as possible. They are the reason I've made this
                        big career change. I've always enjoyed keeping up with technology and learning how things work, and coding
                        checks both of those boxes for me. I am looking forward to beginning this chapter of my life with an interesting
                        and challenging career....that will not put me in the hospital."
                    />
                </div>
                <div className="col">
                    <FlipCard
                        imageSrc="picsNvids/bicep.jpg"
                        backText="I don't want any more reasons to go to the hospital!"
                    />
                </div>
            </div>
        </section>


        <SkillsTable />


        <section className="py-5 bg-primary text-white text-center">
            <h2 className="mb-4 display-5">Ready to collaborate?</h2>
            <p className="lead mb-4">Reach out to me for all your Front End or Full Stack Development needs.</p>
            <a href="mailto:pericasca@yahoo.com">
                <motion.button
                    className="btn btn-light btn-lg shadow-lg"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact Me
                </motion.button>
            </a>
        </section>
        {/* Footer */}
        <motion.footer
            className="bg-black py-4 text-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 8, duration: 0.6 }}
        >
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-4 text-center text-white text-md-start mb-3 mb-md-0'>
                    <p className="mb-0">© {new Date().getFullYear()} Chris Pericas. All rights reserved.</p>
                    </div>
                    <div className='col-md-4 text-center mb-3 mb-md-0'>
                        <img
                            src='picsNvids/Logo.jpg'
                            alt='Footer Logo'
                            height="100px"
                            width="100px"
                            className='img-fluid'
                        />
                    </div>
                    <div className='col-md-4 text-center text-md-end'>
                        <a
                            href='https://www.linkedin.com/in/christopher-pericas-a31765334/'
                            target='blank'
                            rel='noopener noreferrer'
                            className='text-white d-block mb-1 text-decoration-underline'
                        >
                            LinkedIn
                        </a>
                        <a
                            href='https://github.com/CPericas'
                            target='blank'
                            rel='noopener noreferrer'
                            className='text-white d-block mb-1 text-decoration-underline'
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </motion.footer>
    </main>
  );
};

export default LandingPage;