import React, { useState } from 'react';
import { Box, Button, Grid, Snackbar, Typography, Modal } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function WalletConnect () {

    const [opened, setOpened] = useState(false);


    const openModal = () => {
        setOpened(true);
    }

    const closeModal = () => {
        setOpened(false);
    }

    return (
        <div>
            <Modal
                open={opened}
                onClose={closeModal}
            >
                
            </Modal>
        </div>
    )
}

export default WalletConnect;