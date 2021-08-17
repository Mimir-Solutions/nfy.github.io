import React, { useState } from 'react';
import { Box, Button, Grid, Snackbar, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Page1({ selectedBlocks, setSelectedBlocks }) {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = useState('');

    const handleClick = (block) => {
        if (selectedBlocks.find((b) => b === block)) {
            setSelectedBlocks(selectedBlocks.filter((b) => b !== block));
            setMessage(`${block} unselected`);
        } else {
            setSelectedBlocks([...selectedBlocks, block]);
            setMessage(`${block} selected`);
        }
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const data = [
        'ERC20',
        'ERC1115',
        'ERC720',
        'BEP20',
        'ALTChain20',
        'Altchain20',
    ];

    return (
        <Grid item xs={12} container spacing={3}>
            {data.map((block) => (
                <Grid key={block} item xs={6} sm={4}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        borderColor="primary"
                        border="1px solid"
                        padding={3}
                    >
                        <Typography variant="body1">{block}</Typography>
                        <Box marginTop={3}>
                            <Button
                                variant="contained"
                                onClick={() => handleClick(block)}
                            >
                                {selectedBlocks.find((b) => b === block)
                                    ? 'Remove'
                                    : 'Select'}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            ))}
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {message}
                </Alert>
            </Snackbar>
        </Grid>
    );
}

export default Page1;
