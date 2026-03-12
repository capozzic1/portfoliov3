
import Hero from '/components/hero'

import ProjectCard from '/components/project-card';
import WorkExperienceCard from '/components/work-experience-card';
import DeveloperCard from '/components/developer-card';
import indexData from '../data/index.json';
import { Row } from 'react-bootstrap';

export async function getStaticProps() {
    const homePageContent = indexData.homePageContent;

    return {
        props: {
            homePageContent
        }
    }
}

export default function Home({ homePageContent }) {
    const homePageContentData = homePageContent.homePageContent


    return (
        <>
            <Hero introHeader={homePageContentData.introHeader} />
            <WorkExperienceCard cardData={homePageContentData.workExperience} />
            <DeveloperCard developerCardData={homePageContentData.developerCard} projectCardData={homePageContentData.projectCard}/>
        </>
    )
}
