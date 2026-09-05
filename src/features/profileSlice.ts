import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface ProfileData {
  name: string;
  subtitle: string;
  birthDate: string;
  location: string;
  height: string;
  personalDetails: {
    religion: string;
    caste: string;
    dateOfBirth: string;
    height: string;
  };
  educationProfession: {
    education: string;
    occupation: string;
    company: string;
  };
  familyBackground: {
    fathersName: string;
    fathersOccupation: string;
    mothersName: string;
    mothersOccupation: string;
    siblings: string;
    unclesName?: string;
    unclesOccupation?: string;
    auntysName?: string;
    auntysOccupation?: string;
    unclesChildren?: string;
    familyType: string;
    familyStatus: string;
    nativePlace: string;
  };
  contactDetails: {
    currentAddress: string;
    permanentAddress: string;
    whatsappNumber?: string;
    mobileNumbers?: { relation: string, number: string, raw: string }[];
    emailId: string;
  };
}

interface ProfileState {
  data: ProfileData | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  data: null,
  loading: false,
  error: null,
};

// Async thunk to fetch profile from our Express backend
export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async () => {
    const response = await fetch('/api/profile');
    if (!response.ok) {
      throw new Error('Failed to fetch profile data');
    }
    const data = await response.json();
    return data as ProfileData;
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch profile data';
      });
  },
});

export default profileSlice.reducer;
