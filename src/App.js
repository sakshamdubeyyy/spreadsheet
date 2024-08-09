import React from 'react';
import Grid from './components/Grid';
import FormattingToolbar from './components/FormattingToolbar';
import Search from './components/Search';
import UndoRedo from './components/UndoRedo';

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Spreadsheet Application</h1>
      <UndoRedo />
      <Search />
      <FormattingToolbar />
      <Grid />
    </div>
  );
};

export default App;
