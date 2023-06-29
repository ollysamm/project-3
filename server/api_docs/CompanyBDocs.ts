export const COMPANY_B_DOCS = `BASE URL: https://us-east-1.aws.data.mongodb-api.com/app/api_example-ygdlt/endpoint/employee

API Documentation
The API endpoint /employee provides access to the data objects associated with the employee collection. It responds with a JSON object containing various attributes related to an individual's information. The endpoint does not require any additional parameters.

Endpoint: /employee

HTTP Method: GET

Response Format: JSON

Example Request:
GET /employee

Example Response:
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
}

Response Description:
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
