import './MintPage.css';

import WebApp from '@twa-dev/sdk';
import { MainButton } from '@twa-dev/sdk/react';
import TextField from '@mui/material/TextField';

import { useState } from 'react';
import axios from 'axios';
import dayjs, { Dayjs } from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ThemeProvider, THEME_ID } from '@mui/material/styles';

import Theme from '../../helpers/Theme';

const MintPage = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(1);

  async function mint() {
    if (address === null || address === undefined || address === "") {
      WebApp.showAlert("Address is required");
      return;
    }
    if (price === null || price === undefined) {
      WebApp.showAlert("Price is required");
      return;
    }
    if (amount === null || amount === undefined) {
      WebApp.showAlert("Amount is required");
      return;
    }
    if (date === null || date === undefined) {
      WebApp.showAlert("Date is required");
      return;
    }
    if (amount < 1) {
      WebApp.showAlert("Amount should be greater than 0");
      return;
    }
    if (price < 0) {
      WebApp.showAlert("Price should be greater than 0");
      return;
    }
    if (date < dayjs()) {
      WebApp.showAlert("Date should be in the future");
      return;
    }
    const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + '/createMint', 
        { date: date.toISOString(), address: address, price: price, amount: amount, initData: WebApp.initData },
        { headers: { 'Content-Type': 'application/json' } }
    );
  }

  return (
    <div className="App">
      <div className="content">
        <h1>Auto-Mint NFT</h1>
        <ThemeProvider theme={{[THEME_ID]: Theme}}>
          <TextField 
            id="contractAddress" 
            label="Contract Address" 
            variant="outlined"
            size="small"
            value={address}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setAddress(event.target.value);
            }}
          />
          <span className='span'></span>
          <TextField
            id="mintPrice"
            label="Price for 1 mint"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <span className='span'></span>
          <TextField
            id="mintsAmount"
            label="Mints amount"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))} 
          />
          <span className='span'></span>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker 
              label="Mint Time And Date" 
              value={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </LocalizationProvider>
        </ThemeProvider>
        <MainButton onClick={mint} text="Mint" />
      </div>
    </div>
  );
}

export default MintPage;