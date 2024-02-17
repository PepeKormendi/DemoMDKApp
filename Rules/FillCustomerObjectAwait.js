/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function FillCustomerObjectAwait(clientAPI) {
    var readPromise = clientAPI.read('/DemoSampleApp/Services/SampleServiceV2.service', 'Customers', [], '');

    const result = await readPromise;
    //the result is an ObservableArray (https://docs.nativescript.org/ns-framework-modules/observable-array)
    alert("length: " + result.length);
    var returnArray = [];
    let array = result._array;
    for (var i = 0; i < array.length; i++) {
        //var item = array.getItem(i);
        // Only add item with OrderNumber less than 100 to the return array;
        // This is just an example, you should change this according to your need
        let item = array[i];
        returnArray.push(item);

    }
    // Finally, return the filtered array
    let stringifiedCustomers = JSON.stringify(returnArray);
    clientAPI.nativescript.appSettingsModule.setString('CustomersObject', stringifiedCustomers);
    let customObject = clientAPI.nativescript.appSettingsModule.getString('CustomersObject');
    alert("CustomersObject: " + customObject);
    let firstcustomer = JSON.parse(customObject);
    let firstid = firstcustomer[0].CustomerId;
    alert("First Customer " + firstid);
    return returnArray;
}
