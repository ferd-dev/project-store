import NavItem from './NavItem';
import { useContext, useEffect, useState } from 'react';
import { CardContext } from '../context/CardContext';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
type Category = {
  id: number;
  name: string;
  image: string;
};

const fetchCategories = async (setCategories: (categories: Category[]) => void) => {
  const response = await fetch('https://api.escuelajs.co/api/v1/categories?limit=5');
  const data = await response.json();
  setCategories(data);
};

const Navbar = () => {


  const [categories, setCategories] = useState<Category[]>([]);
  const cardContext = useContext(CardContext);
  const count = cardContext?.count || 0;
  const products = cardContext?.products || [];
  const removeProduct = cardContext?.removeProduct || (() => {});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);


  useEffect(() => {
    fetchCategories(setCategories);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCartMenu = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleAccountMenu = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 antialiased shadow-md fixed top-0 w-full z-50">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0 text-primary-700 text-2xl font-pacifico">
              <NavLink to="/">ReactShop</NavLink>
            </div>
            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              <NavItem to="" name="Home" />
              {categories.map(({ id, name }) => (
                <NavItem key={id} to={`category/${id}`} name={name} />
              ))}
            </ul>
          </div>
          <div className="flex items-center lg:space-x-2">
            <CartButton count={count} products={products} removeProduct={removeProduct} isCartOpen={isCartOpen} toggleCartMenu={toggleCartMenu} />
            <AccountButton isAccountOpen={isAccountOpen} toggleAccountMenu={toggleAccountMenu} />
            <MobileMenuButton toggleMobileMenu={toggleMobileMenu} />
          </div>
        </div>
        <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
      </div>
    </nav>
  );
};

const CartButton = ({ count, products, removeProduct, isCartOpen, toggleCartMenu }: { count: number, products: any[], removeProduct: (id: number) => void, isCartOpen: boolean, toggleCartMenu: () => void }) => (
  <div className="relative inline-block text-left">
    <div>
      <button
        onClick={toggleCartMenu}
        type="button"
        className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
        id="cart-menu-button"
        aria-expanded={isCartOpen}
        aria-haspopup="true"
      >
        <span className="sr-only">Cart</span>
        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 lg:me-1" />
        {count > 0 && (
          <span className="hidden sm:flex bg-primary-700 text-white rounded-md p-1">{count}</span>
        )}
        <svg className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" d="m19 9-7 7-7-7" />
        </svg>
      </button>
    </div>
    
    <div className={`absolute right-0 z-10 mx-auto p-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isCartOpen ? 'block' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="cart-menu-button" tabIndex={-1}>
      {products?.map(({ id, title, price, amount }) => (
        <div className="grid grid-cols-2 border-b pb-1" key={id}>
          <div>
            <span className="text-sm font-semibold leading-none text-gray-900 dark:text-white">{title}</span>
            <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
              <b>price:</b> $ {price}
            </p>
          </div>
          <div className="flex items-center justify-end gap-6">
            <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
              <b>units:</b> {amount}
            </p>
            <button onClick={() => removeProduct(id)} type="button" className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
              <span className="sr-only"> Remove </span>
              <FontAwesomeIcon icon={faMinus} className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
      <NavLink to="/shopping-cart" title="" className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button">
        Proceed to Checkout
      </NavLink>
    </div>
  </div>
);

const AccountButton = ({ isAccountOpen, toggleAccountMenu }: { isAccountOpen: boolean, toggleAccountMenu: () => void }) => (
  <div className="relative inline-block text-left">
    <div>
      <button
        onClick={toggleAccountMenu}
        type="button"
        className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
        id="account-menu-button"
        aria-expanded={isAccountOpen}
        aria-haspopup="true"
      >
        <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        Account
        <svg className="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" d="m19 9-7 7-7-7" />
        </svg>
      </button>
    </div>
    <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isAccountOpen ? 'block' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="account-menu-button" tabIndex={-1}>
      <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
        <li>
          <a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
            My Account
          </a>
        </li>
        <li>
          <a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
            My Orders
          </a>
        </li>
      </ul>
      <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
        <a href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
          Sign Out
        </a>
      </div>
    </div>
  </div>
);

const MobileMenuButton = ({ toggleMobileMenu }: { toggleMobileMenu: () => void }) => (
  <button
    type="button"
    onClick={toggleMobileMenu}
    aria-controls="ecommerce-navbar-menu-1"
    aria-expanded="false"
    className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
  >
    <span className="sr-only">Open Menu</span>
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" d="M5 7h14M5 12h14M5 17h14" />
    </svg>
  </button>
);

const MobileMenu = ({ isMobileMenuOpen }: { isMobileMenuOpen: boolean }) => (
  <div id="ecommerce-navbar-menu-1" className={`bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 px-4 mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
    <ul className="text-gray-900 dark:text-white text-sm font-medium space-y-3">
      <li>
        <a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">
          Category 1
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">
          Category 2
        </a>
      </li>
    </ul>
  </div>
);

export default Navbar;

