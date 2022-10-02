import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export  default class Contacts extends Component {
  render() {
    return (
    
      <div>
      <Container className='contacts'>
        <Form className='form_contacts'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email адрес</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTextarea">
        <Form.Label>Сообщение</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Проверить меня" />
      </Form.Group>
      <Button variant="primary" type="submit">
      Разместить
      </Button>
      </Form>
      </Container>
      </div>
  
    )
  }
}

