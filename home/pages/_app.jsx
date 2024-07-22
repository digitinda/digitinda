import React from 'react'
import { redirect } from 'next/navigation'
import Router from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './main.css'
import App from 'next/app'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  // static async getInitialProps({ Component, router, ctx }) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   let appProps = {}
    
  //   if (Component.getInitialProps) {
  //       appProps = await Component.getInitialProps(ctx);
  //   }

  //   var exclude = ['/', '/login']
  //   if(exclude.indexOf(router.route) != -1){        
  //       return { ...appProps }
  //   }

  //   var _res = await check_user()
  //   var status = true
  //   if(!_res.status){
  //       status = false
  //       ctx.res.writeHead(307, { Location: '/login' })
  //       ctx.res.end()
  //   }

  //   Object.assign(appProps, { featureProps: status })

  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props

    return ( <Component {...pageProps} />  )
  }
}

export default MyApp