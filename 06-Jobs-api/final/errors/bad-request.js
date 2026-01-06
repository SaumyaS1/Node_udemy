import CustomAPIError from './custom-api.js'

import {StatusCodes} from 'http-status-codes'     // {} 'http-status-codes'

class BadRequest extends CustomAPIError{
    constructor(message){
        super(message)
        this.statuscode= StatusCodes.BAD_REQUEST     //400
    }
}
export default BadRequest