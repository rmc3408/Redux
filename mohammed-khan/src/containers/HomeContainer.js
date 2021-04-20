import HomeBox from '../components/HomeBox';
import { connect } from 'react-redux';
import { addCart, removeCart } from '../services/actions/actions'


const mapStateToProps = reduce => ({
    cart: reduce.cartItems
})

const mapDispatchToProps = dispatch => ({
    handleToAdd: data => dispatch(addCart(data)),
    handleToRemove: () => dispatch(removeCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeBox);

