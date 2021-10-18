import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
//import Backet from '../backet';

import React from 'react';
import Backet from '../basket_new/basket';
import { BasketItemProps } from '../basket_new/basket_item/basket_item.props';
import product from '../product';

const App = ({restaurants}: any): JSX.Element => {

  const [basketItems, setBasketItems] = React.useState<BasketItemProps[]>([]);

  return <>
        <Header />
        <Backet
          items={basketItems}
          onAddItem={product => {
            const newBusketItems = [product,...basketItems];
            setBasketItems(newBusketItems);            
          }}
          onRemoveItem={(product) => {
            const newBusketItems = basketItems.filter(f => f.title !== product.title);
            setBasketItems(newBusketItems);
          }}          
          onRemoveWholeBasketItem={(product) => {
            const newBusketItems = basketItems.filter(f => f.title !== product.title);
            setBasketItems(newBusketItems);
          }} />
        <Restaurants restaurants={restaurants} onnAddMenuItem={(product) => {
          //alert(JSON.stringify(product));
          debugger;
          const newBusketItems = [{ title: product.name as string, quantity: 1, item_cost: product.price as number },...basketItems];
          setBasketItems(newBusketItems);
        }} />  
  </>;
}

export default App;