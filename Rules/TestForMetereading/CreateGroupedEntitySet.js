/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function CreateGroupedEntitySet(clientAPI) {

    let dummy = "dummy";
    const readPromise = clientAPI.read('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderItems', [], queryOptons);
    // For test in order to get all the items no matter how many SalesOrder the customer has got:
    //const readPromise = clientAPI.read('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderHeaders', []);
    const result = await readPromise;
    const salesItems = result._array;
}
