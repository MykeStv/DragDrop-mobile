import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux'
import { actionCreators } from '../index'
import { _getPhones } from '../utils/_DATA'
import Container from './Container'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  const phones = useSelector(state => state.phones)
  console.log(phones);
  const dispatch = useDispatch()

  const { receivePhones } = bindActionCreators(actionCreators, dispatch)


  useEffect(() => {
    _getPhones().then(p => receivePhones(p))
  }, [])

  return (
    <>
      <Container phones={phones} />
    </>
  );
}

export default App;
