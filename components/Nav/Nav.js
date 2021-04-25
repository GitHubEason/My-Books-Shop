import { FaShoppingCart } from 'react-icons/fa';

import styles from './main.css';

const Nav = () => {
    return (
        <nav className={stryles.nav}>
            <p className={styles.navTitle}>
                Books Shop
            </p>
            <p className={styles.navCart}>
                <button>
                    <FaShoppingCart />
                </button>
                
            </p>
        </nav>
    )
}

export default Nav;