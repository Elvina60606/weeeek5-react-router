
import Home from '../views/Home.jsx';
import Products from '../views/Products.jsx';
import Product from '../views/Product.jsx';
import Carts from '../views/Carts.jsx';
import Layout from '../Layout.jsx';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path:'/',
                element: <Home />,
            },
            {
                path:'/products',
                element: <Products />,
            },
            {
                path:'/product/:id',
                element: <Product />,
            },
            {
                path:'/carts',
                element: <Carts />,
            },
        ]
    }
]

export default routes;