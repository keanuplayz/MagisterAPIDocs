/**
 * @apiDefine gradesRes
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
 */