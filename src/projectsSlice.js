import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    loading: true,
    project: [],
    darkMode: false,
  },
  reducers: {
    fetchProject: (state) => {
      state.loading = true;
    },
    fetchProjectSuccess: (state, { payload: project }) => {
      state.project = project;
      state.loading = false;
    },
    fetchProjectError: (state) => {
      state.loading = false;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {
  fetchProject,
  fetchProjectSuccess,
  fetchProjectError,
  toggleDarkMode,
} = projectSlice.actions;

export const selectProjectState = (state) => state.project;
export const selectProject = (state) => selectProjectState(state).project;
export const selectLoading = (state) => selectProjectState(state).loading;
export const selectDarkMode = (state) => selectProjectState(state).darkMode;

export default projectSlice.reducer;
