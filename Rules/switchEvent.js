/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
import SetLastNamaReturn from './SetLastNamaReturn';
export default function switchEvent(clientAPI) {
    let pageProxy = clientAPI.getPageProxy();
    let switchState = clientAPI.evaluateTargetPath('#Page:SorterWindow/#Control:SwitchDescAsc/#Value');
    let order = switchState ? 'desc' : 'asc';
    pageProxy.setActionBinding({
        "NewProperty": order
      });

      // let sorter = clientAPI.evaluateTargetPath('#Page:SorterWindow');
      sorter.redraw();
}
