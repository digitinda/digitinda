import React from 'react'
import Image from 'next/image'
import { MainLayout } from '../lib/layouts/pageLayout'
import dynamic from 'next/dynamic'
import Login from './login'
import MainMobiPage from './dashboard'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class MainPage extends React.Component  {


  constructor(props) {
    super(props);

    this.state = {
        is_checking: true,
        has_token: false
    }  

  }

  componentDidMount(){

      if(typeof(window) != 'undefined'){

          var token = localStorage.getItem('token')

          if(token == null || typeof(token) == 'undefined'){
              this.setState({
                  is_checking: false,
                  has_token: false
              })
          }else{
              this.setState({
                  is_checking: false,
                  has_token: true
              })
          }

      }

  }

  render(){

      const { is_checking, has_token } = this.state

      if(is_checking){
          return (
              <div>Please wait...</div>
          )
      }

      else if(!is_checking && !has_token){
          return <Login />
      }

      else if(!is_checking && has_token){
          return <MainMobiPage />
      }


      return (
          <div>Page not found</div>
      )

  }


}


export default MainPage