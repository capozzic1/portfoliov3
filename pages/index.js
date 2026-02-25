
import Hero from '/components/hero'

import ProjectCard from '/components/project-card';
import WorkExperienceCard from '/components/work-experience-card';
import DeveloperCard from '/components/developer-card';
import indexData from '../data/index.json';

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
         
            <div>

            </div>
            <div className="developerCard">
                <DeveloperCard developerCardData={homePageContentData.developerCard} />
            </div>
         
            <ProjectCard cardData={homePageContentData.projectCard}/>
       </>
    )
}
