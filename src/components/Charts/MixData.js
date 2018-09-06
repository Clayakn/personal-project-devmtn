import React, { Component }from 'react';
import {Bar, Chart} from 'react-chartjs-2';

Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontFamily = 'Palatino';
  
//   const plugins = [{
//       afterDraw: (chartInstance, easing) => {
//           const ctx = chartInstance.chart.ctx;
//           ctx.fillText("This text drawn by a plugin", 100, 100);
//       }
//   }];

class MixData extends Component {
    constructor() {
    super();
    this.state = {}
    // Proper way to grabbing tags by Id
    // this.ctxRef = React.createRef();
    }
    render() {
        const data = {
            labels: ["Fats", "Carbs", "Protein", "Calories", "Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E", "Vitamin K", "Thiamin", "Riboflavin","Niacin", "Vitamin B6", "Folate", "Vitamin B12", "Calcium", "Copper", "Iron", "Magnesium", "Manganese", "Phosphorus", "Potassium", "Selenium", "Sodium", "Zinc"],
            datasets: [ {
                label: "Meal Plan Value",
                    type:'line',
                    data: [ ((this.props.fat/65) * 100).toFixed(2) > 150 ? 150 : ((this.props.fat/65) * 100).toFixed(2), 
                        ((this.props.carbs/300) * 100).toFixed(2) > 150 ? 150 : ((this.props.carbs/300) * 100).toFixed(2), 
                        ((this.props.protein/50) * 100).toFixed(2) > 150 ? 150 :  ((this.props.protein/50) * 100).toFixed(2), 
                        ((this.props.calories/2000) * 100).toFixed(2) > 150 ? 150 : ((this.props.calories/2000) * 100).toFixed(2), 
                        ((this.props.vitamina/1500) * 100).toFixed(2) > 150 ? 150 : ((this.props.vitamina/1500) * 100).toFixed(2),
                        ((this.props.vitaminc/60) * 100).toFixed(2) > 150 ? 150 : ((this.props.vitaminc/60) * 100).toFixed(2), 
                        ((this.props.vitamind/400) * 100).toFixed(2) > 150 ? 150 : ((this.props.vitamind/400) * 100).toFixed(2), 
                        ((this.props.vitamine/20.1) * 100).toFixed(2) > 150 ? 150 : ((this.props.vitamine/20.1) * 100).toFixed(2), 
                        ((this.props.vitamink/80) * 100).toFixed(2) > 150 ? 150 : ((this.props.vitamink/80) * 100).toFixed(2), 
                        ((this.props.thiamin/1.5) * 100).toFixed(2) > 150 ? 150 : ((this.props.thiamin/1.5) * 100).toFixed(2), 
                        ((this.props.riboflavin/1.7) * 100).toFixed(2) > 150 ? 150 : ((this.props.riboflavin/1.7) * 100).toFixed(2), 
                        ((this.props.niacin/20) * 100).toFixed(2) > 150 ? 150 : ((this.props.niacin/20) * 100).toFixed(2), 
                        ((this.props.vitaminb6/2) * 100).toFixed(2) > 150 ? 150 : ((this.props.vitaminb6/2) * 100).toFixed(2),
                        ((this.props.folate/400) * 100).toFixed(2) > 150 ? 150 : ((this.props.folate/400) * 100).toFixed(2), 
                        ((this.props.vitaminb12/6) * 100).toFixed(2) > 150 ? 150 : ((this.props.vitaminb12/6) * 100).toFixed(2), 
                        ((this.props.calcium/1000) * 100).toFixed(2) > 150 ? 150 :  ((this.props.calcium/1000) * 100).toFixed(2), 
                        ((this.props.copper/2) * 100).toFixed(2) > 150 ? 150 : ((this.props.copper/2) * 100).toFixed(2),
                        ((this.props.iron/18) * 100).toFixed(2) > 150 ? 150 : ((this.props.iron/18) * 100).toFixed(2),
                        ((this.props.magnesium/400) * 100).toFixed(2) > 150 ? 150 : ((this.props.magnesium/400) * 100).toFixed(2), 
                        ((this.props.manganese/2) * 100).toFixed(2) > 150 ? 150 : ((this.props.manganese/2) * 100).toFixed(2),  
                        ((this.props.phosphorus/1000) * 100).toFixed(2) > 150 ? 150 : ((this.props.phosphorus/1000) * 100).toFixed(2), 
                        ((this.props.potassium/3500) * 100).toFixed(2) > 150 ? 150 : ((this.props.potassium/3500) * 100).toFixed(2), 
                        ((this.props.selenium/70) * 100).toFixed(2) > 150 ? 150 : ((this.props.selenium/70) * 100).toFixed(2), 
                        ((this.props.sodium/2400) * 100).toFixed(2) > 150 ? 150 : ((this.props.sodium/2400) * 100).toFixed(2), 
                        ((this.props.zinc/15) * 100).toFixed(2) > 150 ? 150 : ((this.props.zinc/15) * 100).toFixed(2)],
                    fill: false,
                    borderColor: '#FFC0CB',
                    backgroundColor: '#FFC0CB',
                    pointBorderColor: '#FFC0CB',
                    pointBackgroundColor: '#FFC0CB',
                    pointHoverBackgroundColor: '#FFC0CB',
                    pointHoverBorderColor: '#FFC0CB',
                } ,
                {
                  label: "Daily Value",
                  type: 'bar',
                    data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                    fill: false,
                    backgroundColor: '#336B87',
                    borderColor: '#336B87',
                    hoverBackgroundColor: '#90AFC5'
            }]
        };
        const options = {
            responsive: true,
            title: {
                display: true,
                text: 'Food Composition Comparison %',
                fontSize: 20
            },
            legend: {
                display: true, 
                labels: {
                  fontSize: 15
                }
            },
            tooltips: {
              mode: 'label'
            },
            elements: {
              line: {
                fill: false
              }
            },
            // Maintain Aspect Ratio
        
          };
        return (
          <div>
            <Bar
            // How to reference a certain tag 
            //   ref={this.ctxRef}
              height={300}
              width={1200}
              // redraw={true}
              data={data}
              options={options}
            //   plugins={plugins}
            />
          </div>
        );
      }
}
export default MixData;