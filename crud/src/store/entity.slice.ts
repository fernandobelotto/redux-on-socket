import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EntityState {
  entities: { name: string; id: string }[];
}

const initialState: EntityState = {
  entities: [],
};

const entitySlice = createSlice({
  name: "entities",
  initialState,
  reducers: {
    addEntity: (state, action: PayloadAction<{ name: string; id: string }>) => {
      state.entities.push(action.payload);
    },
    removeEntity: (state, action: PayloadAction<string>) => {
      state.entities = state.entities.filter(
        (entity) => entity.id !== action.payload
      );
    },
    updateEntity: (
      state,
      action: PayloadAction<{ name: string; id: string }>
    ) => {
      state.entities = state.entities.map((entity) => {
        if (entity.id === action.payload.id) {
          return action.payload;
        }
        return entity;
      });
    },
  },
});

export const { addEntity, removeEntity, updateEntity } = entitySlice.actions;

export const entityReducer = entitySlice.reducer;
