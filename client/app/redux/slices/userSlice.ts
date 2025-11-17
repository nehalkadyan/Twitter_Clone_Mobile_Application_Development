import {createSlice} from "@reduxjs/toolkit"

// Slices -> Action + Reducer
// initial State
const initialState = {
    currentUser : null // {}
}
// user slice
const userSlice = createSlice({
  name : "user",
  initialState,
  // reducers -> functions that get the work done
  reducers : {
     // 1st reducer
     signInSuccessful : (state, action) => {
        state.currentUser = action.payload;
     }
  }
})

//export actions

export const {signInSuccessful} = userSlice.actions;
// export reducer
export default userSlice.reducer;



