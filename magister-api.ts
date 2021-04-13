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