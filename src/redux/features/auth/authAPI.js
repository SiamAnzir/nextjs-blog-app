"use client";

import axios from "axios";

export const loginApi = async (body) => {
  console.log(body);
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/care-drop/v1/auth/login/`,
    body
  );
  return response.data;
};
