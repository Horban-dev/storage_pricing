import React, { FC, useEffect } from 'react';

interface HorizontalBarChartProps {
    storageValue: number;
    transferValue: number;
    data: {
        name: string;
        value: number;
    }[];
}
const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ storageValue, transferValue, data }) => {

    const sortedData = [...data].sort((a, b) => a.value - b.value);
    const minValue = sortedData[0].value;
    const chartWidth = 400;
    const barHeight = 30;

    return (
        <div style={{ width: chartWidth }}>
            {data.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '10px',
                    }}
                >
                    <div style={{ width: '100px', textAlign: 'right' }}>
                        {item.name}:
                    </div>
                    <div
                        style={{
                            width: item.value,
                            height: barHeight,
                            backgroundColor: item.value === minValue ? 'red' : 'blue',
                            marginLeft: '10px',
                        }}
                    />
                    <div style={{ marginLeft: '10px' }}>{item.value}</div>
                </div>
            ))}
        </div>
    );
};

export default HorizontalBarChart;
