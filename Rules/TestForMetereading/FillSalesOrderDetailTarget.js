/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function FillSalesOrderDetailTarget(clientAPI) {
    
    let queryOptions = `$orderby=SalesOrderId asc`;
    const readPromise = clientAPI.read('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderItems', [], queryOptions);
    const result = await readPromise;

    const salesItems = result._array;
    const firstItems = [];
    let id = "";
    salesItems.forEach(item => {
        if (item.SalesOrderId != id) {
            firstItems.push(item);
        }
        id = item.SalesOrderId;
    });
    return firstItems;
}
