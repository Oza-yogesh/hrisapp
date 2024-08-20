import { useEffect, useState } from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { getRequest } from "../../../api/Api";
import { GET_COMPANY_DATA } from "../../../api/Server";
import { useQuery } from "@tanstack/react-query";

// Define an interface for the company data
interface CompanyData {
  id: string;
  registeredCompanyName: string;
  brandName: string;
  companyOfficialEmail: string;
  companyOfficialContact: string;
  domainName: string;
  industryType: string;
}

export default function Overview() {
  const [companyData, setCompanyData] = useState<CompanyData[]>([]);

  // get company data
  useEffect(() => {
    getRequest(GET_COMPANY_DATA)
      .then((response) => setCompanyData(response.data))
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  // const { isPending, error, data, isFetching } = useQuery({
  //   queryKey: ["companyData"],
  //   queryFn: async () => {
  //     const response = await getRequest(GET_COMPANY_DATA);
  //     return response.data;
  //   },
  // });
  // console.log(isPending, error, data, isFetching);
  return (
    <Grid container spacing={2} marginTop="20px">
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
          {companyData.map((company: any) => (
            <div key={company.id}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    textTransform="uppercase"
                    color="#936c6c"
                    fontWeight="bold"
                  >
                    Overview
                  </Typography>
                  <Divider
                    variant="fullWidth"
                    sx={{ backgroundColor: "#424242" }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2" fontWeight="bold">
                    Registered Company Name
                  </Typography>
                  <Typography variant="body2" color="#808080">
                    {company.registeredCompanyName}
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2" fontWeight="bold">
                    Brand Name
                  </Typography>
                  <Typography variant="body2" color="#808080">
                    {company.brandName}
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2" fontWeight="bold">
                    Company Official Email
                  </Typography>
                  <Typography variant="body2" color="#808080">
                    {company.companyOfficialEmail}
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2" fontWeight="bold">
                    Company Official Contact
                  </Typography>
                  <Typography variant="body2" color="#808080">
                    {company.companyOfficialContact}
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2" fontWeight="bold">
                    Website
                  </Typography>
                  <Typography variant="body2" color="#808080">
                    nwssoft.com
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2" fontWeight="bold">
                    Domain Name
                  </Typography>
                  <Typography variant="body2" color="#808080">
                    {company.domainName}
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body2" fontWeight="bold">
                    Industry Type
                  </Typography>
                  <Typography variant="body2" color="#808080">
                    {company.industryType}
                  </Typography>
                </Grid>

                <Grid item xs={6} />
              </Grid>
            </div>
          ))}
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                textTransform="uppercase"
                color="#936c6c"
                fontWeight="bold"
              >
                Social Profile
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ backgroundColor: "#424242" }}
              />
            </Grid>
            <Grid item xs={12} spacing={2}>
              <LinkedInIcon
                sx={{
                  color: "#0080ff",
                  cursor: "pointer",
                  "&:hover": { color: "#0056b3" },
                }}
              />

              <FacebookRoundedIcon
                sx={{
                  color: "#0040ff",
                  cursor: "pointer",
                  "&:hover": { color: "#002080" },
                }}
              />
              <TwitterIcon
                sx={{
                  color: "#00bfff",
                  cursor: "pointer",
                  "&:hover": { color: "#0080ff" },
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
