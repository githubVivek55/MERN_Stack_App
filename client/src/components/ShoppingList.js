import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

export default class ShoppingList extends Component {
    state={
        items:[
            {id:uuid(),name:'Eggs'},
            {id:uuid(),name:'Milk'},
            {id:uuid(),name:'Water'},
            {id:uuid(),name:'Tea'}
        ]
    }
  render() {
    return (
      <div>
        <Container>
            <Button
                color="dark"
                style={{marginButtom:'2rem'}}
                onClick={()=>{
                    const name=prompt('Enter Item');
                    if(name){
                        this.setState(state=>({
                            items:[...this.state.items,{id:uuid(),name}]
                        }));
                    }
                }}
            >Add Item</Button>
            <ListGroup>
                <TransitionGroup className="shoping-list">
                    {this.state.items.map(({id,name})=>(
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={()=>{
                                    this.setState(state=>({
                                        items:state.items.filter(item=>item.id!==id)
                                    }))
                                }}
                            >&times;</Button>
                            {name}</ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
      </div>
    )
  }
}
