import React, { Component } from 'react'
import {  Container, Card, CardGroup } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';

export class Price extends Component {
  render() {
    return (
      <Container className='price'>


    <CardGroup>
      <Card>
      
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" />
        <Card.Body>
         
          <Card.Text>
          Рекомендації щодо вибору та планування ділянки, будинку, квартири та дизайну приміщень.
          </Card.Text>
        </Card.Body>
       </Card>
      
      
      <Card>
      
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSG2v9dwYF-DEK6qy21Fst39lDTsA1KHrhuBTVpUNWKJV5tR2nIPUWsq-0pvC2aRzMuPo&usqp=CAU" />
        <Card.Body>
          
          <Card.Text>
          Нове будівництво, реконструкція, житлові будинки, готелі, комерційні будинки. Архітектура фасадів. Благоустрій ділянки житлових та громадських територій.
          </Card.Text>
        </Card.Body>
         </Card>
      
      
      <Card>
        
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" />
        <Card.Body>
          
          <Card.Text>
          Житлові будинки, апартаменти, готелі, комерційні приміщення, громадське харчування. Дизайн меблів та елементів інтер'єру.
          </Card.Text>
        </Card.Body>
        </Card>
   
   
   
    </CardGroup>
     </Container>
    )
  }
}


export default Price