/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function BarcodeNavMetadata(clientAPI) {
    clientAPI.getPageProxy().setActionBinding(clientAPI.binding);
    clientAPI.executeAction('/DemoSampleApp/Actions/TestActionForMeterReading/NavToComment.action');
}
