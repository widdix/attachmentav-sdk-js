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
 * The SyncDownloadScanRequest model module.
 * @module model/SyncDownloadScanRequest
 * @version 0.1.0
 */
class SyncDownloadScanRequest {
    /**
     * Constructs a new <code>SyncDownloadScanRequest</code>.
     * @alias module:model/SyncDownloadScanRequest
     * @param downloadUrl {String} 
     */
    constructor(downloadUrl) { 
        
        SyncDownloadScanRequest.initialize(this, downloadUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, downloadUrl) { 
        obj['download_url'] = downloadUrl;
    }

    /**
     * Constructs a <code>SyncDownloadScanRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncDownloadScanRequest} obj Optional instance to populate.
     * @return {module:model/SyncDownloadScanRequest} The populated <code>SyncDownloadScanRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SyncDownloadScanRequest();

            if (data.hasOwnProperty('download_url')) {
                obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
            }
            if (data.hasOwnProperty('download_headers')) {
                obj['download_headers'] = ApiClient.convertToType(data['download_headers'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SyncDownloadScanRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SyncDownloadScanRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SyncDownloadScanRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['download_url'] && !(typeof data['download_url'] === 'string' || data['download_url'] instanceof String)) {
            throw new Error("Expected the field `download_url` to be a primitive type in the JSON string but got " + data['download_url']);
        }

        return true;
    }


}

SyncDownloadScanRequest.RequiredProperties = ["download_url"];

/**
 * @member {String} download_url
 */
SyncDownloadScanRequest.prototype['download_url'] = undefined;

/**
 * @member {Object.<String, String>} download_headers
 */
SyncDownloadScanRequest.prototype['download_headers'] = undefined;






export default SyncDownloadScanRequest;

