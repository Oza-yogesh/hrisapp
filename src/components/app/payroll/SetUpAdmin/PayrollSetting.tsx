import React, { useState } from 'react';
import { FormControl, Select, MenuItem, Switch, Typography, Grid, Paper, SelectChangeEvent, Button } from '@mui/material';

const PayrollSettings: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState<number>(1);
    const [hasPF, setHasPF] = useState<boolean>(false);
    const [hasESI, setHasESI] = useState<boolean>(false);
    const [hasPFCeil, sethasPFCeil] = useState(false);
    const [deductProfessionalTax, setDeductProfessionalTax] = useState<boolean>(true);
    const [employeeContribution, setEmployeeContribution] = useState<string>('Basic * 12%');

    const handleDayChange = (event: SelectChangeEvent<number>) => {
        setSelectedDay(Number(event.target.value));
    };

    const handleContributionChange = (event: SelectChangeEvent<string>) => {
        setEmployeeContribution(event.target.value as string);
    };

    return (
        <Grid container spacing={2} marginTop="20px">
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
                    <Grid item xs={6} md={6}>
                        <Typography sx={{ display: "flex", justifyContent: 'space-between', fontSize: '0.8rem' }}>
                            Pay Cycle:
                            <Typography sx={{ display: "flex", gap: "10px", fontSize: '0.8rem' }}>
                                From
                                <Select value={selectedDay} onChange={handleDayChange} size='small'>
                                    {[...Array(31)].map((_, index) => (
                                        <MenuItem key={index + 1} value={index + 1}>
                                            {index + 1}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <p>To 31</p>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography variant="body1" sx={{ display: "flex", justifyContent: 'space-between', fontSize: '0.8rem' }}>
                            Does your company have PF?
                            <Switch checked={hasPF} onChange={() => setHasPF(!hasPF)} />
                        </Typography>
                    </Grid>
                    {hasPF && (
                        <>
                            <Grid item xs={6} md={6}>
                                <Typography variant="body1" sx={{ display: "flex", justifyContent: 'space-between', fontSize: '0.8rem' }}>
                                    Employee Contribution
                                    <FormControl>
                                        <Select value={employeeContribution} onChange={handleContributionChange} size='small'>
                                            <MenuItem value={'Basic * 12%'}>Basic * 12%</MenuItem>
                                            <MenuItem value={'Basic + Special Allowance * 10%'}>Basic + Special Allowance * 10%</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Typography>
                            </Grid>
                        </>
                    )}
                    <Grid item xs={6} md={6}>
                        <Typography variant="body1" sx={{ display: "flex", justifyContent: 'space-between', fontSize: '0.8rem' }}>
                            PF Ceiling at Rs. 15000
                            <Switch checked={hasPFCeil} onChange={() => sethasPFCeil(!hasPFCeil)} />
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography variant="body1" sx={{ display: "flex", justifyContent: 'space-between', fontSize: '0.8rem' }}>
                            Does your company have ESI?
                            <Switch checked={hasESI} onChange={() => setHasESI(!hasESI)} />
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography variant="body1" sx={{ display: "flex", justifyContent: 'space-between', fontSize: '0.8rem' }}>
                            Do you deduct Professional Tax?
                            <Switch checked={deductProfessionalTax} onChange={() => setDeductProfessionalTax(!deductProfessionalTax)} />
                        </Typography>
                    </Grid>
                    {!hasPF && (
                        <Button variant="contained" sx={{ marginLeft: "140vh", fontSize: '0.8rem' }}>Save</Button>
                    )}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default PayrollSettings;
