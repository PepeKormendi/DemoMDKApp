/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function NavToSalesOrder(clientAPI) {
    let salesOrderId = clientAPI.getPageProxy().getPressedItem()._controlView.offsetParent.childNodes[0].innerText.slice(15);
    let itemKey = clientAPI.getPageProxy().getPressedItem()._controlView.offsetParent.offsetParent.childNodes[0].childNodes[0].ownerElement._state.placeholder;
    let filtered = clientAPI.binding.SalesOrders.filter(row => row.SalesOrderId == itemKey);
    clientAPI.getPageProxy().setActionBinding(filtered);
    clientAPI.executeAction('/DemoSampleApp/Actions/TestActionForMeterReading/NavToSalesNew.action');

}
