import { useState, useEffect } from 'react'
import EmployeeTable from '../../common/EmployeeTable';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Check } from '@mui/icons-material';
import Search_Bar from '../../common/Search_Bar';

interface DisplayColumnState {
  Check_boxes: boolean,
  Id: boolean;
  Avatar: boolean;
  Name: boolean;
  OfficialMail: boolean;
  PhoneNumber: boolean;
  Dob: boolean;
  PanNumber: boolean;
  PermanentAddress: boolean;
  CurrentAddress: boolean;
  PersonalMail: boolean;
  AlternateMobile: boolean;
  BloodGroup: boolean;
  MaritalStatus: boolean;
  Education: boolean;
  FamilyDetails: boolean;
  EmergencyContacts: boolean;
}

interface BoxColumnState {
  OfficialMail?: boolean;
  PhoneNumber?: boolean;
  Dob?: boolean;
  PanNumber?: boolean;
  PermanentAddress?: boolean;
  CurrentAddress?: boolean;
  PersonalMail?: boolean;
  AlternateMobile?: boolean;
  BloodGroup?: boolean;
  MaritalStatus?: boolean;
  Education?: boolean;
  FamilyDetails?: boolean;
  EmergencyContacts?: boolean;
}

function AdminVerify() {

  const [displayColumn, setDisplayColumn] = useState<DisplayColumnState>({
    Check_boxes: false,
    Id: false,
    Avatar: false,
    Name: false,
    OfficialMail: false,
    PhoneNumber: false,
    Dob: false,
    PanNumber: false,
    PermanentAddress: false,
    CurrentAddress: false,
    PersonalMail: false,
    AlternateMobile: false,
    BloodGroup: false,
    MaritalStatus: false,
    Education: false,
    FamilyDetails: false,
    EmergencyContacts: false
  });

  const handleAdminVerifyNavigation = () => {
    setDisplayColumn({
      Check_boxes: true,
      Id: true,
      Avatar: true,
      Name: true,
      OfficialMail: true,
      PhoneNumber: true,
      Dob: true,
      PanNumber: true,
      PermanentAddress: true,
      CurrentAddress: true,
      PersonalMail: true,
      AlternateMobile: true,
      BloodGroup: true,
      MaritalStatus: true,
      Education: true,
      FamilyDetails: true,
      EmergencyContacts: true
    });
  };

  const [boxCoulmns, setBoxColumns] = useState<BoxColumnState>({
      OfficialMail: true,
      PhoneNumber: true,
      Dob: true,
      PanNumber: true,
      PermanentAddress: true,
      CurrentAddress: true,
      PersonalMail: true,
      AlternateMobile: true,
      BloodGroup: true,
      MaritalStatus: true,
      Education: true,
      FamilyDetails: true,
      EmergencyContacts: true
  })

  const onLoad = () => {
    console.log('Component has loaded');
    handleAdminVerifyNavigation();
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
      ml: 5,
      mt: 5,
      p: 1,
      }}
    >
      <Box sx={{display: 'flex', ml: 1, justifyContent: 'space-between', alignItems: 'center'}} >
          
        <Box sx={{ display: 'flex', gap: 2 }} >
          <Typography sx={{ px: 2, py: 0.3, borderRadius: '3px', bgcolor: 'grey', width: 'fit-content'}} >0</Typography>
          
          <Search_Bar onSearch={handleSearch} />

        </Box>

        <Box sx={{ display: 'flex', gap: 2, mr: 3 }} >
          <Button variant="contained" sx={{ height: '2rem', bgcolor:'#fc7516' }} >Notify</Button>
          <Button variant="contained" sx={{ height: '2rem', bgcolor: '#0093FF' }} >Verify</Button>
        </Box>

      </Box>

      <EmployeeTable displayColumn={displayColumn} boxCoulmns={boxCoulmns} setBoxColumns={setBoxColumns} searchQuery={searchQuery} />
      
      <Box sx={{ ml: 1 }} >
        <Typography><Check sx={{width: '0.7rem', height: '0.7rem', padding: '2px', color: 'white', stroke: 'white', strokeWidth: '0.1rem', bgcolor: '#fc7516', borderRadius: '50%'}} /> - Completed information.</Typography>
        <Typography><Check sx={{width: '0.7rem', height: '0.7rem', padding: '2px', color: 'white', stroke: 'white', strokeWidth: '0.1rem', bgcolor: '#5BD94E', borderRadius: '50%'}} /> - Verified information (Employee will not be able to edit this information).</Typography>
        
        <Typography sx={{}} >* Information will be verified for the fields that have the necessary proofs attached.</Typography>
        <Typography>* Notification Email/SMS will be sent to employees for fields with incomplete data.</Typography>
      </Box>
      
    </Box>
  )
}

export default AdminVerify
