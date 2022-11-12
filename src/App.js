import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>

        <Row>
          <Col xs="3"> <CategoryList></CategoryList></Col>
          <Col xs="9">  <ProductList></ProductList></Col>
         
        
        </Row>
      </Container>
    </div>
  );
}

export default App;
