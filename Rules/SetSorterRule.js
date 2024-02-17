/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SetSorterRule(clientAPI) {

    let filterResult = [];

    if (clientAPI.evaluateTargetPath('#Page:SorterWindow/#Control:WCMListSorter/#Value').filterItems[0]) {
        let sortField = clientAPI.evaluateTargetPath('#Page:SorterWindow/#Control:WCMListSorter/#Value').filterItems[0];
        let switchState = clientAPI.evaluateTargetPath('#Page:SorterWindow/#Control:SwitchDescAsc/#Value');
        let sortDirection = switchState ? 'desc' : 'asc';
        let filterQuery = `${sortField} ${sortDirection}`;
        let result0 = [filterQuery];
        let filterCriteria = clientAPI.createFilterCriteria(clientAPI.filterTypeEnum.Sorter, undefined, undefined, result0, true);
        filterResult.push(filterCriteria);
        return filterResult;
    } else {
        return clientAPI.evaluateTargetPath('#Page:SorterWindow/#Control:WCMListSorter/#Value');
    }

}
