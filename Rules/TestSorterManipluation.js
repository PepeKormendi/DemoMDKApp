/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TestSorterManipluation(clientAPI) {
 
    // const pageProxy = sectionedTableProxy.getPageProxy();
    // let bindingObject = pageProxy.getActionBinding();
    // let readLink = bindingObject["@odata.readLink"];
    // let actionResult =  context.getActionResult("FilterCustomerList");
    clientAPI.executeAction('/DemoSampleApp/Actions/CloseModalPage_Complete.action');
}
