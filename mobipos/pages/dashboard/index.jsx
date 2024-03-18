import React from 'react'
import Image from 'next/image'
import { MainLayout } from '../../lib/layouts/pageLayout'
import * as orderapi from '../../lib/services/order-services'
import * as reportapi from '../../lib/services/report-services'

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class MainMobiPage extends React.Component  {


  constructor(props) {
    super(props);  
    this.state = {
        total_delivered: 0,
        total_pending: 0,
        total_reserved: 0,
        ordered_menus: [],
        chart1 : {
          options: {
            chart: {
              id: "monthly-sales"
            },
            xaxis: {
              categories: []
            }
          },
          series: []
       }      
    }
  }

  componentDidMount(){

      const { chart1 } = this.state

      orderapi.ordered_menus().then((res) => {          
          if(res.status){
              this.setState({
                  ordered_menus: res.data
              })
          }
      })

      orderapi.total_transaction().then((res) => {
          if(res.status){
              var data = res.data
              this.setState({
                  total_delivered: data.delivered,
                  total_pending: data.pending,
                  total_reserved: data.reserved,
              })
          }
      })

      reportapi.monthly_report().then((res) => {          
          if(res.status){
              var data = res.data
              this.setState({
                  chart1 : {
                    options: {  
                        ...chart1.options,
                        xaxis: {
                            categories: data.map((item) => item.date_created )
                        }
                    },
                    series: [
                        {
                            name: 'montly-sales',
                            data: data.map((item) => item.total_price )
                        }
                    ]
                  }
              })
          }
      })
  }

  render(){

      const OrderedMenus = (props) => {

          if(this.state.ordered_menus.length == 0){
              return (
                  <div>
                    <h4 className='text-center'>No Orders Today</h4>
                  </div>
              )
          }

          return (
            <ul className="list-group list-group-flush">
              {
                this.state.ordered_menus.map((item) => {
                    return (
                        <li className="list-group-item">
                            <h4>{item.trans_no}</h4>
                            <p className='mb-1'>{"Total Price: " + item.total_price }</p>
                            <p>{"No. of Items: " + item.total_items }</p>
                        </li>
                    )
                })
              }            
            </ul>
          )

      }

      return(
          <MainLayout>
            <h1 className="mt-4">Dashboard</h1>           
            <div className='row'>
              <div className='col-md-4'>
                <div className='card'>
                    <div class="card-body text-center"><h5 className='mb-0 card-title'>Reserved</h5></div>
                    <div class="card-footer">
                        <h2 className='card-title text-center'>{this.state.total_reserved}</h2>
                    </div>
                </div>
              </div>
              <div className='col-md-4'>
                 <div className='card'>
                    <div class="card-body text-center"><h5 className='mb-0 card-title'>Pending</h5></div>
                    <div class="card-footer">
                        <h2 className='card-title text-center'>{this.state.total_pending}</h2>
                    </div>
                </div>
              </div>
              <div className='col-md-4'>
                 <div className='card'>
                    <div class="card-body text-center"><h5 className='mb-0 card-title'>Delivered</h5></div>
                    <div class="card-footer">
                        <h2 className='card-title text-center'>{this.state.total_delivered}</h2>
                    </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='card mt-4'>
                    <div className='card-header'><h4 className='card-title'>Daily Sales</h4></div>
                    <div class="card-body">
                        <Chart
                          options={this.state.chart1.options}
                          series={this.state.chart1.series}
                          type="bar"
                          height="300"
                        />
                      </div>
                  </div>              
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='card mt-4'>
                    <div className='card-header'><h4 className='card-title'>Today Orders</h4></div>
                    <div class="card-body">
                        <OrderedMenus />
                      </div>
                  </div>              
              </div>
            </div>
          </MainLayout>
      )

  }


}


export default MainMobiPage