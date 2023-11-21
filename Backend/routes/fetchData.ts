import express, { Request, Response } from "express";
import { config } from "dotenv";

config();
// Replace the placeholder with your Atlas connection string
const client_id: string = process.env["CLIENT_ID"]!;
const secret: string = process.env["SECRET"]!;

const fetchData = express.Router();

fetchData.get("/:id", async (_req: Request, res: Response) => {
  const ocLcNumber = _req.params["id"];
  console.log(ocLcNumber);
  if (!ocLcNumber?.length) {
    res.status(400).json({ message: "Please give oclc number" });
  } else {
    // Define the URL and payload for the POST request
    const url = "https://oauth.oclc.org/token";
    const payload = {
      grant_type: "client_credentials",
      scope: "wcapi",
    };

    // Make the POST request with the client credentials in the authentication header
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${client_id}:${secret}`)}`,
      },
      body: new URLSearchParams(payload).toString(),
    })
      .then((response) => response.json())
      .then((data) => {
        // Replace 'your_access_token' with the actual access token
        const access_token = data.access_token;

        // Define the URL for the GET request
        const apiUrl =
          "https://americas.discovery.api.oclc.org/worldcat/search/v2/bibs-retained-holdings"; // Replace with the actual API endpoint

        // Set the headers with the access token
        const headers = {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json", // Adjust the content type if necessary
        };

        // Define the query parameters
        const params = {
          oclcNumber: ocLcNumber!,
          issn: "",
          isbn: "",
          title: "",
          author: "",
          publisher: "",
          limit: 10,
        };
        console.log(params);
        // Build the URL with query parameters
        const urlWithParams = new URL(apiUrl);
        Object.entries(params).forEach(([key, value]) => {
          if (value !== "") {
            urlWithParams.searchParams.append(key, value.toString());
          }
        });

        // Make the GET request to the API endpoint with the access token in the headers and the parameters
        return fetch(urlWithParams.toString(), {
          method: "GET",
          headers,
        });
      })
      .then((response) => response.json())
      .then((data) => {
        // Handle the GET request response
        console.log(data);
        res.status(200).json({ message: data });
      })
      .catch((error) => {
        // Handle errors
        res.status(500).json({ message: error });
      });
  }
  // res.status(200).json({ message: "data" });
});

export { fetchData };
