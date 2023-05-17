import { createSlice } from '@reduxjs/toolkit'; 
import { searchSchenduleDate } from './thunk';
import { IScheanduleState } from './IScheanduleState';

const initialState: IScheanduleState = { schedules: [], total_schedules: 0, total_schedules_canceled: 0 };

export const ScheanduleSlice = createSlice({    
    name: 'scheandule',
    initialState,
    reducers: {},
    extraReducers(builder) {
        
        builder.addCase(searchSchenduleDate.fulfilled, (state, action) => {

            if (action.payload) {

                const { responseByStatus, responseByPeriod } = action.payload;

                state.schedules = responseByPeriod.schedules;
                state.total_schedules = responseByPeriod.total_schedules;
                state.total_schedules_canceled = responseByStatus;

            }

        });

    },
});

export const ScheanduleReducer = ScheanduleSlice.reducer;
export const {  } = ScheanduleSlice.actions;