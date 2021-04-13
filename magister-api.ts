/**
 * @api {get} /api/auth Request an authentication token
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
 * @apiSuccessExample Success Response:
 *   HTTP/1.1 OK
 *   {
 *     "apitoken": "<token>",
 *     "personID": "26650"
 *   }
 *
 * @apiError MissingArguments Arguments for the endpoint are missing. This error will appear if *any* of the three are missing.
 */

/**
 * @api {get} /api/rooster Fetch schedule information.
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
 * @apiSuccessExample Success Response:
 *   {
 *     "Items": [
 *       {
 *         "Aantekening": string,
 *         "Afgerond": boolean,
 *         "Bijlagen": <type unknown, probably ObjectArray>,
 *         "Docenten": [
 *           {
 *             "Docentcode": string,
 *             "Id": number,
 *             "Naam": string
 *           }
 *         ],
 *         "DuurtHeleDag": boolean,
 *         "Einde": string,
 *         "Groepen": <type unknown, probably ObjectArray>,
 *         "HeeftBijlagen": boolean,
 *         "HerhaalStatus": number,
 *         "Herhaling": <type unknown>,
 *         "Id": number,
 *         "InfoTyoe": number,
 *         "Inhoud": <type unknown>
 *         "IsOnlineDeelname": boolean,
 *         "LesuurTotMet": number,
 *         "LesuurVan": number,
 *         "Links": [
 *              {
 *                  "Href": string,
 *                  "Rel": string
 *              }
 *          ],
 *          "Lokalen": [
 *              {
 *                  "Naam": string
 *              }
 *          ],
 *          "Lokatie": string,
 *          "Omschrijving": string,
 *          "OpdrachtId": number,
 *          "Start": string,
 *          "Status": number,
 *          "Type": number,
 *          "Vakken": [
 *              {
 *                  "Id": number,
 *                  "Naam": string
 *              }
 *          ],
 *          "WeergaveType": number
 *       }
 *     ]
 *   }
 */