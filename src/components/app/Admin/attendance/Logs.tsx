import { useState, useEffect } from 'react'
import EmployeeTable from '../../common/EmployeeTable';
import SearchBar from '../../common/Search_Bar';
import { Box, Paper, Typography } from '@mui/material';
import ButtonGlobe from '../../common/ButtonGlobe';
import { Upload } from '@mui/icons-material';
import DatePickerBox from '../../common/DatePickerBox';

interface DisplayColumnState {
  Check_boxes?: boolean,
  Id: boolean;
  Name: boolean;
  Status: boolean;
  InTime: boolean;
  OutTime: boolean;
  WorkDuration: boolean;
  Location: boolean;
  Department2: boolean;
  Grade2: boolean;
  Action: boolean;
}

interface BoxColumnState {
  Status?: boolean;
  InTime?: boolean;
  OutTime?: boolean;
  WorkDuration?: boolean;
  Location?: boolean;
  Department2?: boolean;
  Grade2?: boolean;
}

function Logs() {

  const [displayColumn, setDisplayColumn] = useState<DisplayColumnState>({
    Check_boxes: false,
    Id: false,
    Name: false,
    Status: false,
    InTime: false,
    OutTime: false,
    WorkDuration: false,
    Location: false,
    Department2: false,
    Grade2: false,
    Action: false
  });

  const handleAttendenceNavigation = () => {
    setDisplayColumn({
      Check_boxes: true,
      Id: true,
      Name: true,
      Status: true,
      InTime: true,
      OutTime: true,
      WorkDuration: true,
      Location: true,
      Department2: true,
      Grade2: true,
      Action: true,
    });
  };

  const [boxCoulmns, setBoxColumns] = useState<BoxColumnState>({
        Status: true,
        InTime: true,
        OutTime: true,
        WorkDuration: true,
        Location: true,
        Department2: true,
        Grade2: true,
  })

  const onLoad = () => {
    console.log('Component has loaded');
    handleAttendenceNavigation();
  };

  useEffect(() => {
    onLoad();
  }, []);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
      <Box sx={{ width: 1200, bgcolor: 'transparent', mt: 5 }} >
        <Box sx={{ ml: 1, my: 2, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
          <Typography sx={{ fontSize: '1.5rem', fontWeight: '500' }} >Attendance Logs</Typography>
          <DatePickerBox/>
        </Box>

        <Box
          component={Paper}
          sx={{
            width: 1200,
            mb: 5,
            p: 1,
            pl: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
              <SearchBar onSearch = {handleSearch} />
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 5, gap: 2 }} >
                <ButtonGlobe icon={<Upload  sx = {{rotate :"180deg"}}/>} iconColor={"white"} color={"black"} bgColor={"#ff002a"} title={'Import'} />
                <ButtonGlobe icon={<Upload/>} iconColor={"white"} color={"black"} bgColor={"#0093FF"} title={'Export'} />
              </Box>
          </Box>
          <EmployeeTable displayColumn={displayColumn} boxCoulmns={boxCoulmns} setBoxColumns={setBoxColumns} searchQuery={searchQuery} />
        
        </Box>
        
      </Box>
  )
}

export default Logs
