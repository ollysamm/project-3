export const NBA_TEAMS_DOCS = `BASE URL: https://www.balldontlie.io/api/

API Documentation
The API endpoint /v1/teams provides information about basketball teams. It responds with a JSON array containing data for all NBA teams. The endpoint does not require any additional parameters.

Endpoint: /v1/teams

HTTP Method: GET

Response Format: JSON

Parameters: None

Example Request:
GET /v1/teams

Example Response:
{
  "data": [
    {
      "id": 1,
      "abbreviation": "ATL",
      "city": "Atlanta",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Atlanta Hawks",
      "name": "Hawks"
    },
    {
      "id": 2,
      "abbreviation": "BOS",
      "city": "Boston",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Boston Celtics",
      "name": "Celtics"
    },
    // ...
  ]
}

Response Description:
- data: An array containing objects representing NBA teams.
- id: The unique identifier for each team.
- abbreviation: The abbreviation of the team.
- city: The city where the team is located.
- conference: The conference to which the team belongs (East or West).
- division: The division to which the team belongs.
- full_name: The full name of the team.
- name: The common name or nickname of the team.`;