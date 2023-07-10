import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import ClassIcon from "@mui/icons-material/Class";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LogoutIcon from "@mui/icons-material/Logout";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Dhome from "./Dhome";
import "./Dashboard.css";
import { useState } from "react";
import Dstudent from "./Dstudent";
import Ateacher from "../Ateacher";
import Dclass from "./Dclass";
import Dsubject from "./Dsubject";
import Dexam from "./Dexam";
import Result from "./Result";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [showViewAllButton, setShowViewAllButton] = useState(false);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === "student") {
      setShowViewAllButton(true);
    } else {
      setShowViewAllButton(false);
    }
  };
  const Navigate = useNavigate();
  const handleLogout = () => {
    Navigate("/admin");
  };
  return (
    <div>
      <div className="conainter">
        <div className="row">
          <div className="col-md-2 sidebar">
            <img src="./images/logo.png" alt="logo" className="srslogo" />
            <h1 className="srs">School Result System</h1>
            <hr className="text-white" />
            <div className="list-group list-group-flush home">
              <button
                className="py-2 btn0"
                style={{ backgroundColor: activeTab === "home" ? "blue" : "" }}
                onClick={() => handleTabClick("home")}
              >
                <HomeIcon className="me-4  homeicon " />
                <span>Home</span>
              </button>
              <button
                className="py-2 btn1"
                style={{
                  backgroundColor: activeTab === "teacher" ? "blue" : "",
                }}
                onClick={() => handleTabClick("teacher")}
              >
                <PersonIcon className="me-4 personicon" />
                <span>Teacher </span>
              </button>
              <button
                className=" py-2 btn2"
                style={{
                  backgroundColor: activeTab === "student" ? "blue" : "",
                }}
                onClick={() => handleTabClick("student")}
              >
                <SchoolIcon className="me-4 schoolicon" />
                <span>Student</span>
                <li class="nav-item">
                  <a
                    href="student-details.html"
                    class="nav-link"
                    style={{ listStyleType: "none" }}
                  >
                    <i class="fas fa-angle-right"></i>Student Details
                  </a>
                </li>
              </button>
              <button
                className=" py-2 btn3"
                style={{
                  backgroundColor: activeTab === "class" ? "blue" : "",
                }}
                onClick={() => handleTabClick("class")}
              >
                <ClassIcon className="me-4 classicon " />
                <span className="class">Class</span>
              </button>
              <button
                className=" py-2 btn4"
                style={{
                  backgroundColor: activeTab === "subject" ? "blue" : "",
                }}
                onClick={() => handleTabClick("subject")}
              >
                <MenuBookIcon className="me-4 subjecticon" />
                <span>Subject</span>
              </button>
              <button
                className=" py-2 btn5"
                style={{ backgroundColor: activeTab === "exam" ? "blue" : "" }}
                onClick={() => handleTabClick("exam")}
              >
                <AutoStoriesIcon className="me-4 examicon" />
                <span className="class">Exam</span>
              </button>
              <button
                className=" py-2 btn6"
                style={{
                  backgroundColor: activeTab === "result" ? "blue" : "",
                }}
                onClick={() => handleTabClick("result")}
              >
                <InsertChartIcon className="me-4 resulticon" />
                <span className="class">Result</span>
              </button>
              <button className="py-2 btn7" onClick={handleLogout}>
                <LogoutIcon className=" me-4 logouticon" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          <div className="col-md-10">
            {activeTab === "home" && <Dhome />}
            {activeTab === "student" && <Dstudent />}
            {activeTab === "teacher" && <Ateacher />}
            {activeTab === "class" && <Dclass />}
            {activeTab === "subject" && <Dsubject />}
            {activeTab === "exam" && <Dexam />}
            {activeTab === "result" && <Result />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
