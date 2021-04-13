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
 * @apiUse MainParams
 *
 * @apiExample {curl} Example usage:
 *   curl -X GET "http://84.29.92.49:1337/api/rooster?dateFrom=2021-04-13&dateTill=2021-04-15&school=SchoolName&personId=26650&apitoken=<TOKEN>"
 * 
 * @apiUse scheduleRes
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
 * @apiUse MainParams
 *
 * @apiExample {curl} Example usage:
 *   curl -X GET "http://84.29.92.49:1337/api/grades?dateFrom=2021-04-13&dateTill=2021-04-15&school=SchoolName&personId=26650&apitoken=<TOKEN>"
 *
 * @apiUse gradesRes
 * 
 * @apiError MissingToken The API token is missing.
 * @apiError MissingArguments Arguments for the endpoint are missing. This error will appear if *any* of the three are missing.
 */