import React, { useEffect, useState } from 'react';
import { Slider } from 'antd';
import MyContainer from './Container';
import type { SliderMarks } from 'antd/es/slider';
import HorizontalBarChart from './HorizontalBarChart';
import style from './index.css';
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
interface OptionValue {
  value: string;
}

const App: React.FC = () => {
  const [storageValue, setStorageValue] = useState<RangeInputState>({ value: 0 });
  const [transferValue, setTransferValue] = useState<RangeInputState>({ value: 0 });
  const [backblazeValue, setBackblazeValue] = useState<RangeInputState>({ value: 0 })
  const [vultrValue, setVulterValue] = useState<RangeInputState>({ value: 0 })
  const [bunnyValue, setBunnyValue] = useState<RangeInputState>({ value: 0 })
  const [scalewayValue, setScalewayValue] = useState<RangeInputState>({ value: 0 })
  const [bunnyOption, setBunnyOption] = useState<OptionValue>({ value: "" });
  const [scalewayOption, setScalewayOption] = useState<OptionValue>({ value: "" });

  const data = [
    { name: 'backblaze.com', icon: 'src', value: backblazeValue.value },
    { name: 'bunny.net', icon: 'src', value: bunnyValue.value, option: ['HDD', 'SSD'] },
    { name: 'scaleway.com', icon: 'src', value: scalewayValue.value, option: ['Multi', 'Single'] },
    { name: 'vultr.com', icon: 'src', value: vultrValue.value },
  ];

  const handleStorageChange = (value: number): void => {
    setStorageValue({ value });
  };
  const handleTransferChange = (value: number): void => {
    setTransferValue({ value });
  };

  const handleScalewayOptionChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, name: string): void => {
    if (name === 'scaleway.com') {
      const resultScaleway = functionForScaleway(storageValue.value, transferValue.value, event.target.value)
      setScalewayValue({ value: resultScaleway });
      setScalewayOption({ value: event.target.value })
    } else if (name === 'bunny.net') {
      const resultBunny = functionForBunny(storageValue.value, transferValue.value, event.target.value)
      setBunnyValue({ value: resultBunny });
      setBunnyOption({ value: event.target.value })
    }
  }

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

  function functionForBunny(storage: number, transfer: number, type: string | null) {
    let storagePrice: number = 0;
    let transferPrice: number = 0.01;
    if (type === "HDD") {
      storagePrice = 0.01;
    } else if (type === "SSD") {
      storagePrice = 0.02;
    }

    const totalPrice = (transfer * transferPrice) + (storage * storagePrice);

    if (totalPrice < 10) {
      return Number(totalPrice.toFixed(2))
    } else {
      return 10;
    }
  }

  function functionForScaleway(storage: number, transfer: number, option: string) {
    const baseStorage = 75;
    const baseTransfer = 75;
    const storageRate = option === 'Multi' ? 0.06 : 0.03;
    const transferRate = 0.02;
    let storagePrice = 0;
    if (storage > baseStorage) {
      storagePrice = (storage - baseStorage) * storageRate;
    }
    let transferPrice = 0;
    if (transfer > baseTransfer) {
      transferPrice = (transfer - baseTransfer) * transferRate;
    }
    return Number((storagePrice + transferPrice).toFixed(2));
  }

  useEffect(() => {
    const result = functionForBackblaze(storageValue.value, transferValue.value);
    setBackblazeValue({ value: result });
    const resultVulret = functionFroVulter(storageValue.value, transferValue.value);
    setVulterValue({ value: resultVulret });
    const resultScaleway = functionForScaleway(storageValue.value, transferValue.value, scalewayOption.value)
    setScalewayValue({ value: resultScaleway });
    const resultBunny = functionForBunny(storageValue.value, transferValue.value, bunnyOption.value)
    setBunnyValue({ value: resultBunny });
  }, [storageValue, transferValue])

  return (
    <div style={styles}>
      <MyContainer>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '60px' }}>
          <div>
            <span>{`Storage: ${storageValue.value} GB`}</span>
            <Slider value={storageValue.value} onChange={handleStorageChange} className={style.slider} marks={marks} defaultValue={0} max={1000} />
          </div>
          <div>
            <span>{`Transfer: ${transferValue.value} GB`}</span>
            <Slider value={transferValue.value} onChange={handleTransferChange} className={style.slider} marks={marks} defaultValue={0} max={1000} />
          </div>
        </div>
        <HorizontalBarChart
          storageValue={storageValue.value}
          transferValue={transferValue.value}
          data={data}
          scalewayOption={scalewayOption.value}
          handleScalewayOptionChange={handleScalewayOptionChange}
        />
      </MyContainer>
    </div>

  );
};

export default App;