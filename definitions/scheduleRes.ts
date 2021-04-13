/**
 * @apiDefine scheduleRes
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
 */