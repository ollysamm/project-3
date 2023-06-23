export const COMPANY_B_DOCS = `BASE URL: https://us-west-2.aws.data.mongodb-api.com/app/data-fckbb/endpoint/data/v1/action

API Documentation
The API endpoint /find provides access to the entire collection of data objects associated with Company B. It responds with a JSON array containing multiple objects, each representing an individual's information. The endpoint requires the following parameters:

Endpoint: /find

HTTP Method: POST

Request Headers:
- Content-Type: application/json
  - Specifies the content type of the request payload.
- Access-Control-Request-Headers: *
  - Allows all access control request headers.
- api-key: process.env.MONGO_DB_KEY
  - Your API key for authentication purposes. The value is retrieved from the environment variable named MONGO_DB_KEY.

Request Body:
The request body should be a JSON object with the following parameters:
{
    "collection": "employee",
    "database": "company_b",
    "dataSource": "NarioCluster"
}

Response Format: JSON

Example Request:
POST /find
Headers:
- Content-Type: application/json
- Access-Control-Request-Headers: *
- api-key: process.env.MONGO_DB_KEY
Body:
{
    "collection": "employee",
    "database": "company_b",
    "dataSource": "NarioCluster"
}

Example Response:
[
  {
    "_id": 1,
    "organization": "company_b",
    "employee_id": "company_b_user_10",
    "department": "Contact Center",
    "employment_type": "Full-time",
    "ethnicity": "Latin American",
    "gender": "Men",
    "language": "English",
    "location": "LOC-SCU-02",
    "location_type": "Mostly remotely",
    "shift": "Daytime hours (9 a.m. to 5 p.m. or similar)",
    "tenure": "Less than 1 year",
    "age_group": "30 - 39"
  },
  {
    "_id": 2,
    "organization": "company_b",
    "employee_id": "company_b_user_11",
    "department": "Sales",
    "employment_type": "Part-time",
    "ethnicity": "Asian",
    "gender": "Women",
    "language": "Spanish",
    "location": "LOC-SFO-01",
    "location_type": "Mostly on-site",
    "shift": "Evening hours (5 p.m. to 11 p.m. or similar)",
    "tenure": "1-3 years",
    "age_group": "20 - 29"
  },
  ...
  // Remaining objects in the collection
]

Response Description:
Each object in the JSON array represents an individual's information with the following attributes:
- _id: The unique identifier for the data object.
- organization: The organization or company associated with the data.
- employee_id: The employee ID associated with the data.
- department: The department to which the individual belongs.
- employment_type: The type of employment (e.g., full-time, part-time).
- ethnicity: The ethnicity of the individual.
- gender: The gender of the individual.
- language: The language preferred by the individual.
- location: The location associated with the data.
- location_type: The type of location (e.g., mostly on-site, mostly remote).
- shift: The shift schedule of the individual.
- tenure: The duration of the individual's tenure with the company.
- age_group: The age group of the individual.`;
