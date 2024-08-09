import create from 'zustand';

export const useStore = create((set) => ({
    data: {},
  formatting: {},
  selectedCell: null,
  updateData: (id, value) =>
    set((state) => ({
      data: { ...state.data, [id]: value },
    })),
  updateFormatting: (id, format) =>
    set((state) => ({
      formatting: {
        ...state.formatting,
        [id]: { ...state.formatting[id], ...format },
      },
    })),
  setSelectedCell: (id) => set({ selectedCell: id }),
  setSearchQuery: (query) => set({ searchQuery: query }),
      validationRules: {},
  setValidationRule: (id, rule) =>
    set((state) => ({
      validationRules: { ...state.validationRules, [id]: rule },
    })),
    data: {},
  history: [],
  redoHistory: [],
  
  updateData: (id, value) =>
    set((state) => {
      const newData = { ...state.data, [id]: value };
      return {
        data: newData,
        history: [...state.history, state.data],
        redoHistory: [],
      };
    }),

  undo: () =>
    set((state) => {
      if (state.history.length === 0) return;
      const lastState = state.history.pop();
      return {
        data: lastState,
        redoHistory: [...state.redoHistory, state.data],
      };
    }),

  redo: () =>
    set((state) => {
      if (state.redoHistory.length === 0) return;
      const nextState = state.redoHistory.pop();
      return {
        data: nextState,
        history: [...state.history, state.data],
      };
    }),
  }));
  