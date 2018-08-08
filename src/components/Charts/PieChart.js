import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import { connect } from 'react-redux';

class PieChart extends Component {
constructor(props) {
    super(props); 
    this.state= {}
}
        render() {
            let options = {
                labels: [
                'P',
                'F',
                'C'
              ],
              datasets: [{
                data: [(+this.props.totalProtein * 4).toFixed(2) ,(+this.props.totalFat * 9).toFixed(2), (+this.props.totalCarbs * 4).toFixed(2)],
                backgroundColor: [
                'white',
                '#90AFC5',
                '#336B87'
                ]
              }]
            }
            console.log('this.props', this.props)
            console.log('this.state.datasets', this.state.datasets)
          return (
            <div>
            <div>
              <Pie 
              data={options}
              width={1}
              height={1}
              options={{
                title: {
                    display: true,
                    text: 'MarcoNutrients(kcal)', 
                    fontSize: 15,
                    fontFamily: 'Palatino',
                    fontColor: 'white'
                },
                legend: {
                  display: true, 
                  labels: {
                    fontColor: 'white',
                    fontFamily: 'Palatino'
                  },
                maintainAspectRatio: false
              },
              tooltips: {
                callbacks: {
                  label: function(tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                    var total = meta.total;
                    var currentValue = dataset.data[tooltipItem.index];
                    var percentage = parseFloat((currentValue/total*100).toFixed(1));
                    return currentValue + ' (' + percentage + '%)';
                  },
                  title: function(tooltipItem, data) {
                    return data.labels[tooltipItem[0].index];
                  }
                }
              },
            }} 
            />
            </div>
            </div>
          );
        }
}

const mapStateToProps = state => {
    const {totalFat, totalCarbs, totalProtein} = state
    return {
        totalFat, 
        totalCarbs,
        totalProtein
    }
}

export default connect(mapStateToProps)(PieChart);