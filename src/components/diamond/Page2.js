import React, { useState } from 'react';
import {
    Box,
    Checkbox,
    Grid,
    Snackbar,
    Typography,
    TextField,
    Button,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Page2({ selectedFacets, setSelectedFacets }) {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = useState('');

    const handleClick = (block) => {
        if (selectedFacets.find((b) => b === block)) {
            setSelectedFacets(selectedFacets.filter((b) => b !== block));
            setMessage(`${block} unselected`);
        } else {
            setSelectedFacets([...selectedFacets, block]);
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

    const facets = ['Rebase', 'Yeam', 'Fot', 'Abc', 'XYZ', 'Foo'];
    return (
        <Grid item xs={12} container spacing={3}>
            {facets.map((facet) => (
                <Grid key={facet} item xs={12} sm={4}>
                    <Box
                        display="flex"
                        alignItems="flex-start"
                        flexDirection="column"
                        justifyContent="center"
                        borderColor="primary"
                        border="1px solid"
                        padding={3}
                    >
                        <Box display="flex" alignItems="center">
                            <Checkbox
                                checked={
                                    selectedFacets.findIndex(
                                        (_facet) => _facet === facet
                                    ) > -1
                                }
                                onChange={() => handleClick(facet)}
                                color="secondary"
                            />
                            <Typography variant="body1">{facet}</Typography>
                        </Box>
                        <Box
                            marginTop={3}
                            display="flex"
                            justifyContent="center"
                            style={{
                                margin: 'auto',
                            }}
                        >
                            <TextField
                                placeholder="Value"
                                color="secondary"
                                variant="outlined"
                            />
                        </Box>
                        <Box justifySelf="flex-end" flex={0} marginLeft="auto">
                            <Button variant="contained">Info</Button>
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

export default Page2;
