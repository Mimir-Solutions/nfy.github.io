import {
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
                            {selectedFacets.map((facet) => (
                                <TableRow key={facet.name}>
                                    <TableCell>{facet.name}</TableCell>
                                    <TableCell>{facet.value}</TableCell>
                                    <TableCell>
                                        <Button variant="text">Edit</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {selectedBlocks.map((block) => (
                                <TableRow key={block}>
                                    <TableCell colSpan={2}>{block}</TableCell>
                                    <TableCell>
                                        <Button variant="text">Edit</Button>{' '}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid xs={12} md={4} item>
                <Typography>Deploy</Typography>
            </Grid>
        </Grid>
    );
}

export default Page3;
