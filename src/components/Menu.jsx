import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap'

const Menu = (props) => {
//    const {dish} = props
    // const renderDish = (dish) => {
    //     if (dish != null)
    //         return (
    //             <DishDetail dish={dish} />
    //         );
    //     else
    //         return (
    //             <div></div>
    //         );
    // }

    const menu = props.dis.map((dish) => {
        return (
            <div key={dish.id} className='col-12 col-md-5 mt-1'>
                <Card onClick={() => props.onClick(dish.id)}>
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
        </div>
    )
}

export default Menu