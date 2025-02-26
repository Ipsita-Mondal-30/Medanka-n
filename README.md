 **🩺 Medanka - Your AI-Powered Healthcare Companion!**  
 
 Medanka is an AI-powered healthcare platform that integrates prescription text extraction, medical image analysis, hospital management, and patient engagement. Using AI models like decision trees and OCR (Tesseract.js), Medanka provides services such as automatic prescription text extraction, X-ray/MRI/CT scan analysis, symptom checking, and hospital bed availability tracking. It enables seamless interaction between patients, doctors, and hospitals while offering AI-driven medical insights and reminders for medication adherence.
.It is not just another healthcare platform—it’s your **personal AI doctor, prescription analyst, and medical assistant, all in one place!** 🏥✨ Whether you need to book a doctor, check hospital bed availability, or decode those confusing **X-rays, MRIs, and CT scans**, **Medanka has got you covered!**  

🚑 **No more hospital-hopping!** Know bed availability in real-time.  
📸 **Confused by your reports?** Let AI break it down for you!  
📜 **Handwritten prescriptions?** AI-powered OCR will decode them.  
💊 **Forgetful about meds?** Set reminders for your doses.  
🔍 **Not sure about symptoms?** Try our **Symptom Checker!**  

 🚀 How Medanka Works (Workflow)
1️⃣ Patient Registration & Login – Users sign up and get a unique Patient ID.
2️⃣ Doctor-Hospital Sync – Hospitals list real-time bed availability; doctors manage patient history & prescriptions.
3️⃣ AI-Powered Analysis – Upload prescriptions & medical reports (X-ray, MRI, CT scans); AI extracts text and provides insights.
4️⃣ Medicine & Pharmacy Integration – AI suggests medicines; users order from nearby pharmacies.
5️⃣ Smart Health Tracking – Set medication reminders, track vitals, and get expert health tips.
6️⃣ Doctor-Patient Communication – Book appointments, receive reports, and consult remotely (future update). 

 **🛠️ Getting Started (Setup Guide)**  

**🚨 Prerequisites**  
🔹 **Node.js** (Install [here](https://nodejs.org/))  
🔹 **npm** (Ensure it’s updated using: `npm install -g npm`)  
🔹 **MongoDB** (Make sure it’s installed & running)  

 **📦 Installation**  

### **1️⃣ Clone the Repo**  
```sh
git clone https://github.com/yourusername/Medanka.git
cd Medanka
```  

**2️⃣ Install Dependencies**  

 **Backend (Server-side) 🖥️**  
```sh
cd server
npm install
```  

**Frontend (Client-side) 💻**  
```sh
cd ../client
npm install
```  

**🚀 Running the Project**  

 **1️⃣ Start the Backend Server**  
```sh
cd server
node index.js
```  
**2️⃣ Start the Frontend Client**  
```sh
cd client
npm run dev
```  

 **3️⃣ Open the App**  
🌍 Visit **[http://localhost:5174/](http://localhost:5174/)** to start your Medanka experience!  

 **⚡ Troubleshooting**  

💥 **Server not running?**  
🔹 Make sure **MongoDB** is running in the background.  
🔹 Restart the server if needed:  
```sh
kill -9 $(lsof -t -i:PORT)
```  

💥 **Dependency issues?**  
🔹 Try reinstalling:  
```sh
npm install
```  

💥 **Frontend not loading?**  
🔹 Double-check the **backend is running first!**  

🩺 Features At a Glance**  

✅ **Real-Time Hospital & Bed Availability** 🏥  
✅ **AI-Powered OCR for Prescription Analysis** 📜  
✅ **Medical Image Processing (X-Ray, MRI, CT Scan Analysis)** 📸  
✅ **Doctor-Patient Dashboard & Appointment Booking** 👨‍⚕️  
✅ **Smart Symptom Checker & Health Blogs** 🔍  
✅ **Medicine Reminders & Pharmacy Integration** 💊  
✅ **WebRTC for Live Doctor Consultation (Upcoming!)** 📞  

**🌎 Contributing**  

💡 **Want to contribute?** Fork the repo, make your changes, and send a pull request!  
📧 **Questions?** Reach out at **medanka.healthcare@gmail.com**  

 **📜 License**  
📄 **Medanka** is licensed under the **MIT License** – see the LICENSE file for details.  

