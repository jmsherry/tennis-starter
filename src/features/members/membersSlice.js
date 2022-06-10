import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { fetchMembers, fetchMember, addMember, updateMember, removeMember } from './memberAPI';

const initialState = {
  members: [],
  member: null,
  status: 'idle',
  error: null,
};

export const getMembers = createAsyncThunk(
  'members/fetchMembers',
  async (creds) => {
    const response = await fetchMembers(creds);
    return response;
  }
);

export const getMember = createAsyncThunk(
  'members/fetchMember',
  async (id) => {
    const response = await fetchMember(id);
    return response;
  }
);

export const add = createAsyncThunk(
  'members/addMember',
  async (data) => {
    const response = await addMember(data);
    return response;
  }
);

export const update = createAsyncThunk(
  'members/updateMember',
  async (updatedMember) => {
    console.log('in thunk pre', updatedMember)
    await updateMember(updatedMember);
    console.log('in thunk return', updatedMember)
    return updatedMember;
  }
);

export const remove = createAsyncThunk(
  'members/removeMember',
  async (id) => {
    const response = await removeMember(id);
    return response;
  }
);

export const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMembers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMembers.fulfilled, (state, action) => {
        console.log(action)
        state.status = 'idle';
        state.error = null;
        state.members = action.payload;
      })
      .addCase(getMembers.rejected, (state, action) => {
        state.status = 'errored';
        state.error = action.error.message;
      })
      .addCase(getMember.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMember.fulfilled, (state, action) => {
        console.log(action)
        state.status = 'idle';
        state.error = null;
        state.member = action.payload;
      })
      .addCase(getMember.rejected, (state, action) => {
        state.status = 'errored';
        state.error = action.error.message;
      })
      .addCase(add.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(add.fulfilled, (state, action) => {
        console.log(action)
        state.status = 'idle';
        state.error = null;
        state.members.push(action.payload);
      })
      .addCase(add.rejected, (state, action) => {
        state.status = 'errored';
        state.error = action.error.message;
      })
      .addCase(update.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(update.fulfilled, (state, action) => {
        console.log('update fullfilled', action)
        const updatedMember = action.payload;
        const idx = state.members.findIndex((user) => user._id === updatedMember._id);
        // const member = state.members[idx];
        // for(const [key, val] of Object.entries(diffs)){
          // state.members[idx][key] = val;
        // }
        state.members[idx] = updatedMember;
        state.status = 'idle';
        state.error = null;
        console.log(current(state));
      })
      .addCase(update.rejected, (state, action) => {
        state.status = 'errored';
        state.error = action.error.message;
      })
      .addCase(remove.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(remove.fulfilled, (state, action) => {
        // console.log(action)
        const id = action.payload;
        const idx = state.members.findIndex((user) => user._id === id);
        state.members.splice(idx, 1); // mutate OK because of immer
        state.status = 'idle';
        state.error = null;
      })
      .addCase(remove.rejected, (state, action) => {
        state.status = 'errored';
        state.error = action.error.message;
      });
  },
});

// export const { logout } = memberSlice.actions;

export const selectMembers= (state) => state.members.members;


export default memberSlice.reducer;
