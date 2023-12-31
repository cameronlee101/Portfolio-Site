import React from "react";
import styles from '../projects.module.css'
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

export default function GenkiStudyTool() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>Genki Study Tool</span>
            </h1>
            <section className='center-all'>
                <div className={styles.overviewSection}>
                    <h2 className='section-header'>
                        Overview
                    </h2>
                    <p className={styles.overviewDescription}>
                        Looking for a way to combine my desire to develop my web development skills with my lagging Japanese studies, I decided to create
                        this web application. It features various activities to help people study the material from the Genki Japanese textbooks, such as flashcards and 
                        multiple choice quizzes. Future versions will include more topics from the textbooks, as well as other activites such as hangman. <br/><br/>
                        The website was developed in Typescript using the Next.js React Framework. Study material content is stored on a MongoDB Atlas database. 
                        E2E testing was conducted using the Cypress, and unit testing was conducted using Jest. Lastly, The website was deployed on Vercel.<br/><br/>
                        Visit the website here:&nbsp;
                        <Link 
                            href={'https://genki-study-tool.vercel.app'} 
                            target='_blank'
                            className='text-blue-400'
                        >
                            https://genki-study-tool.vercel.app
                        </Link>
                    </p>
                </div>
                {/* <div className='flex justify-center w-full mt-16'>
                    <Image src={'/gifs/FallHacks2023Gif.gif'} alt={'Fall Hacks 2023 example gif'} className='websiteGif'/>
                </div> */}
                <div>
                    <a href='https://github.com/cameronlee101/Genki-Study-Tool' className={styles.sourceLink}>
                        Source&nbsp;<FaGithub/>
                    </a>
                </div>
            </section>
        </main>
    )
}