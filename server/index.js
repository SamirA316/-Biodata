import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

// Mock database
const profileData = {
  name: "Samir Ansari",
  subtitle: "Software Engineer",
  birthDate: "08/02/2003",
  location: "Siwan, Bihar",
  height: "5'9\"",
  personalDetails: {
    religion: "Muslim",
    caste: "Ansari",
    dateOfBirth: "08/02/2003",
    height: "5'9\""
  },
  educationProfession: {
    education: "B.Tech (CS & Tech)",
    occupation: "Software Engineer",
    company: "Aronix Web Tech"
  },
  familyBackground: {
    fathersName: "Mr. MD Shaukat Ali",
    fathersOccupation: "Businessman",
    mothersName: "Mrs. Khushbu Khatoon",
    mothersOccupation: "Homemaker",
    siblings: "1 Brother, 2 Sisters",
    unclesName: "Mr. Anwar Ali",
    unclesOccupation: "Teacher",
    auntysName: "Mrs. Hashina Khatoon",
    auntysOccupation: "Teacher",
    unclesChildren: "Akhater Ali (7th Class), Riya Khatoon (5th Class)",
    familyType: "Joint",
    familyStatus: "Middle Class",
    nativePlace: "Village - Pipra, P.O - Dighawaliya, P.S - Raghunathpur, Siwan (841203)"
  },
  contactDetails: {
    currentAddress: "Kirari Suleman Nagar, Prem Nagar III, Delhi (110086)",
    permanentAddress: "Village - Pipra, P.O - Dighawaliya, P.S - Raghunathpur, Siwan, Bihar (841203)",
    whatsappNumber: "919334155271",
    mobileNumbers: [
      { relation: "Samir", number: "+91-9334155271", raw: "+919334155271" },
      { relation: "Uncle", number: "+91-9801215549", raw: "+919801215549" }
    ],
    emailId: "wpssamiransari@gmail.com"
  }
};

app.get('/api/profile', (req, res) => {
  res.json(profileData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
