/**
 * attachmentAV
 * An SDK to integrate virus and malware scan capabilities into JavaScript applications. Scan files for viruses, trojans, and other kinds of malware with attachmentAV powered by Sophos.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ScanResult model module.
 * @module model/ScanResult
 * @version 0.1.0
 */
class ScanResult {
    /**
     * Constructs a new <code>ScanResult</code>.
     * @alias module:model/ScanResult
     */
    constructor() { 
        
        ScanResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScanResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScanResult} obj Optional instance to populate.
     * @return {module:model/ScanResult} The populated <code>ScanResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScanResult();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('finding')) {
                obj['finding'] = ApiClient.convertToType(data['finding'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('realfiletype')) {
                obj['realfiletype'] = ApiClient.convertToType(data['realfiletype'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScanResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScanResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['finding'] && !(typeof data['finding'] === 'string' || data['finding'] instanceof String)) {
            throw new Error("Expected the field `finding` to be a primitive type in the JSON string but got " + data['finding']);
        }
        // ensure the json data is a string
        if (data['size'] && !(typeof data['size'] === 'string' || data['size'] instanceof String)) {
            throw new Error("Expected the field `size` to be a primitive type in the JSON string but got " + data['size']);
        }
        // ensure the json data is a string
        if (data['realfiletype'] && !(typeof data['realfiletype'] === 'string' || data['realfiletype'] instanceof String)) {
            throw new Error("Expected the field `realfiletype` to be a primitive type in the JSON string but got " + data['realfiletype']);
        }

        return true;
    }


}



/**
 * @member {String} status
 */
ScanResult.prototype['status'] = undefined;

/**
 * @member {String} finding
 */
ScanResult.prototype['finding'] = undefined;

/**
 * @member {String} size
 */
ScanResult.prototype['size'] = undefined;

/**
 * @member {String} realfiletype
 */
ScanResult.prototype['realfiletype'] = undefined;






export default ScanResult;

