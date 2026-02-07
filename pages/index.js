import Layout from '/components/layout';
import Hero from '/components/hero'
import Carousel from '/components/carousel';
import ProjectCard from '/components/project-card';
import WorkExperienceCard from '/components/work-experience-card';
import DeveloperCard from '/components/developer-card';
import indexData from '../data/index.json';
// import 'bootstrap/dist/css/bootstrap.min.css';
export async function getStaticProps() {
    const homePageContent = indexData.homePageContent;

    return {
        props: {
            homePageContent
        }
    }
}

export default function Home({ homePageContent }) {
    console.log(homePageContent)
    const homePageContentData = homePageContent.homePageContent
    // const html = homePageContent.carouselSlides.html

    return (
        <Layout>
            <Hero introHeader={homePageContentData.introHeader} />
            {/* Work experience card */}
            <WorkExperienceCard cardData={homePageContentData.workExperience} />
            {/* Recent projects card */}

            <div>
                {/* <Carousel headerData={homePageContentData.carouselContent}>
                <img src="/checkingoverview.png" alt="slide 1" />
                <img src="/savingsoverview.png" alt="slide 2" />
                <img src="/cdoverview.png" alt="slide 3" />
            </Carousel> */}
            </div>
            <div className="developerCard">
                <DeveloperCard developerCardData={homePageContentData.developerCard} />
            </div>
         
            <ProjectCard cardData={homePageContentData.projectCard}/>
       

        </Layout>
    )
}
