import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class SelectedDish extends Component{

renderDish(dish) {
        return(
          <>
            <div className="col-12 col-md-5 m-1">
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
  
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
              <CardTitle> <h1> Comments </h1></CardTitle>
              <CardText>{dish.comments.map((item) =>
                <CardBody>
                  <CardText> {item.comment} </CardText>
                  <CardText> --{item.author},{item.date} </CardText>
                </CardBody>                      
                )}
              </CardText>
            </div>
          </>
        );
}
  render(){
    return(
      <div className="row">        
          {this.renderDish(this.props.selectedDish)}        
      </div>

    )
  }
}

export default SelectedDish;