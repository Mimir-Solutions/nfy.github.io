import React from 'react';

import { Grid, Box, Typography } from '@material-ui/core';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import SlideOne from './slides/SlideOne';
import SlideTwo from './slides/SlideTwo';
import SlideThree from './slides/SlideThree';

const useStyles = makeStyles((theme) => ({
    marginVertical: {
        marginTop: theme.spacing(),
        marginBottom: theme.spacing(),
    },
    marginBottom: { marginBottom: theme.spacing(0) },
    textUppercase: { textTransform: 'uppercase' },
    trandingItemContainer: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'flex-start',
        },
    },
}));

export const Main = (props) => {
    const styles = useStyles();

    return (
        
        <Grid container spacing={3}>
            <Grid container item spacing={3}>
                <Grid md={4} xs={12} item>
                    
                    <Box
                        // margin={1}
                        border="1px solid"
                        borderColor="green"
                        padding={3}
                        display="flex"
                        flexDirection="column"
                        width="100%"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-start"
                            component="div"
                        >
                            <Typography
                                variant="h5"
                                style={{
                                    display: 'inline-block',
                                    marginRight: 16,
                                }}
                            >
                                {props.currency} Balance
                            </Typography>
                            {/* <Storefront /> */}
                        </Box>
                        <Typography variant="p">$15</Typography>
                    </Box>
                </Grid>
                
                <Grid md={4} xs={12} item>
                    
                    <Box
                        // margin={1}
                        border="1px solid"
                        borderColor="green"
                        padding={3}
                        display="flex"
                        flexDirection="column"
                        width="100%"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-start"
                            component="div"
                        >
                            <Typography
                                variant="h5"
                                style={{
                                    display: 'inline-block',
                                    marginRight: 16,
                                }}
                            >
                                {props.currency} Staked
                            </Typography>
                            {/* <Storefront /> */}
                        </Box>
                        <Typography variant="p">$21103</Typography>
                    </Box>
                </Grid>

                <Grid md={4} xs={12} item>
                    
                    <Box
                        // margin={1}
                        border="1px solid"
                        borderColor="green"
                        padding={3}
                        display="flex"
                        flexDirection="column"
                        width="100%"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-start"
                            component="div"
                        >
                            <Typography
                                variant="h5"
                                style={{
                                    display: 'inline-block',
                                    marginRight: 16,
                                }}
                            >
                                {props.currency} APY
                            </Typography>
                            {/* <Storefront /> */}
                        </Box>
                        <Typography variant="p">65.235</Typography>
                    </Box>
                </Grid>
                <Grid md={4} xs={12} item>
                    
                    <Box
                        // margin={1}
                        border="1px solid"
                        borderColor="green"
                        padding={3}
                        display="flex"
                        flexDirection="column"
                        width="100%"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-start"
                            component="div"
                        >
                            <Typography
                                variant="h5"
                                style={{
                                    display: 'inline-block',
                                    marginRight: 16,
                                }}
                            >
                                {props.currency} Total Supply
                            </Typography>
                            {/* <Storefront /> */}
                        </Box>
                        <Typography variant="p">$15</Typography>
                    </Box>
                </Grid>
                <Grid md={4} xs={12} item>
                    <Box
                        // margin={1}
                        border="1px solid"
                        borderColor="green"
                        padding={3}
                        display="flex"
                        flexDirection="column"
                        width="100%"
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <Typography
                                variant="h5"
                                style={{
                                    display: 'inline-block',
                                    marginRight: 16,
                                }}
                            >
                                Total Borrowed
                            </Typography>

                            {/* <LocalOfferOutlined /> */}
                        </Box>
                        <Typography variant="p">$2113</Typography>
                       
                    </Box>
                </Grid>
                <Grid md={4} xs={12} item>
                    <Box
                        // margin={1}
                        border="1px solid"
                        borderColor="green"
                        padding={3}
                        display="flex"
                        flexDirection="column"
                        width="100%"
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <Typography
                                variant="h5"
                                style={{
                                    display: 'inline-block',
                                    marginRight: 16,
                                }}
                            >
                                Rewards
                            </Typography>
                            {/* <DesktopWindows /> */}
                        </Box>
                        <Typography variant="p">65.23548</Typography>
                    </Box>
                    
                </Grid>
            </Grid>
            <br></br>
            <Grid xs={12} item>
                <Box
                    display="flex"
                    flexDirection="column"
                    marginBottom={3}
                    border="1px solid green"
                    borderColor={[500]}
                    padding={2}
                >
                    <Box display="flex" justifyContent="space-between">
                        <Typography
                            className={clsx(styles.textUppercase)}
                            variant="h6"
                        >
                            Trading
                        </Typography>
                        {/* <IconButton>
                            <Settings color="white" />
                        </IconButton> */}
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        flexWrap="wrap"

                        // You can stack values you the flex box column, that is how I was able to show underlined value.
                    >
                        <Typography variant="p">NFY</Typography>
                        <Box display="flex" flexDirection="column">
                            <Typography variant="p">Value</Typography>
                            <Typography variant="p">$0</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Typography variant="p">Value</Typography>
                            <Typography variant="p">$0</Typography>
                        </Box>
                      
                        
                        <Box display="flex" flexDirection="column">
                            <Typography variant="p">7d Supply APR</Typography>
                            <Typography variant="p">$500</Typography>
                        </Box>
                        
                        <Box display="flex" flexDirection="column">
                            <Typography variant="p">VALUE</Typography>
                            <Typography variant="p">$1212.45</Typography>
                            
                        </Box>
                        
                        
                        <Box>
                            
{/*                                
                            <Button className="btn btn-secondary py-2 px-3 d-inline-block mr-1">
                                Options
                            </Button> */}
                            {/* <Button className="btn btn-primary py-2 px-3 d-inline-block ml-1">
                                Details
                                <br></br>
                                
                            </Button> */}
                            
                            
                        </Box>
                        
                        
                        
                    </Box>
                </Box>
            </Grid>
           
            
            <Grid container justifyContent="center" item>
                <Carousel
                    navButtonsAlwaysVisible
                    cycleNavigation
                    indicatorIconButtonProps={{ className: 'indicator' }}
                    activeIndicatorIconButtonProps={{
                        className: 'active-indicator',
                    }}
                    autoPlay={false}
                    animation="slide"
                    indicatorContainerProps={{
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        },
                    }}
                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-6 carousel"
                >
                    <SlideOne />
                    <SlideTwo />
                    <SlideThree />
                </Carousel>
            </Grid>
        </Grid>
    );
};

export default Main;
