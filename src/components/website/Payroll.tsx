import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Container, Grid, Typography } from "@mui/material";
import images from "../../images/images.json";

export default function Payroll() {
  return (
    <Container sx={{ py: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Best Human Resource Payroll Management Services In Dubai
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} padding={2}>
            <Grid item xs={12} md={6}>
              <img
                src={`${images.payrollLandingImage.src}`}
                alt={`${images.payrollLandingImage.alt}`}
                width="100%"
                style={{ borderRadius: 10 }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography
                variant="h4"
                color="#9D809D"
                fontWeight="700"
                textTransform="uppercase"
                textAlign="center"
                gutterBottom
              >
                Payroll Software
              </Typography>
              <Typography variant="body1" textAlign="justify">
                Looking for payroll software in Dubai? Check out our list of the
                best payroll software in UAE. Streamline your payroll processes
                and save time! The input of HR experts from around the Middle
                East has been crucial in creating SAWA HRIS the payroll
                management system. We have reinforced the systems stability and
                safety to implement their suggestions. As soon as you adopt our
                payroll software, you can be confident that your companys
                payroll calculations will always be exact.
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#9D809D",
                  color: "#ffffff",
                  alignSelf: "flex-end",
                  "&:hover": {
                    backgroundColor: "#9C9C9C",
                  },
                }}
              >
                Free Consultation
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          marginTop={10}
          sx={{ background: "#808080", borderRadius: "15px", padding: "23px" }}
        >
          <Typography variant="h6" marginLeft={2} sx={{ color: "white" }}>
            Leading and Best
          </Typography>
          <Typography variant="h4" marginLeft={2} sx={{ color: "white" }}>
            Employee Management
          </Typography>
          <Grid item>
            <Typography
              variant="body1"
              fontSize={17}
              marginLeft={2}
              fontWeight={700}
              sx={{
                padding: "5px",
                whiteSpace: "wrap",
                marginTop: "5px",
                color: "white",
              }}
            >
              Payroll software allows HR managers to maintain employee
              information such as name, address, contact information, employment
              status, and other details related to compensation. This
              information is essential to calculate accurate employee pay.
            </Typography>
          </Grid>
          <Grid container alignItems="center" spacing={2} marginTop={2}>
            <Grid item>
              <CheckCircleIcon sx={{ color: "white" }} />
            </Grid>

            <Grid item xs>
              <Typography
                variant="body1"
                fontSize={17}
                sx={{ padding: "5px", whiteSpace: "wrap", color: "white" }}
              >
                <b>Employee Information:</b> Payroll software allows HR managers
                to maintain a database of employee information. This includes
                basic information such as name, address, phone number, and
                email, as well as employment-related information such as job
                title, department, and pay rate.
              </Typography>
            </Grid>
          </Grid>

          <Grid container alignItems="center" spacing={2} marginTop={2}>
            <Grid item>
              <CheckCircleIcon sx={{ color: "white" }} />
            </Grid>
            <Grid item xs>
              <Typography
                variant="body1"
                fontSize={17}
                sx={{ padding: "5px", whiteSpace: "wrap", color: "white" }}
              >
                <b>Performance Management:</b> Payroll software can help to
                track employee performance metrics such as attendance,
                punctuality, and productivity. This information can be used to
                inform performance evaluations and to identify areas for
                improvement.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} marginTop={10}>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              color="#5f6f64"
              textAlign="center"
              textTransform="uppercase"
            >
              Features of Payroll Software
            </Typography>
            <Grid item>
              <Typography variant="h6" textAlign="justify" marginTop={5}>
                By using payroll software, organizations can automate and
                streamline the process of paying employees, manage employee
                benefits and taxes, and ensure compliance with legal and
                regulatory requirements. Additionally, payroll software can help
                reduce errors and improve data accuracy, saving time and
                resources that would otherwise be spent on manual payroll
                processing. Overall, payroll software is a critical tool for any
                organization that needs to manage employee compensation and
                other payroll-related tasks efficiently and effectively. Get
                best hrms software in dubai at best prices.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src={`${images.payrollImage.src}`}
              alt={`${images.payrollImage.alt}`}
              width="100%"
            />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                <CheckCircleIcon sx={{ color: "#5f6f64" }} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body1" textAlign="justify">
                  <b>User-friendly interface :</b> Payroll software comes with a
                  user-friendly interface that makes it easy to use, even for
                  non-technical users.
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <CheckCircleIcon sx={{ color: "#5f6f64" }} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body1" textAlign="justify">
                  <b>Customizable settings :</b> Payroll software allows
                  organizations to customize the software to fit their specific
                  payroll needs. They can set up payroll schedules, tax rates,
                  and other payroll-related settings.
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <CheckCircleIcon sx={{ color: "#5f6f64" }} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body1" textAlign="justify">
                  <b>Data Security :</b> Payroll software provides secure
                  storage for sensitive employee information, ensuring that it
                  is only accessible by authorized personnel.
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <CheckCircleIcon sx={{ color: "#5f6f64" }} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body1" textAlign="justify">
                  <b>Compliance :</b> Payroll software helps organizations stay
                  compliant with federal, state, and local tax laws and
                  regulations.
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <CheckCircleIcon sx={{ color: "#5f6f64" }} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body1" textAlign="justify">
                  <b>Scalability :</b> Payroll software is scalable, meaning
                  that it can grow and adapt as the organization expands, adding
                  new employees and payroll-related tasks.
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <CheckCircleIcon sx={{ color: "#5f6f64" }} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body1" textAlign="justify">
                  <b>Support :</b> Payroll software providers offer support
                  services such as training, technical support, and ongoing
                  maintenance, ensuring that the software remains up-to-date and
                  functioning optimally.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
