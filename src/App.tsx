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
  const [backblazeValue, setBackblazeValue] = useState<RangeInputState>({ value: 0 })
  const [vultrValue, setVulterValue] = useState<RangeInputState>({ value: 0 })
  const data = [
    { name: 'backblaze.com', value: backblazeValue.value },
    { name: ' bunny.net', value: 200, option: ['HDD', 'SSD'] },
    { name: 'scaleway.com', value: 30, option: ['Multi', 'Single'] },
    { name: 'vultr.com', value: vultrValue.value },
  ];

  const handleStorageChange = (value: number): void => {
    setStorageValue({ value });
  };

  const handleTransferChange = (value: number): void => {
    setTransferValue({ value });
  };

  function functionForBackblaze(storage: number, transfer: number) {
    const minPrice = 7
    const result = storage * 0.005 + transfer * 0.01;

    if (result < minPrice) {
      return Number(minPrice.toFixed(2));
    } else {
      return Number(result.toFixed(2));
    }
  }

  function functionFroVulter(storage: number, transfer: number) {
    const storagePrice = 0.01;
    const transferPrice = 0.01;
    const minimumPayment = 5;

    const storageCost = storage * storagePrice;
    const transferCost = transfer * transferPrice;

    const totalCost = storageCost + transferCost;
    const payment = Number(Math.max(minimumPayment, totalCost).toFixed(2));
    return payment;
  }

  useEffect(() => {
    const result = functionForBackblaze(storageValue.value, transferValue.value);
    setBackblazeValue({ value: result });
    const resultVulret = functionFroVulter(storageValue.value, transferValue.value);
    setVulterValue({ value: resultVulret });
  }, [storageValue, transferValue])

  // function functionForBunny(storage: number, transfer: number, type: string) {

  //   let storagePrice: any;
  //   let transferPrice
  //   if (type === "HDD") {
  //     storagePrice = 0.01;
  //   } else if (type === "SSD") {
  //     storagePrice = 0.02;
  //   }
  //   transferPrice = 0.01;

  //   const totalPrice = (transfer * transferPrice) + (storage * storagePrice);

  //   if (totalPrice < 10) {
  //     return totalPrice;
  //   } else {
  //     return 10;
  //   }
  // }
  // console.log(functionForBunny(storageValue.value, transferValue.value, 'SSD'))
  // console.log(functionForBunny(storageValue.value, transferValue.value, 'HDD'))


  // function functionForScaleway(storage: number, transfer: number, option: string) {
  //   const baseStorage = 75;
  //   const baseTransfer = 75;
  //   const storageRate = option === 'Multi' ? 0.06 : 0.03;
  //   const transferRate = 0.02;
  //   let storagePrice = 0;
  //   if (storage > baseStorage) {
  //     storagePrice = (storage - baseStorage) * storageRate;
  //   }
  //   let transferPrice = 0;
  //   if (transfer > baseTransfer) {
  //     transferPrice = (transfer - baseTransfer) * transferRate;
  //   }
  //   return storagePrice + transferPrice;
  // }
  // console.log(functionForScaleway(storageValue.value, transferValue.value, 'Multi'))
  // console.log(functionForScaleway(storageValue.value, transferValue.value, 'Single'))

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