import React, { useEffect, useState } from 'react';
import { Slider } from 'antd';
import MyContainer from './Container';
import type { SliderMarks } from 'antd/es/slider';
import HorizontalBarChart from './HorizontalBarChart';

const styles = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const marks: SliderMarks = {
  0: '0',
  1000: '1000'
};
interface RangeInputState {
  value: number;
}

const App: React.FC = () => {
  const [storageValue, setStorageValue] = useState<RangeInputState>({ value: 0 });
  const [transferValue, setTransferValue] = useState<RangeInputState>({ value: 0 });
  const data = [
    { name: 'backblaze.com', value: 700 },
    { name: ' bunny.net', value: storageValue.value },
    { name: 'scaleway.com', value: 30 },
    { name: 'vultr.com', value: 120 },
  ];
  const handleStorageChange = (value: number): void => {
    setStorageValue({ value });
  };

  const handleTransferChange = (value: number): void => {
    setTransferValue({ value });
  };

  return (
    <div style={styles}>
      <MyContainer>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '60px' }}>
          <div>
            <span>{`Storage: ${storageValue.value} GB`}</span>
            <Slider value={storageValue.value} onChange={handleStorageChange} style={{ width: '200px' }} marks={marks} defaultValue={0} max={1000} />
          </div>
          <div>
            <span>{`Transfer: ${transferValue.value} GB`}</span>
            <Slider value={transferValue.value} onChange={handleTransferChange} style={{ width: '200px' }} marks={marks} defaultValue={0} max={1000} />
          </div>
        </div>
        <HorizontalBarChart storageValue={storageValue.value} transferValue={transferValue.value} data={data} />
      </MyContainer>
    </div>

  );
};

export default App;