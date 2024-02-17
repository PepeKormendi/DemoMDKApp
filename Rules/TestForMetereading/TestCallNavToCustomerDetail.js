/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TestCallNavToCustomerDetail(clientAPI) {
    clientAPI.getPageProxy().setActionBinding(clientAPI.binding);
    clientAPI.executeAction('/DemoSampleApp/Actions/NavToCustDetailFromTest.action');
}
