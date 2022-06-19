import Layout from '../components/layout';
import Hero from '../components/hero'
import Carousel from '../components/carousel';
import ProjectCard from '../components/project-card';
import DeveloperCard from '../components/developer-card';
import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';



const QUERY = gql`
  {
    homePageContent(where: {id:"cl4hhidbsk6q60ck3imgec24c"}) {
      homePageContent,
      carouselSlides 
    }
  }
`

const graphcms = new GraphQLClient(
    process.env.GRAPHCMS_API,
  );

export async function getStaticProps() {
    const { homePageContent } = await graphcms.request(QUERY);
    
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
        <Hero introHeader={homePageContentData.introHeader}/>  
        <ProjectCard cardData={homePageContentData.projectCard}/>

        <div>
            <Carousel headerData={homePageContentData.carouselContent}>
                <img src="/checkingoverview.png" alt="slide 1" />
                <img src="/savingsoverview.png" alt="slide 2" />
                <img src="/cdoverview.png" alt="slide 3" />
            </Carousel>
        </div>
        <div className="developerCard">
    <DeveloperCard developerCardData={homePageContentData.developerCard}/>
        </div>
      
    </Layout>
  )
}
