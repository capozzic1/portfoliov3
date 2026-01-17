import Banner from "/components/banner";
import Book from "/components/book";
import Layout from "/components/layout";
import Photograph from "/components/photograph";
import projectsData from '../data/projects.json';

export async function getStaticProps() {
    const projectPageContent = projectsData.projectPageContent;

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