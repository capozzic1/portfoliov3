import { Container} from "react-bootstrap";
import Footer from "./footer";
import Header from "./header";

export default function Layout(props) {
    const footerContent = {
        header: "Around the web:",
        header2: "About this page:",
        description: "Frontend built with Next.js, React-Bootstrap, and React Query. Backend built with Spring Boot and PostgreSQL.",
    }
    return (
        <Container fluid className="p-0">   
            <Header />
            {props.children}
            <Footer footerContent={footerContent}/>
        </Container>
    )
}