import Header from '../components/Header';
import { connect } from 'react-redux';
//import { addCart } from '../services/actions/actions'


const mapStateToProps = reduce => ({
    cart: reduce.cartItems
})

const mapDispatchToProps = dispatch => ({
    //handleToAdd: data => dispatch(addCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

