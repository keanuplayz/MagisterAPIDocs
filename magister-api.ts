/**
 * @api {get} /api/auth Auth Token
 * @apiDescription Allows you to request an authentication token from the API. You *need* a token for *every* request, along with your PersonID. Make sure to save both somewhere.
 * @apiName auth
 * @apiGroup Auth
 *
 * @apiParam {String} username Your Magister username.
 * @apiParam {String} password Your Magister password.
 * @apiParam {String} school The school you're generating a token for. Should be the name you enter in the Magister URL. (`SchoolName.magister.net`)
 *
 * @apiExample {curl} Example usage:
 *   curl -X GET http://84.29.92.49:1337/api/auth?username=MyNameHere&password=MyPassHere&school=MySchoolHere
 *
 * @apiSuccess {String} apitoken Your API token.
 * @apiSuccess {String} personID Your User ID.
 *
 * @apiSuccessExample {json} Success Response:
 *   {
 *     "apitoken": "<token>",
 *     "personID": "26650"
 *   }
 *
 * @apiError MissingArguments Arguments for the endpoint are missing. This error will appear if *any* of the three are missing.
 */

/**
 * @api {get} /api/rooster Schedule Info
 * @apiDescription Allows you to fetch information about your schedule from a specified period of time.
 * @apiName rooster
 * @apiGroup Info
 *
 * @apiParam {String} apitoken Your API token. Should be retrieved from `/api/auth`.
 * @apiParam {String} dateFrom Date from where the API should look for schedule info. Should be of format `YYYY-MM-DD`.
 * @apiParam {String} dateTill Date to where the API should look for schedule info. Should be of format `YYYY-MM-DD`.
 * @apiParam {String} school The school you're fetching schedule info from. Should be the name you enter in the Magister URL. (`SchoolName.magister.net`)
 * @apiParam {Number} personId Your person ID. Should be retrieved from `/api/auth`.
 *
 * @apiExample {curl} Example usage:
 *   curl -X GET "http://84.29.92.49:1337/api/rooster?dateFrom=2021-04-13&dateTill=2021-04-15&school=SchoolName&personId=26650&apitoken=<TOKEN>"
 *
 * @apiSuccessExample {json} Success Response:
 *   {
 *     "Items": [
 *       {
 *         "Aantekening": string, // Comment from teacher
 *         "Afgerond": boolean, // Has finished homework?
 *         "Bijlagen": [ { ... } ], // ObjectArray of attachments
 *         "Docenten": [ // ObjectArray of teachers
 *           {
 *             "Docentcode": string, // Teacher abbreviation
 *             "Id": number, // ???
 *             "Naam": string // Full teacher name
 *           }
 *         ],
 *         "DuurtHeleDag": boolean, // Does the appointment last the whole day?
 *         "Einde": Date, // Date of when the class ends (Full `Date` string e.g. "2021-04-13T07:35:00.0000000Z")
 *         "Groepen": [ { ... } ], // ObjectArray of... "groups"?
 *         "HeeftBijlagen": boolean, // Does the appointment have any attachments?
 *         "HerhaalStatus": number, // ???
 *         "Herhaling": <type unknown>, // ???
 *         "Id": number, // ID of appointment?
 *         "InfoType": number, // ???
 *         "Inhoud": <type unknown>
 *         "IsOnlineDeelname": boolean, // Is the class online?
 *         "LesuurTotMet": number, // ???
 *         "LesuurVan": number, // ???
 *         "Links": [ // ObjectArray with Magister API URLs
 *              {
 *                  "Href": string, // API URL
 *                  "Rel": string // "Self" or "Next"
 *              }
 *          ],
 *          "Lokalen": [
 *              {
 *                  "Naam": string // e.g. "s426"
 *              }
 *          ],
 *          "Lokatie": string, // e.g. Exactly the same thing as above, e.g. "s426"
 *          "Omschrijving": string, // Description of class as displayed in "Omschrijving" on appointment details in Magister
 *          "OpdrachtId": number,
 *          "Start": Date, // Date of when the class starts (Full `Date` string e.g. "2021-04-13T07:05:00.0000000Z")
 *          "Status": number, // ???
 *          "Type": number, // ???
 *          "Vakken": [
 *              {
 *                  "Id": number,
 *                  "Naam": string // Name as displayed under "Vak" on appointment details in Magister
 *              }
 *          ],
 *          "WeergaveType": number // ???
 *       }
 *     ]
 *   }
 * 
 * @apiError MissingToken The API token is missing.
 * @apiError MissingArguments Arguments for the endpoint are missing. This error will appear if *any* of the three are missing.
 */

