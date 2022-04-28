import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Layout from '../components/layout';
import Hero from '../components/hero'
import Card from '../components/card'

export default function Home() {
  const data = {
    introHeader: {
        header: "Hello, I'm Chris",
        heroList: [
            "User Interface Developer",
            "Lover of Javascript",
            "Lover of coffee"
        ],
        heroIcon: "/hero-code.png"
    },
    projectCard: {
        header: "Want to see some projects?",
        ctaText: "Lets go!"
    },  
    developerCard: {
        header: "User Interface Developer",
        description: "I take a design or prototype and make it become real in the browser using the languages of the web.",
        toolDescription: "Languages and tools I work with:",
        icons: [
            {
                src: '..',
                name: 'Javascript'
            },
            {
                src: '..',
                name: 'Angular'
            },
            {
                src: '..',
                name: 'Sass'
            },
            {
                src: '..',
                name: 'CSS'
            },
            {
                src: '..',
                name: 'ReactJS'
            },
            {
                src: '..',
                name: 'HTML'
            }
        ]
    },
    footer: {
        icons: null
    }
}
  return (
    <Layout>
        <Header/>
        <Hero introHeader={data.introHeader}/>
        <Card projectCard={data.projectCard} />
    </Layout>
  )
}
