const mongoose = require("mongoose");
const express = require("express");
const { error } = require("console");
const { json } = require("body-parser");

serverURL = "";


function getUserInfo(){
  let userEmail = document.getElementById("emailInput").value;
  let userPassword = document.getElementById("passwordInput").value;
  return {
    email : userEmail,
    password : userPassword 
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
    if (data.userName == userName && data.password == password) {
      localStorage.setItem("userName")= userName;
    }else{
      document.getElementById("passwordInput").placeholder = "wrong credentials";
    }
  }else{
    console.log(error)
  }
}

let submitButton = document.getElementById("submit");
submitButton.onclick = ()=>{
  let credentials = getUserInfo();
  authenticate(credentials.email, credentials.password);
}
