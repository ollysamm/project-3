"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NBA_TEAMS_DOCS = void 0;
exports.NBA_TEAMS_DOCS = "BASE URL: https://www.balldontlie.io/api/\n\nAPI Documentation\nThe API endpoint /v1/teams provides information about basketball teams. It responds with a JSON array containing data for all NBA teams. The endpoint does not require any additional parameters.\n\nEndpoint: /v1/teams\n\nHTTP Method: GET\n\nResponse Format: JSON\n\nParameters: None\n\nExample Request:\nGET /v1/teams\n\nExample Response:\n{\n  \"data\": [\n    {\n      \"id\": 1,\n      \"abbreviation\": \"ATL\",\n      \"city\": \"Atlanta\",\n      \"conference\": \"East\",\n      \"division\": \"Southeast\",\n      \"full_name\": \"Atlanta Hawks\",\n      \"name\": \"Hawks\"\n    },\n    {\n      \"id\": 2,\n      \"abbreviation\": \"BOS\",\n      \"city\": \"Boston\",\n      \"conference\": \"East\",\n      \"division\": \"Atlantic\",\n      \"full_name\": \"Boston Celtics\",\n      \"name\": \"Celtics\"\n    },\n    // ...\n  ]\n}\n\nResponse Description:\n- data: An array containing objects representing NBA teams.\n- id: The unique identifier for each team.\n- abbreviation: The abbreviation of the team.\n- city: The city where the team is located.\n- conference: The conference to which the team belongs (East or West).\n- division: The division to which the team belongs.\n- full_name: The full name of the team.\n- name: The common name or nickname of the team.";