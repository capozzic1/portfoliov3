import Banner from "../components/Banner";
import Book from "../components/book";
import Layout from "../components/layout";
import Photograph from "../components/photograph";
import { gql, GraphQLClient } from 'graphql-request';


const QUERY = gql`
{
    projectPageContent(where: {id: "cl4lkg9weyvig0djzl6qbhfs9"}) {
        projects
    }
}
`


export async function getStaticProps() {
    const graphcms = new GraphQLClient(
        process.env.GRAPHCMS_API
    ) 
    const { projectPageContent } = await graphcms.request(QUERY);

    return {
        props: {
            projectPageContent
        }
    }
}

export default function Projects( { projectPageContent }) {
    const projectData = projectPageContent.projects;

    const firstPage = [projectData[0], projectData[1]].map(project => <Photograph src={project.src} name={project.name} url={project.url}/> )
    const secondPage = [projectData[2], projectData[3]].map(project => <Photograph src={project.src} name={project.name} url={project.url} /> )

    return (
        <Layout>
            <Banner />
            <Book firstPage={firstPage} secondPage={secondPage}/>
        </Layout>
    )
}