import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '6bd08f85-d221-49a0-a157-f377b6ad30f1',
    skuId: '7e42bfa7-cb00-4b2c-b3a9-68bfc7e89d84',
};

const productIdSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        setProductId: (state, action) => {
            state.id = action.payload.id;
            state.skuId = action.payload.skuId;
            console.log('aqui é reducer')
        }
    }
})

export const { setProductId } = productIdSlice.actions;
export default productIdSlice.reducer;