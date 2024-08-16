import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Rule {
  rule: string;
  employees: number;
}

interface RulesState {
  rules: Rule[];
}

const initialState: RulesState = {
  rules: [{ rule: "New Rule", employees: 12   }],
};

const rulesSlice = createSlice({
  name: "rules",
  initialState,
  reducers: {
    addRules: (state, action: PayloadAction<Rule>) => {
      state.rules.push(action.payload);
    },
  },
});

export const { addRules } = rulesSlice.actions;
export default rulesSlice.reducer;
