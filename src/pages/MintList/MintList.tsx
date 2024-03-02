import { useEffect, useState } from 'react';
import './MintList.css';
import axios from 'axios';
import WebApp from '@twa-dev/sdk';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const MintPage = () => {
    const [mints, setMints] = useState<any[]>([]);

    useEffect(() => {
        axios
        .post(process.env.REACT_APP_BACKEND_URL + '/mintsList', { initData: WebApp.initData })
        .then(response => {
            if (response.data) {
                setMints(response.data.mints);
                console.log(response.data.mints);
            }
        }).catch(error => {
            console.log("Error: " + error);
            // WebApp.showAlert("Mint failed: " + error);
        });
    });

    return (
        <div className="MintList">
            <List sx={{ 
                margin: '24px', 
                '& .MuiTypography-root': {
                    color: WebApp.themeParams.text_color
                }
            }}>
                {mints.map((mint: any) => (
                    <ListItem
                        key={mint._id}
                        disableGutters
                    >
                    <ListItemText 
                        primary={`Address: ${mint.contractAddress}`} 
                        secondary={`Price: ${mint.price} STAR; Date: ${mint.mintdate}`}
                    />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default MintPage;