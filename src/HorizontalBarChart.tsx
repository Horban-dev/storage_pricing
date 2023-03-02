import React from 'react';
import classes from './styles.css'
interface HorizontalBarChartProps {
  storageValue: number;
  transferValue: number;
  data: {
    name: string;
    value: number;
    option?: string[];
  }[];
  scalewayOption?: string;
  handleScalewayOptionChange?: any;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  data,
  handleScalewayOptionChange
}) => {
  const sortedData = [...data].sort((a, b) => a.value - b.value);
  const minValue = sortedData[0].value;
  const barHeight = 30;
  return (
    <div className={classes.main}>
      {data.map((item, index) => (
        <div
          key={index}
          className={classes.container}
        >
          <div className={classes.underContainer}>
            <div className={classes.name}>{item.name}:</div>
            <div
              style={{
                width: item.value * 5,
                height: barHeight,
                backgroundColor: item.value === minValue ? 'red' : 'grey',
                marginRight: '10px',
              }}
            />
            <div>{`${item.value}$`}</div>
          </div>
          {item.option && (
            <div className={classes.radio}>
              {item.option.map((option, i) => (
                <label key={i} style={{ marginBottom: '5px' }}>
                  <input
                    type="radio"
                    name={`option-${index}`}
                    value={option}
                    onChange={(e) => handleScalewayOptionChange(e, item.name)}
                    className={classes.inputRadio}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HorizontalBarChart;