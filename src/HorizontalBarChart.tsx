import React from 'react';

interface HorizontalBarChartProps {
    storageValue: number;
    transferValue: number;
    data: {
        name: string;
        value: number;
        option?: string[];
    }[];
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
    storageValue,
    transferValue,
    data,
}) => {
    const sortedData = [...data].sort((a, b) => a.value - b.value);
    const minValue = sortedData[0].value;
    const chartWidth = 500;
    const barHeight = 30;

    return (
        <div style={{ width: chartWidth }}>
            {data.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: item.option ? 'block' : 'flex',
                        alignItems: 'center',
                        marginBottom: '10px',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '10px' }}>{item.name}:</div>
                        <div
                            style={{
                                width: item.value,
                                height: barHeight,
                                backgroundColor: item.value === minValue ? 'red' : 'blue',
                                marginRight: '10px',
                            }}
                        />
                        <div>{item.value}</div>
                    </div>
                    {item.option && (
                        <div style={{ flexDirection: 'column' }}>
                            {item.option.map((option, i) => (
                                <label key={i} style={{ marginBottom: '5px' }}>
                                    <input
                                        type="radio"
                                        name={`option-${index}`}
                                        value={option}
                                        style={{ marginRight: '5px' }}
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