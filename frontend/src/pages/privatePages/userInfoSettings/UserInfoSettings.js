import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./userInfoSettings.css"

function userInfoSettings() {
  return (
    <div className='wrapper-user-info-settings'>
    <Form className='form-user-info-settings'>
      <Row className="mb-3 ">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Jméno</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Příjmení</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
      </Row>

      <Form.Group id="wrapper-input-user-info-settings-49" className="mb-3" controlId="formGridAddress1">
        <Form.Label>Telefon</Form.Label>
        <Form.Control  />
      </Form.Group>

      <Form.Group id="wrapper-input-user-info-settings-49" className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control  />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Město</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Ulice včetně č.p.</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>p.s.č.</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <div id='wrapper-btn-user-info-settings'> 
      <Button id='btn-user-info-settings' variant="primary" type="submit">
        Odeslat
      </Button>
      </div>
    </Form>
    </div>
  );
}

export default userInfoSettings