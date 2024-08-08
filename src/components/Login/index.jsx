import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginValue = loginRef.current?.value.trim();
    const passwordValue = passwordRef.current?.value.trim();

    if (!loginValue || !passwordValue) {
      setError("Iltimos login va parolni to'ldiring!");
      return;
    }

    setIsLoading(true);
    setError("");

    setTimeout(() => {
      setIsLoading(false);
      if (loginValue === "student" && passwordValue === "studentpass") {
        localStorage.setItem("role", "student");
        navigate("/studentPage");
        toast.success("Muvaffaqiyatli kirildi", { position: "top-center" });
      } else if (loginValue === "teacher" && passwordValue === "teacherpass") {
        localStorage.setItem("role", "teacher");
        navigate("/teacherPage");
        toast.success("Muvaffaqiyatli kirildi", { position: "top-center" });
      } else if (loginValue === "admin" && passwordValue === "adminpass") {
        localStorage.setItem("role", "admin");
        navigate("/adminpage");
        toast.success("Muvaffaqiyatli kirildi", { position: "top-center" });
      } else {
        setError("Noto'g'ri login yoki parol!");
        toast.error("Qayta urinib ko'ring", { position: "top-center" });
      }
    }, 700);
  };

  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="login-left">
          <h1 className="login-heading">KIU - Education</h1>
          <p className="login-desc">
            Bizning maqsad talabalarga sifatli ta’lim, soft skills ya’ni ta’lim
            berish bilan cheklanib qolmasdan, kerakli ko‘nikma berib, muhimi
            ularni imtihonga emas hayotga tayyorlash. Eng muhimi O‘zimizga ravo
            ko‘rgan eng yaxshi narsani o‘zgalarga ham ravo ko‘ramiz!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="id-wrapper">
              <label htmlFor="login" className="login-label">
                Talaba ID <span className="strictly">*</span>
              </label>
              <input
                className="login-input"
                type="text"
                name="login"
                id="login"
                placeholder="IDni kiriting"
                ref={loginRef}
              />
            </div>

            <div className="password-wrapper">
              <label className="password-label" htmlFor="password">
                Parol <span className="strictly">*</span>
              </label>
              <div className="password-input-wrapper">
                <input
                  className="password-input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Parolni kiriting"
                  ref={passwordRef}
                />
                <button
                  type="button"
                  className={`password-toggle-btn ${
                    showPassword ? "active" : ""
                  }`}
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#162d3a"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <g transform="scale(10.66667,10.66667)">
                          <path d="M18,1c-3.32381,0 -6,2.67619 -6,6v1h-9.07031c-1.064,0 -1.92969,0.897 -1.92969,2v10c0,1.103 0.86569,2 1.92969,2h11.14062c1.064,0 1.92969,-0.897 1.92969,-2v-10c0,-1.103 -0.86473,-2 -1.92773,-2h-0.07227v-1c0,-2.27619 1.72381,-4 4,-4c2.27619,0 4,1.72381 4,4v2h2v-2c0,-3.32381 -2.67619,-6 -6,-6zM8.50781,13c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2z"></path>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#162d3a"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M15,2c-3.85433,0 -7,3.14567 -7,7v2h-2c-1.105,0 -2,0.895 -2,2v12c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-12c0,-1.105 -0.895,-2 -2,-2h-2v-2c0,-3.72842 -2.96342,-6.73143 -6.64453,-6.92773c-0.11309,-0.04556 -0.23356,-0.07005 -0.35547,-0.07227zM15,4c2.77367,0 5,2.22633 5,5v2h-10v-2c0,-2.77367 2.22633,-5 5,-5zM9,17c1.105,0 2,0.895 2,2c0,1.104 -0.895,2 -2,2c-1.105,0 -2,-0.896 -2,-2c0,-1.105 0.895,-2 2,-2zM15,17c1.105,0 2,0.895 2,2c0,1.104 -0.895,2 -2,2c-1.105,0 -2,-0.896 -2,-2c0,-1.105 0.895,-2 2,-2zM21,17c1.105,0 2,0.895 2,2c0,1.104 -0.895,2 -2,2c-1.105,0 -2,-0.896 -2,-2c0,-1.105 0.895,-2 2,-2z"></path>
                        </g>
                      </g>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button className="login-btn" type="submit" disabled={isLoading}>
              {isLoading ? "Kuting..." : "Kirish"}
            </button>
          </form>
        </div>
        <div className="login-right">
          <img
            className="unv-img"
            src={`${process.env.PUBLIC_URL}/assets/images/unv-img.png`}
            alt="unv_rasm"
          />
        </div>
        <p className="login-bottom-desc">Qarshi Xalqaro universiteti 2024</p>
      </div>
    </div>
  );
};

export default Login;
