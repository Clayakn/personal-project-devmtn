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
                        data={this.state} 
                        height={60}
                        options={{
                            cutoutPercentage: 50,
                            legend: {
                                display: false, 
                            },
                            maintainAspectRatio: false
                        }}
                        />
                    </div>
                </div>
              );
            }
    }

export default DoughnutChart;