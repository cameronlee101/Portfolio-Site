import React from "react";
import styles from '../projects.module.css'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image';

export default function CMPT272AngularSite() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>CMPT 272 Angular Site</span>
            </h1>
            <section className='center-all'>
                <div className={styles.overviewSection}>
                    <h2 className='section-header'>
                        Overview
                    </h2>
                    <p className={styles.overviewDescription}>
                        This website is the final project of CMPT272: Web I - Client-side Development. Working off a set 
                        of user requirements, I built an intuitive website that lets users report the location of any villan nuisance activity. <br/><br/>
                        The Angular-based website uses the Leaflet map library to display the locations of any nuisances and allow users to click on the map 
                        to select locations when creating a report. Reports and location information (such as name, latitude and longitude) are 
                        stored and managed on a remote server via a REST API.
                    </p>
                </div>
                <div className='flex justify-center w-full mt-16'>
                    <Image src={'/gifs/CMPT272AngularSiteGif.gif'} alt={'CMPT 272 Angular Site example gif'} width={700} height={0}/>
                </div>
                <div>
                    <a href='https://github.com/cameronlee101/CMPT272-Angular-Site' className={styles.sourceLink}>
                        Source&nbsp;<FaGithub/>
                    </a>
                </div>
            </section>
        </main>
    )
}