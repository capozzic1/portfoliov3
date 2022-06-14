import Banner from "../components/Banner";
import Layout from "../components/layout";
import Photograph from "../components/photograph";

export default function Projects() {
    const projectData = [
        {
            src: '/cdoverview.png',
            name: 'Citi CD Overview'
        },
        {
            src: '/checkingoverview.png',
            name: 'Citi Checking Overview'
        },
        {
            src: '/savingsoverview.png',
            name: 'Citi Savings Overview'
        },
        {
            src: '/cdpdp.png',
            name: 'CD Product Detail Page'
        }
    ]

    const projects = projectData.map(project => <Photograph src={project.src} name={project.name} />)

    return (
        <Layout>
            <Banner />
            {projects}
        </Layout>
    )
}