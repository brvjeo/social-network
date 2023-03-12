import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsyncState, AsyncStatus } from '@/types/runtime-types';
import { IUser, IUserInfo } from '@/types/data-types';
import { fetchInfo, fetchUser, fetchUserAfterReload, login } from '@store/slices/userSlice/thunks';

type FetchedData<D> = AsyncState & {
	data: D | null;
};

type State = {
	authorized: AsyncState & {
		user: IUser | null;
	};
	current: {
		user: FetchedData<IUser>;
		info: FetchedData<IUserInfo>;
	};
};

const initialState: State = {
	authorized: {
		user: null,
		error: null,
		status: 'idle',
	},
	current: {
		user: {
			status: 'idle',
			data: null,
			error: null,
		},
		info: {
			status: 'idle',
			data: null,
			error: null,
		},
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.rejected, (state, action) => {
				state.authorized.status = 'failed';
				state.authorized.error = action.error?.message || String(action.error);
			})
			.addCase(login.pending, (state) => {
				state.authorized.status = 'loading';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.authorized.user = action.payload;
				state.authorized.status = 'succeed';
			});

		builder
			.addCase(fetchUserAfterReload.rejected, (state, action) => {
				state.authorized.status = 'failed';
				state.authorized.error = action.error?.message || String(action.error);
			})
			.addCase(fetchUserAfterReload.pending, (state) => {
				state.authorized.status = 'loading';
			})
			.addCase(fetchUserAfterReload.fulfilled, (state, action) => {
				state.authorized.user = action.payload;
				state.authorized.status = 'succeed';
			});

		builder
			.addCase(fetchUser.rejected, (state, action) => {
				state.current.user.status = 'failed';
				state.current.user.error = action.error?.message || String(action.error);
			})
			.addCase(fetchUser.pending, (state) => {
				state.current.user.status = 'loading';
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.current.user.status = 'succeed';
				state.current.user.data = action.payload;
			});

		builder
			.addCase(fetchInfo.rejected, (state, action) => {
				state.current.info.status = 'failed';
				state.current.info.error = action.error?.message || String(action.error);
			})
			.addCase(fetchInfo.pending, (state) => {
				state.current.info.status = 'loading';
			})
			.addCase(fetchInfo.fulfilled, (state, action) => {
				state.current.info.status = 'succeed';
				state.current.info.data = action.payload;
			});
	},
});

export default userSlice.reducer;
