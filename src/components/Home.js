import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide'; 
import wallpaper from "../assets/background_image.jpeg";
import myImage from '../assets/mypic.jpeg';
import Experience from './Experience'; 
import {Card, CardContent, Grid,Link } from '@mui/material';

const drawerWidth = 240;
const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(null); // Track active section for animation

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (section) => {
    setActiveSection(section === activeSection ? null : section); // Toggle the section visibility
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, textTransform: 'none' }}>
        My Profile
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', textTransform: 'None' }} onClick={() => handleNavClick(item)}>
              <ListItemText primary={item} sx={{ textTransform: 'None' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', backgroundImage: `url(${wallpaper})`, height: '100vh', width: '100%' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            My Profile
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', textTransform: 'None' }} onClick={() => handleNavClick(item)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <div>
        <Typography
          variant="h4"
          color="#F0F0F0"
          sx={{
            marginTop: "30vh",
            marginBottom: "2vh",
            letterSpacing: 2,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: '"Playwrite US Trad", sans-serif',
            color: 'White',
            paddingLeft: '30vh'
          }}
        >
          <b> Hi, I am </b>
        </Typography>

        <Typography
          variant="h3"
          color="#F0F0F0"
          sx={{
            marginTop: ".5vh",
            marginBottom: "5vh",
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: '"Playwrite US Trad", sans-serif',
            color: 'White',
            paddingLeft: '30vh'
          }}
        >
          <b> Ambar Shrivastava </b>
        </Typography>

        <Typography
          variant="h6"
          color="#F0F0F0"
          sx={{
            marginTop: ".5vh",
            marginBottom: "5vh",
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: '"Playwrite US Trad", sans-serif',
            color: 'White',
            paddingLeft: '30vh'
          }}
        >
          <b> Building Scalable Solutions with AI, Cloud, and Continuous Innovation </b>
        </Typography>
        

        <div style={{ paddingLeft: '30vh', display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <Button 
  variant="contained" 
  sx={{ textTransform: 'None' }} 
  href="https://drive.google.com/file/d/1cD-tsBjlf0sOTw9QDTwbnc7CMk7WtM14/view?usp=drive_link" // Replace with your actual Google Drive CV link
  target="_blank" 
  rel="noopener noreferrer"
>
  Download CV
</Button>
          <Button variant='contained' sx={{ textTransform: 'None' }} onClick={() => setActiveSection('Contact')} >Contact Me</Button>
        </div>
      </div>
      
      {/* Slide-in effect for About Me content */}
      <Slide direction="left" in={activeSection === 'About'} mountOnEnter unmountOnExit>
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: '10%', // Start from the left with some margin
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
          padding: '40px 20px', // Add more padding for spacing
          color: 'white',
          textAlign: 'left', // Align text to the left
          boxShadow: '0 2px 15px rgba(0, 0, 0, 0.7)', // Slightly stronger shadow for better contrast
          maxWidth: '80%', // Limit the max width to make the text not too wide
          borderRadius: '10px', // Rounded corners for a softer look
          height: '50vh', // Set the height to make it scrollable
          overflowY: 'auto', // Enable vertical scrolling if the content exceeds the height
        }}>
          <Typography variant="h5" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: '1rem', lineHeight: 1.6 }}>
            I am a passionate and results-driven graduate student in Computer Science at Wright State University, with a strong foundation in cloud technologies, machine learning, and data engineering. With over 6 years of professional experience across multiple industries, I have honed my expertise in cloud platforms like Google Cloud Platform (GCP) and Amazon Web Services (AWS), leveraging these technologies to design and implement scalable systems, optimize data workflows, and develop cutting-edge AI/ML solutions. My hands-on experience spans developing full-stack applications, building containerized microservices, and deploying machine learning models that provide impactful insights.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
            Throughout my career, I have collaborated with cross-functional teams to deliver high-quality software solutions in fast-paced, agile environments. Whether it's optimizing cloud infrastructure, creating efficient ETL pipelines, or deploying robust machine learning models, I take pride in driving performance improvements and achieving measurable outcomes. I am always eager to learn, innovate, and contribute to projects that push the boundaries of technology.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
            I am passionate about applying my technical expertise to solve complex problems, streamline operations, and deliver scalable, data-driven solutions. As I continue my academic and professional journey, I am excited to leverage my skills in AI, data engineering, and cloud computing to contribute to impactful projects in the tech industry.
          </Typography>
        </Box>
      </Slide>

      {/* Slide-in effect for Experience section */}
     
      <Slide direction="left" in={activeSection === 'Experience'} mountOnEnter unmountOnExit>
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: '10%', // Start from the left with some margin
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
          padding: '40px 20px', // Add more padding for spacing
          color: 'white',
          textAlign: 'left', // Align text to the left
          boxShadow: '0 2px 15px rgba(0, 0, 0, 0.7)', // Slightly stronger shadow for better contrast
          maxWidth: '80%', // Limit the max width to make the text not too wide
          borderRadius: '10px', // Rounded corners for a softer look
          height: '50vh', // Set the height to make it scrollable
          overflowY: 'auto', // Enable vertical scrolling if the content exceeds the height
        }}>
          <Typography variant="h5" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          Experience
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
        AI/ML Intern | Product Manager Accelerator | United States (Oct 2024 – Dec 2024)
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        • Architected and developed a full-stack mobile application using Python, FastAPI, and Flutter to enhance user engagement, resulting in a 30% increase in app usage.<br />
        • Implemented containerized microservices with Docker and Kubernetes, ensuring a 40% reduction in deployment time and improved scalability.<br />
        • Developed ML models with TensorFlow, and Scikit-learn for nutritional analysis, increasing prediction accuracy by 25%.<br />
        • Designed database schemas using PostgreSQL and MongoDB, optimizing data storage and retrieval times by 20%.<br />
        • Utilized GitHub Actions for CI/CD pipeline implementation, reducing deployment cycle time by 50%.<br />
        • Integrated data visualization using Matplotlib and Seaborn, improving user insights and app usability by 30%.
      </Typography>

      {/* Experience Item 2 */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
        Consultant - Data Engineer and GCP Developer | Deloitte | India (Dec 2021 - Jul 2023)
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        • Engineered data pipelines using GCP services like Cloud Run, Cloud Functions, BigQuery, and Dataflow, reducing data processing time by 40%.<br />
        • Developed automated workflows with Apache Airflow for PostgreSQL to BigQuery synchronization, improving data transfer reliability by 30%.<br />
        • Implemented Python scripts for Salesforce CDP to BigQuery data transfer, streamlining data integration and reducing manual intervention by 70%.<br />
        • Orchestrated containerized applications with Docker, Cloud Build, and Container Registry, reducing server costs by 25%.<br />
        • Managed cloud infrastructure using GKE, GCE, Cloud Scheduler, and IAM, increasing resource utilization efficiency by 35%.<br />
        • Built RESTful APIs using Python and Flask, integrating them with PubSub for real-time messaging, improving data flow efficiency by 20%.<br />
        • Utilized Google Cloud Load Balancing for traffic management, optimizing system uptime to 99.5%.<br />
        • Implemented ML models using Vertex AI, enhancing prediction capabilities by 30%.<br />
        • Managed databases using Cloud SQL, ensuring 99% uptime and efficient data management.
      </Typography>

      {/* Experience Item 3 */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
        Systems Engineer - Data Engineer | Tata Consultancy Services | India (Dec 2019 - Nov 2021)
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        • Developed ETL pipelines using Python, Talend Open Studio, and Hadoop, reducing data processing time by 20%.<br />
        • Implemented data warehousing solutions using Hive and Impala, improving query performance by 35%.<br />
        • Created data processing workflows using HBase for NoSQL operations, increasing data throughput by 25%.<br />
        • Built data transformations with Java and JavaScript, improving data accuracy by 15%.<br />
        • Utilized Git and SVN for version control, ensuring smooth collaboration and code quality.<br />
        • Implemented Jenkins for continuous integration, reducing deployment time by 40%.<br />
        • Created data visualizations using NumPy and Pandas, providing actionable insights for stakeholders.
      </Typography>

      {/* Experience Item 4 */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
        Software Engineer - Data Engineer | LTI Mindtree | India (Feb 2017 - Dec 2019)
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        • Implemented AWS-based data workflows using EC2, S3, Lambda, and RDS, improving data processing speed by 35%.<br />
        • Developed ETL processes using Talend Open Studio and Redshift, reducing query times by 50%.<br />
        • Managed security using IAM, VPC, and Security Groups, increasing system security by 30%.<br />
        • Implemented Elastic Load Balancing for high availability, achieving 99.7% uptime.<br />
        • Utilized Amazon Transcribe and Textract for data processing, reducing manual effort by 60%.<br />
        • Created data queries using Athena and DynamoDB, improving data retrieval time by 40%.<br />
        • Developed web applications using React.js and Flutter, enhancing user experience and engagement by 25%.<br />
        • Implemented NLP solutions using NLTK and LSTM, improving text analysis accuracy by 20%.
      </Typography>


        </Box>
      </Slide>

      <Slide direction="left" in={activeSection === 'Skills'} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '10%', // Start from the left with some margin
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
          padding: '40px 20px', // Add more padding for spacing
          color: 'white',
          textAlign: 'left', // Align text to the left
          boxShadow: '0 2px 15px rgba(0, 0, 0, 0.7)', // Slightly stronger shadow for better contrast
          maxWidth: '80%', // Limit the max width to make the text not too wide
          borderRadius: '10px', // Rounded corners for a softer look
          height: '50vh', // Set the height to make it scrollable
          overflowY: 'auto', // Enable vertical scrolling if the content exceeds the height
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Skills
        </Typography>

        <Grid container spacing={3}>
          {/* Programming Languages */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#1976d2', borderRadius: '10px', height: '250px' }}>
              <CardContent sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  Programming Languages
                </Typography>
                <Typography sx={{ color: '#f0f0f0' }}>
                  Python, Java, JavaScript
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Databases */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#0288d1', borderRadius: '10px', height: '250px' }}>
              <CardContent sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  Databases
                </Typography>
                <Typography sx={{ color: '#f0f0f0' }}>
                  MySQL, SQL, NOSQL, Postgres, Hive, Impala, HBase
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Data Engineering and Web */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#1976d2', borderRadius: '10px', height: '250px' }}>
              <CardContent sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  Data Engineering and Web
                </Typography>
                <Typography sx={{ color: '#f0f0f0' }}>
                  Hadoop, Talend Open Studio, Salesforce CDP, Flask, ReactJS, Flutter
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Data Science */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#0288d1', borderRadius: '10px', height: '250px' }}>
              <CardContent sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  Data Science
                </Typography>
                <Typography sx={{ color: '#f0f0f0' }}>
                  PyTorch, Keras, TensorFlow, Pandas, NLTK, NumPy, Scikit-learn, LSTM, LLM, Matplotlib, Seaborn
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Tools & Technologies */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#1976d2', borderRadius: '10px', height: '250px' }}>
              <CardContent sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  Tools & Technologies
                </Typography>
                <Typography sx={{ color: '#f0f0f0' }}>
                  Docker, Kubernetes, Apache Airflow, Git, SVN, GitHub Actions, Jenkins
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Cloud: Google Cloud Platform */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#0288d1', borderRadius: '10px', height: '250px' }}>
              <CardContent sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  Google Cloud Platform
                </Typography>
                <Typography sx={{ color: '#f0f0f0' }}>
                  IAM, Big Query, BigQuery Data transfer, GCS, Dataflow, Cloud Run, Cloud Function, Cloud Scheduler, GCE, Container registry, GKE, Cloud Build, Google App Engine, Speech-to-Text, Cloud Composer, PubSub, Google Cloud Load Balancing, Vertex AI
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Cloud: AWS */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: '#0288d1', borderRadius: '10px', height: '250px' }}>
              <CardContent sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                  AWS
                </Typography>
                <Typography sx={{ color: '#f0f0f0' }}>
                  EC2, RDS, IAM, Redshift, S3, Athena, Lambda, Amazon Transcribe, DynamoDB, VPC, Security Groups, Elastic Load Balancing
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Slide>


    <Slide direction="left" in={activeSection === 'Projects'} mountOnEnter unmountOnExit>
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: '10%', // Start from the left with some margin
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
          padding: '40px 20px', // Add more padding for spacing
          color: 'white',
          textAlign: 'left', // Align text to the left
          boxShadow: '0 2px 15px rgba(0, 0, 0, 0.7)', // Slightly stronger shadow for better contrast
          maxWidth: '80%', // Limit the max width to make the text not too wide
          borderRadius: '10px', // Rounded corners for a softer look
          height: '50vh', // Set the height to make it scrollable
          overflowY: 'auto', // Enable vertical scrolling if the content exceeds the height
        }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Projects
        </Typography>

        {/* Project 1 */}
        {/* <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Handwritten Notes Converter to Digital Document | Python | GCP (Dec 2024 - Present)
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          • Developed an application using GCP Vision API, Cloud Functions, and custom ML models, reducing conversion time by 30%.<br />
          • Utilized Docker and GKE for container orchestration, improving scalability by 25%.<br />
          • Integrated cloud storage solutions (GCS), streamlining data storage and access.<br />
          • Implemented ML pipelines using TensorFlow and Keras, improving handwriting accuracy by 20%.<br />
        </Typography> */}

        {/* Project 2 */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Weather Application | React.js | Python | Docker | AWS (Sept 2024)
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          • Built a full-stack weather application using React.js, Python, and Flask, increasing app engagement by 20%.<br />
          • Implemented CI/CD using GitHub Actions and AWS CodePipeline, reducing deployment time by 50%.<br />
          • Utilized AWS services like Lambda, API Gateway, and DynamoDB, improving scalability and reducing operational costs by 30%.<br />
          • Created containerized deployment using Docker and ECS/EKS, ensuring 99% uptime.<br />
          • Implemented data visualization using Matplotlib and Seaborn, improving user experience by 25%.<br />
        </Typography>

        {/* Project 3 */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Task Planner | Python | AWS | React.js | OpenAI (Nov 2023)
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          • Architected microservices using AWS Lambda and API Gateway, reducing server costs by 30%.<br />
          • Developed the frontend using React.js and JavaScript, improving user interaction by 25%.<br />
          • Integrated NLP using NLTK and OpenAI’s LLM, enhancing task management by 20%.<br />
          • Utilized Docker and Kubernetes for deployment, improving scalability by 30%.<br />
          • Implemented database solutions using PostgreSQL and DynamoDB, ensuring efficient data storage and retrieval.<br />
        </Typography>

        {/* Project 4 */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Stock Price Prediction | Python | LSTM | TensorFlow (Apr 2024)
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          • Developed ML models using LSTM, TensorFlow, and Keras, improving prediction accuracy by 20%.<br />
          • Processed data using Pandas and NumPy, increasing model efficiency by 15%.<br />
          • Created visualizations using Matplotlib and Seaborn, providing valuable insights into stock trends.<br />
          • Utilized cloud computing resources for model training and deployment, reducing training time by 30%.<br />
        </Typography>

        {/* Project 5 */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Employee Retention Prediction | Python | Scikit-learn (May 2024)
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          • Developed and implemented four machine learning models (Logistic Regression, Random Forest, Decision Tree, and SVM) for predicting employee retention, achieving an F1 score improvement of 15%.<br />
          • Evaluated model performance using F1 Score and area under the ROC curve, selecting the optimal model that increased prediction accuracy by 20%.<br />
        </Typography>
        </Box>
      </Slide>

      

      <Slide direction="left" in={activeSection === 'Contact'} mountOnEnter unmountOnExit>
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: '35%', // Start from the left with some margin
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
          padding: '40px 20px', // Add more padding for spacing
          color: 'white',
          textAlign: 'left', // Align text to the left
          boxShadow: '0 2px 15px rgba(0, 0, 0, 0.7)', // Slightly stronger shadow for better contrast
          maxWidth: '80%', // Limit the max width to make the text not too wide
          borderRadius: '10px', // Rounded corners for a softer look
          height: '30vh', // Set the height to make it scrollable
          overflowY: 'auto', // Enable vertical scrolling if the content exceeds the height
        }}>
          <Typography variant="h5" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          Contact Me
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: '1rem', lineHeight: 1.6 }}>
          Feel free to reach out to me through any of the following methods:     </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6}}>
           <b>Email:</b> shrivastava.10@wright.edu </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
          <b>Phone:</b> +1 (380) 279-1702</Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
          <b>LinkedIn: </b>www.linkedin.com/in/ambar-shrivastava-286041130 </Typography>
        </Box>
      </Slide>






      <div style={{ paddingLeft: '30vh', paddingTop: "30vh" }}>
        <img src={myImage} alt="Description of the image" style={{ width: '150px', height: 'auto' }} />
      </div>
    </Box>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
