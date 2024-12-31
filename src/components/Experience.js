import React from 'react';
import { Box, Typography } from '@mui/material';

const Experience = () => {
  return (
    <Box sx={{
      position: 'absolute',
      bottom: 0,
      left: '10%', // Match About section's left margin
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '40px 20px',
      color: 'white',
      textAlign: 'left',
      boxShadow: '0 2px 15px rgba(0, 0, 0, 0.7)',
      maxWidth: '80%', // Match About section's width
      borderRadius: '10px',
      height: '50vh',
      overflowY: 'auto',
    }}>
      <Typography variant="h5" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        Work Experience
      </Typography>

      {/* Experience Item 1 */}
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
  );
}

export default Experience;