import {
    createEntityAdapter,
    createSlice,
    configureStore,
    createAsyncThunk,
    type EntityState,
  } from '@reduxjs/toolkit'
import { projectService } from '../../services/projectService';

export interface Project {
    id: string;           // unique identifier
    name: string;         // project name
    description?: string; // optional description
  }

  const projectAdapter = createEntityAdapter<Project>({})
  interface initialState {
    projects: EntityState<Project, string>
    loading: boolean,
    error: string | null,
  } 

  const projectState:initialState = {
    projects: projectAdapter.getInitialState(),
    loading: false,
    error: null,
  }
 
  export const fetchProjects = createAsyncThunk<Project[], void, { rejectValue: string }>(
    'projects/fetchProjects',
    async (_, { rejectWithValue }) => {
      try {
        const response = await projectService.getAll()
        return response
      } catch (error: any) {
        return rejectWithValue(error.message || 'Failed to fetch projects')
      }
    }
  )
  export const fetchProjectById = createAsyncThunk<Project, string, { rejectValue: string }>(
    'projects/fetchProjectById',
    async (id: string, { rejectWithValue }) => {
      try {
        const response = await projectService.getById(id)
        if (!response) {
          return rejectWithValue('Project not found')
        }
        return response
      } catch (error: any) {
        return rejectWithValue(error.message || 'Failed to fetch project')
      }
    }
  )
  // project as args and return
  export const createProject = createAsyncThunk<Project,Project, { rejectValue: string }>(
    'projects/createProject',
    async (projectData, { rejectWithValue }) => {
      try {
        const response = await projectService.save(projectData)
        return response
      } catch (error: any) {
        return rejectWithValue(error.message || 'Project create failed!')
      }
    }
  )
  export const updateProject = createAsyncThunk<Project ,Project , { rejectValue: string }>(
    'projects/updateProject',
    async ( data, { rejectWithValue }) => {
      try {
        const response = await projectService.update(data.id, data)
        return response
      } catch (error: any) {
        return rejectWithValue(error.message || 'Update failed!')
      }
    }
  )
  export const deleteProject = createAsyncThunk<string, string, { rejectValue: string }>(
    'projects/deleteProject',
    async (id: string, { rejectWithValue }) => {
      try {
       const response = await projectService.delete(id)
        return response
      } catch (error: any) {
        return rejectWithValue(error.message || 'Delete failed!')
      }
    }
  )
  const projectSlice = createSlice({
    name: 'projects',
    initialState: projectState,
   reducers: {},

    extraReducers: (builder) => {  
      builder
        .addCase(fetchProjects.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(fetchProjects.fulfilled, (state, action) => {
          state.loading = false
          projectAdapter.setAll(state.projects, action.payload)
        })
        .addCase(fetchProjects.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload as string
        })
        .addCase(fetchProjectById.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(fetchProjectById.fulfilled, (state, action) => {
          state.loading = false
          projectAdapter.upsertOne(state.projects, action.payload)
        })
        .addCase(fetchProjectById.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload as string
        })
        .addCase(createProject.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(createProject.fulfilled, (state, action) => {
          state.loading = false
          projectAdapter.addOne(state.projects, action.payload)
        })
        .addCase(createProject.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload as string
        })
        .addCase(updateProject.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(updateProject.fulfilled, (state, action) => {
          state.loading = false
          projectAdapter.updateOne(state.projects, { id: action.payload.id, changes: action.payload })
        })
        .addCase(updateProject.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload as string
        })
        .addCase(deleteProject.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(deleteProject.fulfilled, (state, action) => {
          state.loading = false
          projectAdapter.removeOne(state.projects, action.meta.arg)
        })
        .addCase(deleteProject.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload as string
        })
    }
  })
  export const {  } = projectSlice.actions
  export default projectSlice.reducer
