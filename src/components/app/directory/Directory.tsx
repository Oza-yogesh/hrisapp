import { useState, useEffect } from 'react'
import EmployeeTable from '../common/EmployeeTable';
import { Box, Paper } from '@mui/material';
import SearchBar from '../common/Search_Bar';

interface DisplayColumnState {
  Check_boxes: boolean,
  Id: boolean;
  Name: boolean;
  Department: boolean;
  Designation: boolean;
  Grade: boolean;
  EmployeeManager: boolean;
}

interface BoxColumnState {
  Department?: boolean;
  Designation?: boolean;
  Grade?: boolean;
  EmployeeManager?: boolean;
}

function Directory() {

  const [displayColumn, setDisplayColumn] = useState<DisplayColumnState>({
    Check_boxes: false,
    Id: false,
    Name: false,
    Department: false,
    Designation: false,
    Grade: false,
    EmployeeManager: false,
  });

  const handleDirectoryNavigation = () => {
    setDisplayColumn({
      Check_boxes: true,
      Id: true,
      Name: true,
      Department: true,
      Designation: true,
      Grade: true,
      EmployeeManager: true,
    });
  };
  const [boxCoulmns, setBoxColumns] = useState<BoxColumnState>({
      Department: true,
      Designation: true,
      Grade: true,
      EmployeeManager: true,
  })

  const onLoad = () => {
    console.log('Component has loaded');
    handleDirectoryNavigation();
  };

  useEffect(() => {
    onLoad();
  }, []);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Box
        component={Paper}
        sx={{
        width: 1200,
        mt: 5,
        p: 1,
        }}
      >
      
      <SearchBar onSearch = {handleSearch} />

      <EmployeeTable displayColumn={displayColumn} boxCoulmns={boxCoulmns} setBoxColumns={setBoxColumns} searchQuery={searchQuery} />
      
    </Box>
  )
}

export default Directory
