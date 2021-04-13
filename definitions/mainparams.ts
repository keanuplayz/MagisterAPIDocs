/**
 * @apiDefine MainParams
 * @apiParam {String} apitoken Your API token. Should be retrieved from `/api/auth`.
 * @apiParam {String} dateFrom Date from where the API should look for schedule info. Should be of format `YYYY-MM-DD`.
 * @apiParam {String} dateTill Date to where the API should look for schedule info. Should be of format `YYYY-MM-DD`.
 * @apiParam {String} school The school you're fetching schedule info from. Should be the name you enter in the Magister URL. (`SchoolName.magister.net`)
 * @apiParam {Number} personId Your person ID. Should be retrieved from `/api/auth`.
 */