import React from 'react'
import Image from 'next/image'
import { MainLayout } from '../lib/layouts/pageLayout'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class MainMobiPage extends React.Component  {


  constructor(props) {
    super(props);  
    this.state = {
        chart1 : {
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
       }      
    }
  }


  render(){

      return(
          <MainLayout>
            <h1 className="mt-4">Dashboard</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
            </ol>
            <div className='row'>
              <div className='col-md-4'>
                <div className='card'>
                    <div class="card-body">Reserved</div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                        <a class="small text-white stretched-link" href="#">View Details</a>
                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                    </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                    <div class="card-body">Pending</div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                        <a class="small text-white stretched-link" href="#">View Details</a>
                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                    </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card'>
                    <div class="card-body">Delivered</div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                        <a class="small text-white stretched-link" href="#">View Details</a>
                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                    </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='card mt-4'>
                    <div className='card-header'><h4 className='card-title'>Monhtly Sales</h4></div>
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
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Morbi leo risus</li>
                            <li class="list-group-item">Porta ac consectetur ac</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                          </ul>
                      </div>
                  </div>              
              </div>
            </div>
          </MainLayout>
      )

  }


}


export default MainMobiPage