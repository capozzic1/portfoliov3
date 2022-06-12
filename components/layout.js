import { Container} from "react-bootstrap";

export default function Layout( { children }) {
    return (
        <Container fluid>   
        {children}
        </Container>
    )
}