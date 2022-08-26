import React from 'react'
import './Filter.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Fade from 'react-reveal/Fade'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/productslice'
import { useEffect } from 'react';


const Filter = () => {
    const [filteredProducts, setFilteredProducts] = useState([])
    const products = useSelector(state=>state.products)
    console.log(products);
    const dispatch = useDispatch()
    const [data, setData] = useState([])

    const [openSize, setOpenSize] = React.useState(false);
    const [openSort, setOpenSort] = React.useState(false);

    
    const [size, setSize] = useState('');
    const [sort, setSort] = useState('');

    const handleSize = (e) => {
        setSize(e.target.value);
        const copiedProducts = [...products];
        if (e.target.value === "ALL") {
          dispatch(productActions.sizedProducts(data));
        } else {
          const filteredData = copiedProducts.filter(product => product.size.indexOf(e.target.value) !== -1);
          setFilteredProducts(filteredData)
        }
      }
    
      const handleSort = (e) => {
        setSort(e.target.value);
        const copiedProducts = [...products];
        const sortedProducts = copiedProducts.sort(function (a, b) {
          if (e.target.value === "Latest") {
            return a.id < b.id ? 1 : -1
          } else if (e.target.value === "Lowest") {
            return a.price - b.price
          } else if (e.target.value === "Highest") {
            return b.price - a.price
          } else return copiedProducts
        });
        dispatch(productActions.sizedProducts(sortedProducts));

    
      }
    


    const handleCloseSize = () => {
        setOpenSize(false);
    };

    const handleOpenSize = () => {
        setOpenSize(true);
    };

    const handleCloseSort = () => {
        setOpenSort(false);
    };

    const handleOpenSort = () => {
        setOpenSort(true);
    };



    return (
        <Fade right cascade>

            <div className="filter-container"> 
                <h3>The Number of Products : {products.length}</h3>
                <Button sx={{ display: 'block', mt: 2, color: '#725504',fontWeight:'bold'}} onClick={handleOpenSize}>
                    Filter By Size
                </Button>
                <FormControl sx={{ m: 1, minWidth: 200,'&.mui-selected':{color: '#725504'} }}>
                    <InputLabel sx = {{color : '#725504', '&.Mui-focused':{color:'#725504'}}} id="demo-controlled-open-select-label">Sizes</InputLabel>
                    <Select
                    className="SelectFilter"
                    sx = {{width:"100%",color : '#725504',border:'none','&.Mui-error':{outline: 'none',borderColor:'none',color:'yellow'}}}
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={openSize}
                    onClose={handleCloseSize}
                    onOpen={handleOpenSize}
                    value={size}
                    label="Sizes"
                    onChange={handleSize} 
                    >
                    <MenuItem value="ALL" sx = {{color : '#725504'}}>
                        <em>ALL</em>
                    </MenuItem>
                    <MenuItem sx = {{color : '#725504'}} value="XS">XS</MenuItem>
                    <MenuItem sx = {{color : '#725504'}} value="S">S</MenuItem>
                    <MenuItem sx = {{color : '#725504'}} value="M">M</MenuItem>
                    <MenuItem sx = {{color : '#725504'}} value="L">L</MenuItem>
                    <MenuItem sx = {{color : '#725504'}} value="XL">XL</MenuItem>
                    </Select>
                </FormControl>

                <Button sx={{ display: 'block', mt: 2, color: '#725504', fontWeight:'bold'}} onClick={handleOpenSort}>
                    Filter By Order
                </Button>
                <FormControl sx={{ m: 1, minWidth: 200,'&.mui-selected':{color: '#725504'} }}>
                    <InputLabel sx = {{color : '#725504', '&.Mui-focused':{color:'#725504'}}} id="demo-controlled-open-select-label">Sorting</InputLabel>
                    <Select
                    className="SelectFilter"
                    sx = {{color : '#725504',border:'none','&.Mui-error':{outline: 'none',borderColor:'none',color:'yellow'}}}
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={openSort}
                    onClose={handleCloseSort}
                    onOpen={handleOpenSort}
                    value={sort}
                    label="Sorting"
                    onChange={handleSort} 
                    >
                    <MenuItem sx = {{color : '#725504'}} value={"Latest"}>Latest</MenuItem>
                    <MenuItem sx = {{color : '#725504'}} value={"Lowest"}>Lowest</MenuItem>
                    <MenuItem sx = {{color : '#725504'}} value={"Highest"}>Highest</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </Fade>
    )
}

export default Filter;
