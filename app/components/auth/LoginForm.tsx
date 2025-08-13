"use client"  

import { useState } from "react";
import Image from "next/image";
import { User, Lock } from "lucide-react"; // Icons for the login fields

export default function Box() {
  const [studentForm, setStudentForm] = useState({ username: "", password: "" });
  const [employeeForm, setEmployeeForm] = useState({ username: "", password: "" });
  const [adminForm, setAdminForm] = useState({ username: "", password: "" });

  const loginCards = [
    { id: "student", title: "Student Login", form: studentForm, setForm: setStudentForm, showIcons: true },
    { id: "employee", title: "Employee Login", form: employeeForm, setForm: setEmployeeForm, showIcons: true },
    { id: "admin", title: "Admin Login", form: adminForm, setForm: setAdminForm, showIcons: true },
  ];

  const handleInputChange = (cardId: string, field: string, value: string) => {
    const card = loginCards.find((c) => c.id === cardId);
    if (card) {
      card.setForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleLogin = (cardId: string) => {
    const card = loginCards.find((c) => c.id === cardId);
    if (card) {
      console.log(`${card.title} attempt:`, card.form);
    }
  };

  const handleForgotPassword = (cardId: string) => {
    console.log(`Forgot password clicked for ${cardId}`);
  };

  return (
    <main className="flex flex-col min-h-screen items-center bg-white overscroll-none">
      {/* Header and Body sections are now a single, responsive flow */}
      <header className="w-full px-3 my-3 space-y-3">
        {/* Title header image */}
        <div>
          <Image
            src="/images/title.png"
            alt="Title header"
            width={1242}
            height={149}
            className="w-full h-auto"
            priority
          />


          {/* Body content image */}

          {/* <Image
            src="/images/body1.png"
            alt="Body content"
            width={1242}
            height={178}
            className="w-full h-auto"
          /> */}
        </div>

        {/* Divider image, now correctly placed in the flow */}
        <div className="w-full">
          <Image
            src="/line1.png"
            alt="Divider line"
            width={1242}
            height={1}
            className="w-full h-auto"
          />
        </div>
      </header>

      {/* Green banner, made responsive */}
      <div className="w-full   px-3 ">
        <h1 className="w-full bg-[#1f8941] flex justify-center items-center font-['Albert_Sans-Bold'] font-bold text-white text-2xl sm:text-3xl py-3">
          QUICKPASS
        </h1>
      </div>

      {/* Login cards */}
      <div className="w-full  flex flex-wrap justify-evenly items-center grow py-6 md:px-8 lg:px-12">
        {loginCards.map((card) => (
          <section
            key={card.id}
            className="w-full my-3 sm:w-[calc(50%-12px)] md:w-[300px] bg-[#fffefc] rounded-lg border border-[#bebab9] shadow-md p-4"
            aria-labelledby={`${card.id}-title`}
          >
            <h2 id={`${card.id}-title`} className="font-medium text-[#1f8941] text-2xl text-center mb-4">
              {card.title}
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin(card.id);
              }}
              className="space-y-4"
            >
              {/* Username */}
              <div className="relative">
                {card.showIcons && (
                  <User
                    size={20}
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-green-700"
                  />
                )}
                <input
                  type="text"
                  value={card.form.username}
                  onChange={(e) => handleInputChange(card.id, "username", e.target.value)}
                  placeholder="Username"
                  className={`w-full ${card.showIcons ? "pl-10" : "pl-4"} pr-4 py-2 border border-[#bebab9] rounded-lg`}
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                {card.showIcons && (
                  <Lock
                    size={20}
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-green-700"
                  />
                )}
                <input
                  type="password"
                  value={card.form.password}
                  onChange={(e) => handleInputChange(card.id, "password", e.target.value)}
                  placeholder="Password"
                  className={`w-full ${card.showIcons ? "pl-10" : "pl-4"} pr-4 py-2 border border-[#bebab9] rounded-lg`}
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#1f8941] text-white py-2 rounded-lg text-lg hover:bg-[#1a7a39]"
              >
                Login
              </button>
            </form>

            <button
              type="button"
              onClick={() => handleForgotPassword(card.id)}
              className="block mt-3 mx-auto text-sm hover:text-[#1f8941]"
            >
              Forgot Password
            </button>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full mt-auto px-3 mb-3">
        <Image
          src="/bott.png"
          alt="Bottom background"
          width={1242}
          height={62}
          className="w-full h-auto"
        />
      </footer>
    </main>
  );
}
