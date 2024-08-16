import { Search} from '@mui/icons-material'
import { TextField } from '@mui/material'
import { useState } from 'react';

interface SearchBoxCompProps {
  onSearch: (query: string) => void;
}

function Search_Bar({ onSearch }: SearchBoxCompProps) {

  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <TextField
        variant="standard"
        placeholder="Search..."
        value={inputValue}
        onChange={handleChange}
        InputProps={{
        endAdornment: <Search/>
        }}
        sx={{ ml: 1 }}
    />
  )
}

export default Search_Bar
