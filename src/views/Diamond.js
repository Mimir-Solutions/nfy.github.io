import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Buttons from '../components/diamond/Buttons';
import Page1 from '../components/diamond/Page1';
import Page2 from '../components/diamond/Page2';
import Page3 from '../components/diamond/Page3';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {},
}));

function Diamond() {
    const styles = useStyles();

    const [step, setStep] = useState(0);
    const [selectedBlocks, setSelectedBlocks] = useState([]);

    const allSteps = [
        <Page1
            selectedBlocks={selectedBlocks}
            setSelectedBlocks={setSelectedBlocks}
        />,
        <Page2 />,
        <Page3 />,
    ];

    return (
        <Grid container className={styles.container}>
            {allSteps[step]}
            <Buttons allSteps={allSteps} step={step} setStep={setStep} />
        </Grid>
    );
}

export default Diamond;
