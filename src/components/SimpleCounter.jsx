import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';


export function SimpleCounter({ seconds }) {
  const d1 = Math.floor((seconds / Math.pow(10, 1 - 1)) % 10);
  const d2 = Math.floor((seconds / Math.pow(10, 2 - 1)) % 10);
  const d3 = Math.floor((seconds / Math.pow(10, 3 - 1)) % 10);
  const d4 = Math.floor((seconds / Math.pow(10, 4 - 1)) % 10);
  const d5 = Math.floor((seconds / Math.pow(10, 5 - 1)) % 10);
  const d6 = Math.floor((seconds / Math.pow(10, 6 - 1)) % 10);

  return (
    <Row className="counter-container">
      <Col className="counter-col">{d6}</Col>
      <Col className="counter-col">{d5}</Col>
      <Col className="counter-col">{d4}</Col>
      <Col className="counter-col">{d3}</Col>
      <Col className="counter-col">{d2}</Col>
      <Col className="counter-col">{d1}</Col>
    </Row>
  );
}

SimpleCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
};
