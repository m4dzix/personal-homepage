import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    loading: true,
    project: [],
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
  },
});

export const {
  fetchProject,
  fetchProjectSuccess,
  fetchProjectError,
} = projectSlice.actions;

export const selectProjectState = (state) => state.project;
export const selectProject = (state) => selectProjectState(state).project;

export default projectSlice.reducer;
