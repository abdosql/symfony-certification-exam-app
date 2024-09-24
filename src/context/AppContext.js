import React, { createContext, useReducer, useContext } from 'react';
import questionBank from '../data/questionBank';
import { saveAs } from 'file-saver';

const AppContext = createContext();

const initialState = {
  currentExam: null,
  examHistory: [],
  defaultQuestions: questionBank,
  uploadedQuestions: null,
};

function appReducer(state, action) {
  switch (action.type) {
    case 'START_EXAM':
      return { ...state, currentExam: action.payload };
    case 'END_EXAM':
      const updatedExamHistory = [...state.examHistory, action.payload];
      return {
        ...state,
        currentExam: null,
        examHistory: updatedExamHistory,
      };
    case 'UPLOAD_QUESTIONS':
      return {
        ...state,
        uploadedQuestions: action.payload,
      };
    default:
      return state;
  }
}

// Remove the saveResultsToFile function
// function saveResultsToFile(examHistory) {
//   const blob = new Blob([JSON.stringify(examHistory, null, 2)], { type: 'application/json' });
//   saveAs(blob, 'exam_results.json');
// }

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}