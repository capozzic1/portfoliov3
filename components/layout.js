import { Container} from "react-bootstrap";
import Footer from "./footer";
import Header from "./header";

export default function Layout(props) {
    const footerContent = {
        header: "Around the web:",
        header2: "About this page:",
        description: "Made with React and Next.js"
    }
    return (
        <Container fluid>   
        <Header />
        {props.children}
        <Footer footerContent={footerContent}/>
        </Container>
    )
}