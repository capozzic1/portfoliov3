import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Layout from '../components/layout';
import Hero from '../components/hero'
import Card from '../components/card'
import Button from '../components/button';
import { Col } from 'react-bootstrap';
import CardContent from '../components/card-content';
import Footer from '../components/footer';
import Carousel from '../components/carousel';

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
        ctaText: "Lets go!",
        imgSrc: "/portfolio.png"
    },  
    developerCard: {
        header: "User Interface Developer",
        imgSrc: "/coding.png",
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
    carouselContent: [
        {
            header: "Citi Checking Overview",
            url: "https://online.citi.com/US/ag/banking/checking-account"
        },
        {
            header: "Citi Savings Overview",
            url: "https://online.citi.com/US/ag/banking/savings-account",
        },
        {
            header: "Citi CD Overview",
            url: "https://online.citi.com/US/ag/banking/cd-account"
        }
    ],
    footerContent: {
        header: "Around the web:",
        header2: "About this page:",
        description: "Made with React and Next.js"
    }
}
  return (
    <Layout>
        <Header/>
        <Hero introHeader={data.introHeader}/>  
        <div className="projectCard">
        <Card cardData={data.projectCard} bgColor="#3E518C">
            <Button ctaText={data.projectCard.ctaText} />
        </Card>
        </div>
        <div>
            <Carousel headerData={data.carouselContent}>
                <img src="/checkingoverview.png" alt="slide 1" />
                <img src="/savingsoverview.png" alt="slide 2" />
                <img src="/cdoverview.png" alt="slide 3" />
            </Carousel>
        </div>
        <div className="developerCard">
        <Card cardData={data.developerCard} bgColor="#12173F">
           <CardContent contentData={data.developerCard}></CardContent>
        </Card>
        </div>
        <Footer footerContent={data.footerContent}/>
    </Layout>
  )
}