/**
 * @api {get} /api/grades Grade Info
 * @apiDescription Allows you to request information about your grades from a specified period of time.
 *
 * **PS:** This is highly undocumented. We know the parameters and the response, but what anything actually serves for, we have absolutely no idea of.
 *
 * ***NOTE:*** *THIS DOESN'T ACTUALLY PROVIDE ANY GRADE INFO!*
 *
 * *IT ONLY SHOWS INFO ABOUT MAGISTER ENDPOINTS THAT* ***DO*** *PROVIDE THIS INFO.*
 * @apiName grades
 * @apiGroup Info
 *
 * @apiParam {String} apitoken Your API token. Should be retrieved from `/api/auth`.
 * @apiParam {String} dateFrom Date from where the API should look for schedule info. Should be of format `YYYY-MM-DD`.
 * @apiParam {String} dateTill Date to where the API should look for schedule info. Should be of format `YYYY-MM-DD`.
 * @apiParam {String} school The school you're fetching schedule info from. Should be the name you enter in the Magister URL. (`SchoolName.magister.net`)
 * @apiParam {Number} personId Your person ID. Should be retrieved from `/api/auth`.
 *
 * @apiExample {curl} Example usage:
 *   curl -X GET "http://84.29.92.49:1337/api/grades?dateFrom=2021-04-13&dateTill=2021-04-15&school=SchoolName&personId=26650&apitoken=<TOKEN>"
 *
 * @apiSuccessExample {json} Success Response:
 *  {
 *      "items": [
 *          {
 *              "begin": "2020-08-01", // Time this grade was added?
 *              "einde": "2020-07-31", // Time this grade was added?
 *              "groep": {
 *                  "code": "VT4m", // Full class name
 *                  "id": 7830, // ???
 *                  "links": {
 *                      "self": {
 *                          "href": "/api/groepen/7830" // Actual Magister API endpoint
 *                      }
 *                  },
 *                  "omschrijving": "4m" // Class name
 *              },
 *              "id": 43018, // ???
 *              "isHoofdAanmelding": true, // ???
 *              "lesperiode": {
 *                  "code": "2021", // Year of class?
 *                  "links": {
 *                      "self": {
 *                          "href": "/api/lesperioden/22" // Shows info about class period?
 *                      }
 *                  }
 *              },
 *              "links": { // Object containing some API endpoints, I suppose.
 *                 "cijfers": {
 *                       "href": "/api/aanmeldingen/43018/cijfers"
 *                   },
 *                   "mentoren": {
 *                       "href": "/api/aanmeldingen/43018/mentoren"
 *                   },
 *                   "perioden": {
 *                       "href": "/api/aanmeldingen/43018/cijfers/perioden"
 *                   },
 *                   "self": {
 *                       "href": "/api/aanmeldingen/43018"
 *                   },
 *                   "vakken": {
 *                       "href": "/api/aanmeldingen/43018/vakken"
 *                   }
 *              },
 *             "profielen": [
 *                   {
 *                       "code": "MVI", // Class profile name?
 *                       "links": {
 *                           "self": {
 *                               "href": "/api/profielen/3198" // API endpoint for class profile info?
 *                           }
 *                       }
 *                   }
 *               ],
 *               "studie": {
 *                   "code": "VG4", // Level-LearningPath-Grade
 *                   "id": 862, // ???
 *                   "links": {
 *                       "self": {
 *                           "href": "/api/studies/862" // API endpoint for info?
 *                       }
 *                   }
 *               }
 *          }
 *      ]
 *  }
 * @apiError MissingToken The API token is missing.
 * @apiError MissingArguments Arguments for the endpoint are missing. This error will appear if *any* of the three are missing.
 */