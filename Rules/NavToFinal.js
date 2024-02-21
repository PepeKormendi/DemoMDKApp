/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function NavToFinal(clientAPI) {

    clientAPI.getPageProxy().setActionBinding(clientAPI.getPageProxy().getActionBinding());
    return clientAPI.executeAction('/DemoSampleApp/Actions/TestActionForMeterReading/NavToFinalSalesOrderItem.action');
}
