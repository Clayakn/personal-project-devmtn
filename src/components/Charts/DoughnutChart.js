import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class DoughnutChart extends Component {
    constructor(props) {
        super(props); 
        this.state= {
            labels: [
                'Protein',
                'Fats',
                'Carbohydrates'
              ],
              datasets: [{
                data: [props.protein, props.fats, props.carbs],
                backgroundColor: [
                'white',
                '#90AFC5',
                '#336B87'
                ]
              }]
        }
    }
            render() {
              return (
                <div>
                    <div>
                    <Pie 
                        height='70'
                        width='300'
                        data={this.state}
                        options={{
                            responsive: false, 
                            maintainAspectRatio: false,
                            cutoutPercentage: 50,
                            legend: {
                                display: false, 
                            },
                        }}
                        />
                    </div>
                </div>
              );
            }
    }

export default DoughnutChart;