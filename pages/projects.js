import Banner from "../components/Banner";
import Book from "../components/book";
import Layout from "../components/layout";
import Photograph from "../components/photograph";

export default function Projects() {
    const projectData = [
        {
            src: '/cdoverview.png',
            name: 'Citi CD Overview',
            url: 'https://online.citi.com/US/ag/banking/cd-account'
        },
        {
            src: '/checkingoverview.png',
            name: 'Citi Checking Overview',
            url: 'https://online.citi.com/US/ag/banking/checking-account'
        },
        {
            src: '/savingsoverview.png',
            name: 'Citi Savings Overview',
            url: 'https://online.citi.com/US/ag/banking/savings-account'
        },
        {
            src: '/cdpdp.png',
            name: 'CD Product Detail Page',
            url: "https://online.citi.com/US/ag/certificates-of-deposit"
        }
    ]

    const firstPage = [projectData[0], projectData[1]].map(project => <Photograph src={project.src} name={project.name} url={project.url}/> )
    const secondPage = [projectData[2], projectData[3]].map(project => <Photograph src={project.src} name={project.name} url={project.url} /> )
    console.log(secondPage)
    // const projects = projectData.map(project => <Photograph src={project.src} name={project.name} />)

    return (
        <Layout>
            <Banner />
            <Book firstPage={firstPage} secondPage={secondPage}/>
            {/* {projects} */}
        </Layout>
    )
}