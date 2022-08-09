import { useState } from 'react';
import { Card, CardImg, CardOverlay, CardText, CardBody, CardTitle, CardImgOverlay } from 'reactstrap'
import DishDetail from './DishDetail';

const Menu = (props) => {
    const [selectedDish, setSelectedDish] = useState(null);
    function onDishSelect(dish) {
        console.log(dish)
        setSelectedDish(dish);
    }
    const renderDish = (dish) => {
        if (dish != null)
            return (
                <DishDetail dish={dish} />
            );
        else
            return (
                <div></div>
            );
    }

    const menu = props.dis.map((dish) => {
        return (
            <div key={dish.id} className='col-12 col-md-5 mt-1'>
                <Card onClick={() => onDishSelect(dish)}>
                    <CardImg width='100%' object src={dish.image} alt={dish.name} />
                    <CardImgOverlay body className='ml-5'>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
                {renderDish(selectedDish)}
            </div>
        </div>
    )
}

export default Menu