const mongoose = require("mongoose");
const express = require("express");
const { error } = require("console");
const { json } = require("body-parser");

serverURL = "";

function getUserInfo() {
  let userEmail = document.getElementById("emailInput").value;
  let userPassword = document.getElementById("passwordInput").value;
  return {
    email: userEmail,
    password: userPassword,
  };
}

function authenticate(userName, password) {
  const response = fetch(serverURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userName,
      password: password,
    }),
  });

  if (response.ok()) {
    let data = response.json();
    if (data.userName == userName) {
      document.getElementById("passwordInput").placeholder =
        "User already exist!";
    } else {
      fetch(serverURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userName,
          password: userPassword,
        }),
      });
    }
  } else {
    console.log(error);
  }
}

let submitButton = document.getElementById("submit");
submitButton.onclick = () => {
  let credentials = getUserInfo();
  authenticate(credentials.email, credentials.password);
};
