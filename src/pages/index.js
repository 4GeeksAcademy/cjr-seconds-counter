import { Container, Row, Col } from "react-bootstrap";
import { CounterContainer } from "@/components/CounterContainer";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <CounterContainer />
        </Col>
      </Row>
    </Container>
  );
}
