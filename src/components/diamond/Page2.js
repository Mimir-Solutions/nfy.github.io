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

    const [values, setValues] = useState({
        Rebase: '0',
        Yeam: '0',
        Fot: '0',
        Abc: '0',
        XYZ: '0',
        Foo: '0',
    });

    const handleClick = (block, value) => {
        if (selectedFacets.find((b) => b.name === block)) {
            setSelectedFacets(selectedFacets.filter((b) => b.name !== block));
            setMessage(`${block} unselected`);
        } else {
            console.log(
                '🚀 ~ file: Page2.js ~ line 41 ~ handleClick ~ value',
                value
            );
            setSelectedFacets([...selectedFacets, { name: block, value }]);
            setMessage(`${block} selected`);
        }
        setOpen(true);
        console.log({ selectedFacets });
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
                                        (_facet) => _facet.name === facet
                                    ) > -1
                                }
                                onChange={() =>
                                    handleClick(facet, values[facet])
                                }
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
                                defaultValue={values[facet]}
                                onChange={(e) => {
                                    const res = {
                                        ...values,
                                        [facet]: e.target.value,
                                    };
                                    console.log(
                                        '🚀 ~ file: Page2.js ~ line 95 ~ Page2 ~ res',
                                        res
                                    );

                                    setValues(res);
                                }}
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
