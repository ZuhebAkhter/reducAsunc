import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { showNotification } from './store/uiSlice';
import Notification from './components/UI/Notification';

let isInitial=true;
function App() {
  const cartshow = useSelector(state => state.ui.cartIsVisible)
  const cart=useSelector(state => state.cart);
  const notificationstatus=useSelector(state => state.ui.notification)
const dispatch = useDispatch();

  useEffect(()=>{
    const sendData=async()=>{
      dispatch(showNotification({
        status:'pending',
        title:'Sending',
        message:'Sending cart Data'
      }))
     const response=await fetch('https://try2-7cacf-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',{
        method:'PUT',
        body:JSON.stringify(cart),
      });
      if(!response.ok){
       throw new Error('Sending cart data failed')  
       }
       dispatch(showNotification({
        status:'success',
        title:'Success!',
        message:'Sent cart data successfully',
      }))
      }
      if(isInitial){
        isInitial=false;
        return;
      }
     
      sendData().catch(err => {
        dispatch(showNotification({
          status:'error',
          title:'Error',
          message:'Sending cart data failed',
        }))   
      })
    },[cart,dispatch])
  


  return (
    <React.Fragment>
     {notificationstatus && <Notification status={notificationstatus.status} title={notificationstatus.title} message={notificationstatus.message}/>}
    <Layout>
     {cartshow &&  <Cart />}
      <Products />
    </Layout>
    </React.Fragment>
  );
}

export default App;
