import React, {useContext} from 'react';
import img from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => { 

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton
                    show={props.onShowCart}
                    hide={props.onHideCart}

                />
            </header>
            <div className={classes['main-image']}>
                <img
                    src={img}
                    alt="A table full of delicious food"
                />
            </div>
        </React.Fragment>
    )
}

export default Header;