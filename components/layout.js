import { Container} from "react-bootstrap";

export default function Layout( { children }) {
    return (
        <Container fluid>   
        <div className="container-bg">{children}</div>
        </Container>
    )
}