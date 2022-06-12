import React from 'react'
import { Stack, Grid, Button } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/system';

const Payments = () => {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <> <div className='border border-gray-200'></div>

            <Stack spacing={2} p={2} justifyContent="space-between" alignItems="center">
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%"}}>
                    <div className='space-y-3'>
                        <h2 className='font-bold'>Payment Information</h2>
                        <p>Choose your method of Payment</p>
                    </div>
                    <div className='flex flex-row space-x-6'>
                        <img src="/img/visa.png" className='w-10 cursor-pointer' />
                        <img src="/img/paypal.png" className='w-10 cursor-pointer' />
                    </div>
                </Stack>
                <Grid spacing={3} container alignItems="center">
                    <Grid item xs={12} sm={12} md={6}>
                        <Box P={2}  sx={{ backgroundImage: "linear-gradient(to right top, #855fa0, #9a5b95, #aa5887, #b55778, #bb5a68)", borderRadius: "7px" }} className="w-[full] mx-auto md:w-4/5 h-[300px]">
                            <div className='w-[85%] md:w-[80%] mx-auto p-3'>
                                <Stack spacing={4}>
                                    <p className='text-white font-bold'>Card Number</p>
                                    <p className='text-white font-bold'>4325 2356 3245 6423</p>
                                    <p className='text-white font-bold'>Expiration Date</p>
                                    <p className='text-white font-bold'>02/26</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-white font-bold'>John Doe</p>
                                        <img src="/img/Mastercard.png" className='w-20 object-cover' />
                                    </div>
                                </Stack>
                            </div>
                        </Box>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={6} sx={{ width: "100%" }}>
                        <Grid item xs={12} sm={12} md={6} >
                            <Stack direction="column" spacing={3} >
                                <Stack direction={{xs:"column",md:"row"}} spacing={4} justifyContent="space-between" alignItems="center" >
                                    <div className='space-y-4  w-full'>
                                        <p>Credit Card number</p>
                                        <input className='py-2 px-6 rounded-md border border-gray-500' placeholder='4567 1234 5323 5438' />
                                    </div>
                                    <div className='space-y-4 w-full'>
                                        <p>Expiration date</p>
                                        <input className='py-2 px-6 rounded-md border  border-gray-500' placeholder='03/65' />
                                    </div>
                                </Stack>
                                <Stack direction={{xs:"column",md:"row"}} spacing={3} justifyContent="space-between" alignItems="center">
                                    <div className='space-y-4 w-full'>
                                        <p>Security Code</p>
                                        <input className='py-2 px-6 rounded-md border  border-gray-500' placeholder='420' />
                                    </div>
                                    <div className='space-y-4 w-full'>
                                        <p>Expiration date</p>
                                        <input className='py-2 px-6 rounded-md border border-gray-500' placeholder='100275' />
                                    </div>

                                </Stack>
                                <div className='space-x-3 flex items-center flex-row'>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    <p className='text-[11px]'>Use this Card for the Next time Purchase</p>
                                </div>

                            </Stack>

                        </Grid>
                        <button className='bg-blue-600 text-white outline-none border-none py-3 px-6 w-[87%]'>Add Card</button>
                    </Grid>
                </Grid>

            </Stack>
            <div className='border border-gray-200'></div>
            <Stack  direction="row" justifyContent="space-between" alignItems="center" p={2}>
                <Stack direction="column" spacing={3}>
                    <p className='font-bold font-serif'>Subtotal</p>
                    <p className='font-bold font-serif'>Estimated Tax</p>
                    <p className='font-bold font-serif'>Promotional Code</p>
                </Stack>
                <Stack direction="column" spacing={3}>
                    <p className='font-bold font-serif'>$2,497</p>
                    <p className='font-bold font-serif'>$119.64</p>
                    <p className='font-bold font-serif'>$-60</p>
                </Stack>
            </Stack>
            <Stack p={2} direction="row" justifyContent="space-between" alignItems="center" className='space-x-8'>
                <button className='bg-blue-600 rounded-md text-white outline-none border-none sm:py-4 sm:px-2 md:py-3 md:px-8'>Complete Payment</button>
                <p className='font-[900] text-[15px] md:text-[20px] font-serif'>TOTAL :$2556.64</p>
            </Stack>
        </>
    )
}

export default Payments