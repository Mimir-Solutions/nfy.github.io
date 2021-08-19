import {
    Box,
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@material-ui/core';
import React from 'react';

function Page3({ selectedBlocks, selectedFacets }) {
    return (
        <Grid item container xs={12} spacing={3}>
            <Grid xs={12} md={8} item>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>Value</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {selectedBlocks.map((block) => (
                                <TableRow key={block}>
                                    <TableCell>{block}</TableCell>
                                    <TableCell>1</TableCell>
                                    <TableCell>
                                        <Button variant="text">Edit</Button>{' '}
                                    </TableCell>
                                </TableRow>
                            ))}
                            {selectedFacets.map((facet) => (
                                <TableRow key={facet.name}>
                                    <TableCell>{facet.name}</TableCell>
                                    <TableCell>{facet.value}</TableCell>
                                    <TableCell>
                                        <Button variant="text">Edit</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid xs={12} md={4} item>
                <Box padding={3} border="1px solid green">
                    <Box padding={1} border="1px solid green">
                        {selectedBlocks.map((block) => (
                            <Typography key={block}>
                                {block}: &nbsp;1 NFY
                            </Typography>
                        ))}
                        {selectedFacets.map((facet) => (
                            <Typography key={facet.name}>
                                {facet.name}:&nbsp;{facet.value}&nbsp;NFY
                            </Typography>
                        ))}
                        <Box marginTop={3}>
                            <Typography>
                                Total:&nbsp;
                                {selectedFacets.reduce(
                                    (prevSum, currentFacet) =>
                                        prevSum + Number(currentFacet.value),
                                    0
                                ) +
                                    selectedBlocks.reduce(
                                        (prevSum) => prevSum + 1,
                                        0
                                    )}
                                &nbsp;NFY
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" marginTop={3}>
                        <Button variant="contained" color="secondary">Deploy</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Page3;
