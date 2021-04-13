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

/**
 * @apiDefine scheduleResParams
 * @apiSuccess (Items) {String} Aantekening Comment from teacher on appointment.
 * @apiSuccess (Items) {Boolean} Afgerond Did the student mark the homework as finished?
 * @apiSuccess (Items) {Object[]} Bijlagen `Array<Object>` of attachments that are added to the appointment.
 * 
 * **Will be documented when this feature is actually used by any of our teachers.**
 * @apiSuccess (Items) {Object[]} Docenten `Array<Object>` of teachers on this appointment
 * 
 * **More info below.**
 * @apiSuccess (Items) {Boolean} DuurtHeleDag Does the appointment last the entire day?
 * @apiSuccess (Items) {Date} Start `Date` object of when the class starts (e.g. "2021-04-13T07:05:00.0000000Z")
 *
 *  The date is represented by an ISO string, which means the API executes [`Date.prototype.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) on the date.
 * 
 * @apiSuccess (Items) {Date} Einde `Date` object of when the class ends (e.g. "2021-04-13T07:35:00.0000000Z")
 * 
 *  The date is represented by an ISO string, which means the API executes [`Date.prototype.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) on the date.
 * 
 * @apiSuccess (Items) {Object[]} Groepen An `Array<Object>` of... groups? Are these the class group names, such as `vt4.wi` perhaps?
 * 
 * **Undocumented as none of the tested appointments had this set. It was always `null`.**
 * @apiSuccess (Items) {Boolean} HeeftBijlagen Does the appointment have any attachments?
 * @apiSuccess (Items) {Number} HerhaalStatus ???
 * @apiSuccess (Items) {Unknown} Herhaling ???
 * @apiSuccess (Items) {Number} Id ID of appointment? No idea what this does.
 * @apiSuccess (Items) {Number} InfoType ???
 * @apiSuccess (Items) {Unknown} Inhoud ???
 * @apiSuccess (Items) {Boolean} IsOnlineDeelname Is the class online? (camera icon)
 * @apiSuccess (Items) {Number} LesuurTotMet ???
 * @apiSuccess (Items) {Number} LesuurVan ???
 * @apiSuccess (Items) {Object[]} Links `Array<Object>` with Magister API URLs
 * 
 * **More info below.**
 * @apiSuccess (Items) {Object[]} Lokalen `Array<Object>` of classrooms.
 * 
 * **More info below.**
 * @apiSuccess (Items) {String} Lokatie Exactly the same thing as above, e.g. "s426"
 * @apiSuccess (Items) {String} Omschrijving Description of class as displayed on appointment details in Magister
 * @apiSuccess (Items) {Number} OpdrachtId ???
 * @apiSuccess (Items) {Number} Status Appears to only be `1`
 * @apiSuccess (Items) {Number} Type ???
 * @apiSuccess (Items) {Object[]} Vakken `Array<Object>` of classes in appointment. Chance of multiple objects in this array is small, since this would require a mess-up from the schedule writer's side.
 * 
 * **More info below.**
 * @apiSuccess (Items) {Number} WeergaveType ???
 * 
 * @apiSuccess (Docenten) {String} Docentcode Teacher's abbreviated name
 * @apiSuccess (Docenten) {Number} Id ???
 * @apiSuccess (Docenten) {String} Naam Teacher's full name
 * @apiSuccess (Links) {String} Href API URL
 * @apiSuccess (Links) {String} Rel Either "Self" or "Next", no idea what purpose it serves.
 * @apiSuccess (Lokalen) {String} Naam Classroom name (e.g. "s426")
 * @apiSuccess (Vakken) {Number} Id ID of class.
 * @apiSuccess (Vakken) {String} Naam Name as displayed under "Vak" on appointment details in Magister.
 */