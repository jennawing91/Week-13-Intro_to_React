import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home_container">
                    <img src="https://thumbs.dreamstime.com/z/sale-hand-written-vector-word-rainbow-splash-paint-sale-hand-written-word-splash-paint-115247531.jpg" 
                    alt="" className="home_img"/>
                    <div className="home_row">
                        <Product className="product_img"
                            id="123"
                            title="Flour Shop Rainbow Backpack" 
                            price={80}
                            rating={5}
                            image="https://cdn.shopify.com/s/files/1/0012/0963/0773/products/flour-shop-rainbow-backpack-1-o_grande.jpg?v=1576132600"
                            />
                        <Product className="product_img"
                            id="234"
                            title="Rainbow Snacks"
                            price={25}
                            rating={5}
                            image="https://cdn.shopify.com/s/files/1/2028/7269/products/Rainbow_Party_Tray.jpg?v=1547508677"
                           />
                        <Product className="product_img"
                            id="345"
                            title="Rainbow Coated Chocolate Chips"
                            price={15}
                            rating={5}
                            image="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/8977c5ecb9f10dc8-UsC2E0RT.jpg"
                        />
                        <Product className="product_img"
                            id="456"
                            title="Rainbow Twizzlers"
                            price={5}
                            rating={3}
                            image="http://cdn.shopify.com/s/files/1/0620/2186/1557/products/0A3252A5-0B0C-4D25-8F32-270B77E19CEC.jpg?v=1658575409"
                         />
                    </div>

                    <div className="home_row">
                        <Product className="product_img"
                            id="567"
                            title="Girls Rainbow Sundress"
                            price={35}
                            rating={5}
                            image="https://cdn.shopify.com/s/files/1/1202/9744/products/20190809-D63A8887-20.jpg?v=1570202512"
                            />
                        <Product className="product_img"
                            id="789"
                            title="Women's Rainbow Sundress"
                            price={160}
                            rating={5}
                            image="https://cdn.shopify.com/s/files/1/1134/5844/products/GreyDecember16th20208577_528x.jpg?v=1614309039"
                           />
                        <Product className="product_img"
                            id="890"
                            title="Rainbow Wedding Dress"
                            price={850}
                            rating={5}
                            image="https://cdn.thisiswhyimbroke.com/thumb/the-rainbow-wedding-dress_400x333.jpg"
                        />
                        <Product className="product_img"
                            id="901"
                            title="Girls Long Sleeve Rainbow Dress"
                            price={40}
                            rating={5}
                            image="https://n.nordstrommedia.com/id/sr3/a58c3692-6647-4a27-b68f-5dc292d58fa8.jpeg?h=365&w=240&dpr=2"
                         />
                    </div>

                    <div className="home_row">
                        <Product className="product_img"
                            id="012"
                            title="Rainbow Stacking Blocks"
                            price={25}
                            rating={5}
                            image="https://d1jqecz1iy566e.cloudfront.net/detail/fb444/fb444_0.jpg"
                            />
                        <Product className="product_img"
                            id="1231"
                            title="Plush Rainbow Narwal"
                            price={20}
                            rating={5}
                            image="https://i0.wp.com/douglascuddletoy.com/wp-content/uploads/2018/06/4165-2.jpg?fit=1200%2C1200&ssl=1"
                           />
                        <Product className="product_img"
                            id="2345"
                            title="Wooden Rainbow Dolls"
                            price={25}
                            rating={5}
                            image="https://cdn.shopify.com/s/files/1/0056/5002/2500/products/Wooden_rainbow_friends_12_pieces_345x345@2x.jpg?v=1580268152"
                        />
                        <Product className="product_img"
                            id="3456"
                            title="Rainbow Striped Bouncy Balls"
                            price={5}
                            rating={5}
                            image="https://cdn.shopify.com/s/files/1/2350/3497/products/us-toy-tmp-images-catalog-products-g-s-gs7873_600x.jpg?v=1657135217"
                         />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;