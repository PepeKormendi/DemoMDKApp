/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SetLastNamaReturn(clientAPI) {


    try {
        let pageProxy = clientAPI.getPageProxy();
        let actionBinding = pageProxy.getActionBinding();
        if (actionBinding.NewProperty) {
            return actionBinding.NewProperty = 'desc' ? 'LastName desc' : 'LastName asc';

        } else {
            return 'LastName asc';
        }

    } catch {
        return 'LastName asc';
    }

}
