/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function FiBlankPageMetadata(clientAPI) {
    //Get the template page:
    let blankPage = clientAPI.getPageProxy().getPageDefinition('/DemoSampleApp/Pages/TestPagesForMeterReading/MeterReadingTemplate.page');
    blankPage.Caption = 'Meter Reading List';
    // decouple the Object reference:
    // let sectionWithReference = blankPage.Controls[0].Sections[0];
    let sectionTemplate = JSON.parse(JSON.stringify(blankPage.Controls[0].Sections[0]));
    let sectionFormCell = JSON.parse(JSON.stringify(blankPage.Controls[0].Sections[1]));
    let sectionTarget = JSON.parse(JSON.stringify(blankPage.Controls[0].Target));

    // Get the Sales Orders to the given Customer:
    //let entity = `Customers('${clientAPI.getActionBinding().CustomerId}')/SalesOrders`;
    let CustomerId = clientAPI.getActionBinding().CustomerId;
    let queryOptons = `$filter=CustomerId eq '${CustomerId}'`;

    //const readPromise = clientAPI.read('/DemoSampleApp/Services/SampleServiceV2.service', entity, []);
    const readPromise = clientAPI.read('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderHeaders', [], queryOptons);
    // For test in order to get all the items no matter how many SalesOrder the customer has got:
    //const readPromise = clientAPI.read('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderHeaders', []);
    const result = await readPromise;
    const salesOrders = result._array;
    clientAPI.getPageProxy().setActionBinding(result);

    // Create all the exisiting salesOrder Block Dynamically:
    salesOrders.forEach((order, index) => {
        sectionTemplate.KeyAndValues.forEach((keyVal, i) => {
            switch (keyVal._Name) {
                case 'KeyValue0':
                    keyVal.Value = order.SalesOrderId;
                    break;
                case 'KeyValue1':
                    keyVal.Value = order.CustomerId;
                    break;
                case 'KeyValue2':
                    keyVal.Value = order.NetAmount;
                    break;
                case 'KeyValue3':
                    keyVal.Value = order.TaxAmount;
                    break;
                case 'KeyValue4':
                    keyVal.Value = order.GrossAmount;
                    break;
                case 'KeyValue5':
                    keyVal.Value = order.CurrencyCode;
                    break;
            }
        })
        sectionTemplate._Name = `SectionKeyValue${index}`;
        sectionTemplate.Target.EntitySet = `SalesOrderHeaders('${order.SalesOrderId}')`;
        sectionTemplate.Target.ReadLink = `SalesOrderHeaders('${order.SalesOrderId}')`;
        //sectionFormCell._Name = `SectionFormCell${index}`;
        
        if (index === 0) {
            blankPage.Controls[0].Sections[0] = JSON.parse(JSON.stringify(sectionTemplate));
        }
        else {
            blankPage.Controls[0].Sections.push(JSON.parse(JSON.stringify(sectionTemplate)));
            blankPage.Controls[0].Sections.push(JSON.parse(JSON.stringify(sectionFormCell)));
        }

    })
    return blankPage;
}


