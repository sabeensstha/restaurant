import { Card, CardImg, CardTitle, CardImgOverlay,Breadcrumb,BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';

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

    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className='col-12 col-md-5 mt-1'>
                <Card >
                    <Link to={`/menu/${dish.id}`} >
                        <CardImg width='100%' object src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className='ml-5'>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
            </div>
        );
    });
    return (
        <div className="container">
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    )
}

export default Menu