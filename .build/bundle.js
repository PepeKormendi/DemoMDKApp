(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let demosampleapp_actions_appupdate_action = __webpack_require__(/*! ./DemoSampleApp/Actions/AppUpdate.action */ "./build.definitions/DemoSampleApp/Actions/AppUpdate.action")
let demosampleapp_actions_appupdatefailuremessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/AppUpdateFailureMessage.action */ "./build.definitions/DemoSampleApp/Actions/AppUpdateFailureMessage.action")
let demosampleapp_actions_appupdateprogressbanner_action = __webpack_require__(/*! ./DemoSampleApp/Actions/AppUpdateProgressBanner.action */ "./build.definitions/DemoSampleApp/Actions/AppUpdateProgressBanner.action")
let demosampleapp_actions_appupdatesuccessmessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/AppUpdateSuccessMessage.action */ "./build.definitions/DemoSampleApp/Actions/AppUpdateSuccessMessage.action")
let demosampleapp_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./DemoSampleApp/Actions/CloseModalPage_Cancel.action */ "./build.definitions/DemoSampleApp/Actions/CloseModalPage_Cancel.action")
let demosampleapp_actions_closemodalpage_complete_action = __webpack_require__(/*! ./DemoSampleApp/Actions/CloseModalPage_Complete.action */ "./build.definitions/DemoSampleApp/Actions/CloseModalPage_Complete.action")
let demosampleapp_actions_closepage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/ClosePage.action */ "./build.definitions/DemoSampleApp/Actions/ClosePage.action")
let demosampleapp_actions_createcustomerentityfailuremessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/CreateCustomerEntityFailureMessage.action */ "./build.definitions/DemoSampleApp/Actions/CreateCustomerEntityFailureMessage.action")
let demosampleapp_actions_createsalesorderheaderentityfailuremessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/CreateSalesOrderHeaderEntityFailureMessage.action */ "./build.definitions/DemoSampleApp/Actions/CreateSalesOrderHeaderEntityFailureMessage.action")
let demosampleapp_actions_customers_createentity_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Customers_CreateEntity.action */ "./build.definitions/DemoSampleApp/Actions/Customers_CreateEntity.action")
let demosampleapp_actions_customers_deleteconfirmation_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Customers_DeleteConfirmation.action */ "./build.definitions/DemoSampleApp/Actions/Customers_DeleteConfirmation.action")
let demosampleapp_actions_customers_deleteentity_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Customers_DeleteEntity.action */ "./build.definitions/DemoSampleApp/Actions/Customers_DeleteEntity.action")
let demosampleapp_actions_customers_updateentity_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Customers_UpdateEntity.action */ "./build.definitions/DemoSampleApp/Actions/Customers_UpdateEntity.action")
let demosampleapp_actions_deletecustomerentityfailuremessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/DeleteCustomerEntityFailureMessage.action */ "./build.definitions/DemoSampleApp/Actions/DeleteCustomerEntityFailureMessage.action")
let demosampleapp_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./DemoSampleApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/DemoSampleApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let demosampleapp_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./DemoSampleApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/DemoSampleApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let demosampleapp_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./DemoSampleApp/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/DemoSampleApp/Actions/ErrorArchive/NavToErrorArchive_List.action")
let demosampleapp_actions_fileronload_action = __webpack_require__(/*! ./DemoSampleApp/Actions/FilerOnLoad.action */ "./build.definitions/DemoSampleApp/Actions/FilerOnLoad.action")
let demosampleapp_actions_filtercustomdatra_action = __webpack_require__(/*! ./DemoSampleApp/Actions/FilterCustomDatra.action */ "./build.definitions/DemoSampleApp/Actions/FilterCustomDatra.action")
let demosampleapp_actions_filtercustomerlist_action = __webpack_require__(/*! ./DemoSampleApp/Actions/FilterCustomerList.action */ "./build.definitions/DemoSampleApp/Actions/FilterCustomerList.action")
let demosampleapp_actions_filteronresume_action = __webpack_require__(/*! ./DemoSampleApp/Actions/FilterOnResume.action */ "./build.definitions/DemoSampleApp/Actions/FilterOnResume.action")
let demosampleapp_actions_filteronreturn_action = __webpack_require__(/*! ./DemoSampleApp/Actions/FilterOnReturn.action */ "./build.definitions/DemoSampleApp/Actions/FilterOnReturn.action")
let demosampleapp_actions_filteronunloaded_action = __webpack_require__(/*! ./DemoSampleApp/Actions/FilterOnUnloaded.action */ "./build.definitions/DemoSampleApp/Actions/FilterOnUnloaded.action")
let demosampleapp_actions_logout_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Logout.action */ "./build.definitions/DemoSampleApp/Actions/Logout.action")
let demosampleapp_actions_logoutmessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/LogoutMessage.action */ "./build.definitions/DemoSampleApp/Actions/LogoutMessage.action")
let demosampleapp_actions_logsetlevel_action = __webpack_require__(/*! ./DemoSampleApp/Actions/LogSetLevel.action */ "./build.definitions/DemoSampleApp/Actions/LogSetLevel.action")
let demosampleapp_actions_logsetstate_action = __webpack_require__(/*! ./DemoSampleApp/Actions/LogSetState.action */ "./build.definitions/DemoSampleApp/Actions/LogSetState.action")
let demosampleapp_actions_logupload_action = __webpack_require__(/*! ./DemoSampleApp/Actions/LogUpload.action */ "./build.definitions/DemoSampleApp/Actions/LogUpload.action")
let demosampleapp_actions_loguploadfailure_action = __webpack_require__(/*! ./DemoSampleApp/Actions/LogUploadFailure.action */ "./build.definitions/DemoSampleApp/Actions/LogUploadFailure.action")
let demosampleapp_actions_loguploadsuccessful_action = __webpack_require__(/*! ./DemoSampleApp/Actions/LogUploadSuccessful.action */ "./build.definitions/DemoSampleApp/Actions/LogUploadSuccessful.action")
let demosampleapp_actions_navtocustdetailfromtest_action = __webpack_require__(/*! ./DemoSampleApp/Actions/NavToCustDetailFromTest.action */ "./build.definitions/DemoSampleApp/Actions/NavToCustDetailFromTest.action")
let demosampleapp_actions_navtocustomers_create_action = __webpack_require__(/*! ./DemoSampleApp/Actions/NavToCustomers_Create.action */ "./build.definitions/DemoSampleApp/Actions/NavToCustomers_Create.action")
let demosampleapp_actions_navtocustomers_detail_action = __webpack_require__(/*! ./DemoSampleApp/Actions/NavToCustomers_Detail.action */ "./build.definitions/DemoSampleApp/Actions/NavToCustomers_Detail.action")
let demosampleapp_actions_navtocustomers_edit_action = __webpack_require__(/*! ./DemoSampleApp/Actions/NavToCustomers_Edit.action */ "./build.definitions/DemoSampleApp/Actions/NavToCustomers_Edit.action")
let demosampleapp_actions_navtocustomers_list_action = __webpack_require__(/*! ./DemoSampleApp/Actions/NavToCustomers_List.action */ "./build.definitions/DemoSampleApp/Actions/NavToCustomers_List.action")
let demosampleapp_actions_navtocustomers_orders_action = __webpack_require__(/*! ./DemoSampleApp/Actions/NavToCustomers_Orders.action */ "./build.definitions/DemoSampleApp/Actions/NavToCustomers_Orders.action")
let demosampleapp_actions_navtosalesorderheaders_create_action = __webpack_require__(/*! ./DemoSampleApp/Actions/NavToSalesOrderHeaders_Create.action */ "./build.definitions/DemoSampleApp/Actions/NavToSalesOrderHeaders_Create.action")
let demosampleapp_actions_navtosalesorders_details_action = __webpack_require__(/*! ./DemoSampleApp/Actions/NavToSalesOrders_Details.action */ "./build.definitions/DemoSampleApp/Actions/NavToSalesOrders_Details.action")
let demosampleapp_actions_onwillupdate_action = __webpack_require__(/*! ./DemoSampleApp/Actions/OnWillUpdate.action */ "./build.definitions/DemoSampleApp/Actions/OnWillUpdate.action")
let demosampleapp_actions_salesorderheaders_createentity_action = __webpack_require__(/*! ./DemoSampleApp/Actions/SalesOrderHeaders_CreateEntity.action */ "./build.definitions/DemoSampleApp/Actions/SalesOrderHeaders_CreateEntity.action")
let demosampleapp_actions_service_closeoffline_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Service/CloseOffline.action */ "./build.definitions/DemoSampleApp/Actions/Service/CloseOffline.action")
let demosampleapp_actions_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Service/CloseOfflineFailureMessage.action */ "./build.definitions/DemoSampleApp/Actions/Service/CloseOfflineFailureMessage.action")
let demosampleapp_actions_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/DemoSampleApp/Actions/Service/CloseOfflineSuccessMessage.action")
let demosampleapp_actions_service_downloadoffline_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Service/DownloadOffline.action */ "./build.definitions/DemoSampleApp/Actions/Service/DownloadOffline.action")
let demosampleapp_actions_service_downloadstartedmessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Service/DownloadStartedMessage.action */ "./build.definitions/DemoSampleApp/Actions/Service/DownloadStartedMessage.action")
let demosampleapp_actions_service_initializeoffline_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Service/InitializeOffline.action */ "./build.definitions/DemoSampleApp/Actions/Service/InitializeOffline.action")
let demosampleapp_actions_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/DemoSampleApp/Actions/Service/InitializeOfflineFailureMessage.action")
let demosampleapp_actions_service_initializeofflinesuccessmessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Service/InitializeOfflineSuccessMessage.action */ "./build.definitions/DemoSampleApp/Actions/Service/InitializeOfflineSuccessMessage.action")
let demosampleapp_actions_service_syncfailuremessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Service/SyncFailureMessage.action */ "./build.definitions/DemoSampleApp/Actions/Service/SyncFailureMessage.action")
let demosampleapp_actions_service_syncstartedmessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Service/SyncStartedMessage.action */ "./build.definitions/DemoSampleApp/Actions/Service/SyncStartedMessage.action")
let demosampleapp_actions_service_syncsuccessmessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Service/SyncSuccessMessage.action */ "./build.definitions/DemoSampleApp/Actions/Service/SyncSuccessMessage.action")
let demosampleapp_actions_service_uploadoffline_action = __webpack_require__(/*! ./DemoSampleApp/Actions/Service/UploadOffline.action */ "./build.definitions/DemoSampleApp/Actions/Service/UploadOffline.action")
let demosampleapp_actions_testactionformeterreading_navtoblankpage2_action = __webpack_require__(/*! ./DemoSampleApp/Actions/TestActionForMeterReading/NavToBlankPage2.action */ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToBlankPage2.action")
let demosampleapp_actions_testactionformeterreading_navtoblankpage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/TestActionForMeterReading/NavToBlankPage.action */ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToBlankPage.action")
let demosampleapp_actions_testactionformeterreading_navtocomment_action = __webpack_require__(/*! ./DemoSampleApp/Actions/TestActionForMeterReading/NavToComment.action */ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToComment.action")
let demosampleapp_actions_testactionformeterreading_navtofinalsalesorderitem_action = __webpack_require__(/*! ./DemoSampleApp/Actions/TestActionForMeterReading/NavToFinalSalesOrderItem.action */ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToFinalSalesOrderItem.action")
let demosampleapp_actions_testactionformeterreading_navtogroupedby_action = __webpack_require__(/*! ./DemoSampleApp/Actions/TestActionForMeterReading/NavToGroupedBy.action */ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToGroupedBy.action")
let demosampleapp_actions_testactionformeterreading_navtokeypaircollectionpage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/TestActionForMeterReading/NavToKeyPairCollectionPage.action */ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToKeyPairCollectionPage.action")
let demosampleapp_actions_testactionformeterreading_navtomrlist_action = __webpack_require__(/*! ./DemoSampleApp/Actions/TestActionForMeterReading/NavToMRList.action */ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToMRList.action")
let demosampleapp_actions_testactionformeterreading_navtosalesnew_action = __webpack_require__(/*! ./DemoSampleApp/Actions/TestActionForMeterReading/NavToSalesNew.action */ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToSalesNew.action")
let demosampleapp_actions_testactionformeterreading_navtotestmrflexible_action = __webpack_require__(/*! ./DemoSampleApp/Actions/TestActionForMeterReading/NavToTestMRFlexible.action */ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToTestMRFlexible.action")
let demosampleapp_actions_testactionformeterreading_navtotestsalesdet_action = __webpack_require__(/*! ./DemoSampleApp/Actions/TestActionForMeterReading/NavToTestSalesDet.action */ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToTestSalesDet.action")
let demosampleapp_actions_updatecustomerentityfailuremessage_action = __webpack_require__(/*! ./DemoSampleApp/Actions/UpdateCustomerEntityFailureMessage.action */ "./build.definitions/DemoSampleApp/Actions/UpdateCustomerEntityFailureMessage.action")
let demosampleapp_actions_validationfailure_action = __webpack_require__(/*! ./DemoSampleApp/Actions/ValidationFailure.action */ "./build.definitions/DemoSampleApp/Actions/ValidationFailure.action")
let demosampleapp_globals_appdefinition_version_global = __webpack_require__(/*! ./DemoSampleApp/Globals/AppDefinition_Version.global */ "./build.definitions/DemoSampleApp/Globals/AppDefinition_Version.global")
let demosampleapp_i18n_i18n_de_properties = __webpack_require__(/*! ./DemoSampleApp/i18n/i18n_de.properties */ "./build.definitions/DemoSampleApp/i18n/i18n_de.properties")
let demosampleapp_i18n_i18n_properties = __webpack_require__(/*! ./DemoSampleApp/i18n/i18n.properties */ "./build.definitions/DemoSampleApp/i18n/i18n.properties")
let demosampleapp_jsconfig_json = __webpack_require__(/*! ./DemoSampleApp/jsconfig.json */ "./build.definitions/DemoSampleApp/jsconfig.json")
let demosampleapp_pages_customers_create_page = __webpack_require__(/*! ./DemoSampleApp/Pages/Customers_Create.page */ "./build.definitions/DemoSampleApp/Pages/Customers_Create.page")
let demosampleapp_pages_customers_detail_page = __webpack_require__(/*! ./DemoSampleApp/Pages/Customers_Detail.page */ "./build.definitions/DemoSampleApp/Pages/Customers_Detail.page")
let demosampleapp_pages_customers_edit_page = __webpack_require__(/*! ./DemoSampleApp/Pages/Customers_Edit.page */ "./build.definitions/DemoSampleApp/Pages/Customers_Edit.page")
let demosampleapp_pages_customers_list_page = __webpack_require__(/*! ./DemoSampleApp/Pages/Customers_List.page */ "./build.definitions/DemoSampleApp/Pages/Customers_List.page")
let demosampleapp_pages_customers_orders_page = __webpack_require__(/*! ./DemoSampleApp/Pages/Customers_Orders.page */ "./build.definitions/DemoSampleApp/Pages/Customers_Orders.page")
let demosampleapp_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./DemoSampleApp/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/DemoSampleApp/Pages/ErrorArchive/ErrorArchive_Detail.page")
let demosampleapp_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./DemoSampleApp/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/DemoSampleApp/Pages/ErrorArchive/ErrorArchive_List.page")
let demosampleapp_pages_main_page = __webpack_require__(/*! ./DemoSampleApp/Pages/Main.page */ "./build.definitions/DemoSampleApp/Pages/Main.page")
let demosampleapp_pages_salesorderheaders_create_page = __webpack_require__(/*! ./DemoSampleApp/Pages/SalesOrderHeaders_Create.page */ "./build.definitions/DemoSampleApp/Pages/SalesOrderHeaders_Create.page")
let demosampleapp_pages_salesorders_details_page = __webpack_require__(/*! ./DemoSampleApp/Pages/SalesOrders_Details.page */ "./build.definitions/DemoSampleApp/Pages/SalesOrders_Details.page")
let demosampleapp_pages_sorterwindow_page = __webpack_require__(/*! ./DemoSampleApp/Pages/SorterWindow.page */ "./build.definitions/DemoSampleApp/Pages/SorterWindow.page")
let demosampleapp_pages_testpagesformeterreading_blank_page = __webpack_require__(/*! ./DemoSampleApp/Pages/TestPagesForMeterReading/Blank.page */ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/Blank.page")
let demosampleapp_pages_testpagesformeterreading_commentpage_page = __webpack_require__(/*! ./DemoSampleApp/Pages/TestPagesForMeterReading/CommentPage.page */ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/CommentPage.page")
let demosampleapp_pages_testpagesformeterreading_customers_detail_page = __webpack_require__(/*! ./DemoSampleApp/Pages/TestPagesForMeterReading/Customers_Detail.page */ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/Customers_Detail.page")
let demosampleapp_pages_testpagesformeterreading_customers_listmr_page = __webpack_require__(/*! ./DemoSampleApp/Pages/TestPagesForMeterReading/Customers_ListMR.page */ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/Customers_ListMR.page")
let demosampleapp_pages_testpagesformeterreading_groupedsalesorderheader_page = __webpack_require__(/*! ./DemoSampleApp/Pages/TestPagesForMeterReading/GroupedSalesOrderHeader.page */ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/GroupedSalesOrderHeader.page")
let demosampleapp_pages_testpagesformeterreading_meterreadingtemplate2_page = __webpack_require__(/*! ./DemoSampleApp/Pages/TestPagesForMeterReading/MeterReadingTemplate2.page */ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/MeterReadingTemplate2.page")
let demosampleapp_pages_testpagesformeterreading_meterreadingtemplate_page = __webpack_require__(/*! ./DemoSampleApp/Pages/TestPagesForMeterReading/MeterReadingTemplate.page */ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/MeterReadingTemplate.page")
let demosampleapp_pages_testpagesformeterreading_salesitemfinal_page = __webpack_require__(/*! ./DemoSampleApp/Pages/TestPagesForMeterReading/SalesItemFInal.page */ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/SalesItemFInal.page")
let demosampleapp_pages_testpagesformeterreading_salesorderdetnew_page = __webpack_require__(/*! ./DemoSampleApp/Pages/TestPagesForMeterReading/SalesOrderDetNew.page */ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/SalesOrderDetNew.page")
let demosampleapp_pages_testpagesformeterreading_salesordernew_page = __webpack_require__(/*! ./DemoSampleApp/Pages/TestPagesForMeterReading/SalesOrderNew.page */ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/SalesOrderNew.page")
let demosampleapp_pages_testpagesformeterreading_ttmeterreadingflexible_page = __webpack_require__(/*! ./DemoSampleApp/Pages/TestPagesForMeterReading/TtMeterReadingFlexible.page */ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/TtMeterReadingFlexible.page")
let demosampleapp_rules_appupdatefailure_js = __webpack_require__(/*! ./DemoSampleApp/Rules/AppUpdateFailure.js */ "./build.definitions/DemoSampleApp/Rules/AppUpdateFailure.js")
let demosampleapp_rules_appupdatesuccess_js = __webpack_require__(/*! ./DemoSampleApp/Rules/AppUpdateSuccess.js */ "./build.definitions/DemoSampleApp/Rules/AppUpdateSuccess.js")
let demosampleapp_rules_customers_deleteconfirmation_js = __webpack_require__(/*! ./DemoSampleApp/Rules/Customers_DeleteConfirmation.js */ "./build.definitions/DemoSampleApp/Rules/Customers_DeleteConfirmation.js")
let demosampleapp_rules_customers_ordercount_js = __webpack_require__(/*! ./DemoSampleApp/Rules/Customers_OrderCount.js */ "./build.definitions/DemoSampleApp/Rules/Customers_OrderCount.js")
let demosampleapp_rules_dummylink_js = __webpack_require__(/*! ./DemoSampleApp/Rules/dummylink.js */ "./build.definitions/DemoSampleApp/Rules/dummylink.js")
let demosampleapp_rules_emailvalidation_js = __webpack_require__(/*! ./DemoSampleApp/Rules/EmailValidation.js */ "./build.definitions/DemoSampleApp/Rules/EmailValidation.js")
let demosampleapp_rules_errorarchive_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./DemoSampleApp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js */ "./build.definitions/DemoSampleApp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js")
let demosampleapp_rules_fillcustomerobjectawait_js = __webpack_require__(/*! ./DemoSampleApp/Rules/FillCustomerObjectAwait.js */ "./build.definitions/DemoSampleApp/Rules/FillCustomerObjectAwait.js")
let demosampleapp_rules_fillcustomobject_js = __webpack_require__(/*! ./DemoSampleApp/Rules/FillCustomObject.js */ "./build.definitions/DemoSampleApp/Rules/FillCustomObject.js")
let demosampleapp_rules_navtofinal_js = __webpack_require__(/*! ./DemoSampleApp/Rules/NavToFinal.js */ "./build.definitions/DemoSampleApp/Rules/NavToFinal.js")
let demosampleapp_rules_onwillupdate_js = __webpack_require__(/*! ./DemoSampleApp/Rules/OnWillUpdate.js */ "./build.definitions/DemoSampleApp/Rules/OnWillUpdate.js")
let demosampleapp_rules_resetappsettingsandlogout_js = __webpack_require__(/*! ./DemoSampleApp/Rules/ResetAppSettingsAndLogout.js */ "./build.definitions/DemoSampleApp/Rules/ResetAppSettingsAndLogout.js")
let demosampleapp_rules_setlastnamareturn_js = __webpack_require__(/*! ./DemoSampleApp/Rules/SetLastNamaReturn.js */ "./build.definitions/DemoSampleApp/Rules/SetLastNamaReturn.js")
let demosampleapp_rules_setsorterrule_js = __webpack_require__(/*! ./DemoSampleApp/Rules/SetSorterRule.js */ "./build.definitions/DemoSampleApp/Rules/SetSorterRule.js")
let demosampleapp_rules_setsortorder_js = __webpack_require__(/*! ./DemoSampleApp/Rules/SetSortOrder.js */ "./build.definitions/DemoSampleApp/Rules/SetSortOrder.js")
let demosampleapp_rules_switchevent_js = __webpack_require__(/*! ./DemoSampleApp/Rules/switchEvent.js */ "./build.definitions/DemoSampleApp/Rules/switchEvent.js")
let demosampleapp_rules_testformetereading_barcodenavmetadata_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/BarcodeNavMetadata.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/BarcodeNavMetadata.js")
let demosampleapp_rules_testformetereading_commentvaluetest_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/CommentValueTest.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/CommentValueTest.js")
let demosampleapp_rules_testformetereading_creategroupedentityset_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/CreateGroupedEntitySet.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/CreateGroupedEntitySet.js")
let demosampleapp_rules_testformetereading_fiblankpagemetadata_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/FiBlankPageMetadata.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/FiBlankPageMetadata.js")
let demosampleapp_rules_testformetereading_fillsalesorderdetailtarget_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/FillSalesOrderDetailTarget.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/FillSalesOrderDetailTarget.js")
let demosampleapp_rules_testformetereading_filltestcustomer_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/FillTestCustomer.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/FillTestCustomer.js")
let demosampleapp_rules_testformetereading_metadatacheckdetail_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/MetadatacheckDetail.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/MetadatacheckDetail.js")
let demosampleapp_rules_testformetereading_navtosalesorder_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/NavToSalesOrder.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/NavToSalesOrder.js")
let demosampleapp_rules_testformetereading_pagemetadatanavblank2_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/PageMetadataNavBlank2.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/PageMetadataNavBlank2.js")
let demosampleapp_rules_testformetereading_readlinkfiller_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/ReadLinkFiller.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/ReadLinkFiller.js")
let demosampleapp_rules_testformetereading_salesnewnavmetadata_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/SalesNewNavMetadata.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/SalesNewNavMetadata.js")
let demosampleapp_rules_testformetereading_testcallnavtocustomerdetail_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/TestCallNavToCustomerDetail.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/TestCallNavToCustomerDetail.js")
let demosampleapp_rules_testformetereading_testmoreparameter_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/TestMoreParameter.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/TestMoreParameter.js")
let demosampleapp_rules_testformetereading_testrulecustomlist_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/TestRuleCustomList.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/TestRuleCustomList.js")
let demosampleapp_rules_testformetereading_trytofillsectiontarget_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestForMetereading/TryToFillSectionTarget.js */ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/TryToFillSectionTarget.js")
let demosampleapp_rules_testsortermanipluation_js = __webpack_require__(/*! ./DemoSampleApp/Rules/TestSorterManipluation.js */ "./build.definitions/DemoSampleApp/Rules/TestSorterManipluation.js")
let demosampleapp_services_sampleservicev2_service = __webpack_require__(/*! ./DemoSampleApp/Services/SampleServiceV2.service */ "./build.definitions/DemoSampleApp/Services/SampleServiceV2.service")
let demosampleapp_styles_styles_css = __webpack_require__(/*! ./DemoSampleApp/Styles/Styles.css */ "./build.definitions/DemoSampleApp/Styles/Styles.css")
let demosampleapp_styles_styles_json = __webpack_require__(/*! ./DemoSampleApp/Styles/Styles.json */ "./build.definitions/DemoSampleApp/Styles/Styles.json")
let demosampleapp_styles_styles_less = __webpack_require__(/*! ./DemoSampleApp/Styles/Styles.less */ "./build.definitions/DemoSampleApp/Styles/Styles.less")
let demosampleapp_styles_styles_nss = __webpack_require__(/*! ./DemoSampleApp/Styles/Styles.nss */ "./build.definitions/DemoSampleApp/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	demosampleapp_actions_appupdate_action : demosampleapp_actions_appupdate_action,
	demosampleapp_actions_appupdatefailuremessage_action : demosampleapp_actions_appupdatefailuremessage_action,
	demosampleapp_actions_appupdateprogressbanner_action : demosampleapp_actions_appupdateprogressbanner_action,
	demosampleapp_actions_appupdatesuccessmessage_action : demosampleapp_actions_appupdatesuccessmessage_action,
	demosampleapp_actions_closemodalpage_cancel_action : demosampleapp_actions_closemodalpage_cancel_action,
	demosampleapp_actions_closemodalpage_complete_action : demosampleapp_actions_closemodalpage_complete_action,
	demosampleapp_actions_closepage_action : demosampleapp_actions_closepage_action,
	demosampleapp_actions_createcustomerentityfailuremessage_action : demosampleapp_actions_createcustomerentityfailuremessage_action,
	demosampleapp_actions_createsalesorderheaderentityfailuremessage_action : demosampleapp_actions_createsalesorderheaderentityfailuremessage_action,
	demosampleapp_actions_customers_createentity_action : demosampleapp_actions_customers_createentity_action,
	demosampleapp_actions_customers_deleteconfirmation_action : demosampleapp_actions_customers_deleteconfirmation_action,
	demosampleapp_actions_customers_deleteentity_action : demosampleapp_actions_customers_deleteentity_action,
	demosampleapp_actions_customers_updateentity_action : demosampleapp_actions_customers_updateentity_action,
	demosampleapp_actions_deletecustomerentityfailuremessage_action : demosampleapp_actions_deletecustomerentityfailuremessage_action,
	demosampleapp_actions_errorarchive_errorarchive_syncfailure_action : demosampleapp_actions_errorarchive_errorarchive_syncfailure_action,
	demosampleapp_actions_errorarchive_navtoerrorarchive_detail_action : demosampleapp_actions_errorarchive_navtoerrorarchive_detail_action,
	demosampleapp_actions_errorarchive_navtoerrorarchive_list_action : demosampleapp_actions_errorarchive_navtoerrorarchive_list_action,
	demosampleapp_actions_fileronload_action : demosampleapp_actions_fileronload_action,
	demosampleapp_actions_filtercustomdatra_action : demosampleapp_actions_filtercustomdatra_action,
	demosampleapp_actions_filtercustomerlist_action : demosampleapp_actions_filtercustomerlist_action,
	demosampleapp_actions_filteronresume_action : demosampleapp_actions_filteronresume_action,
	demosampleapp_actions_filteronreturn_action : demosampleapp_actions_filteronreturn_action,
	demosampleapp_actions_filteronunloaded_action : demosampleapp_actions_filteronunloaded_action,
	demosampleapp_actions_logout_action : demosampleapp_actions_logout_action,
	demosampleapp_actions_logoutmessage_action : demosampleapp_actions_logoutmessage_action,
	demosampleapp_actions_logsetlevel_action : demosampleapp_actions_logsetlevel_action,
	demosampleapp_actions_logsetstate_action : demosampleapp_actions_logsetstate_action,
	demosampleapp_actions_logupload_action : demosampleapp_actions_logupload_action,
	demosampleapp_actions_loguploadfailure_action : demosampleapp_actions_loguploadfailure_action,
	demosampleapp_actions_loguploadsuccessful_action : demosampleapp_actions_loguploadsuccessful_action,
	demosampleapp_actions_navtocustdetailfromtest_action : demosampleapp_actions_navtocustdetailfromtest_action,
	demosampleapp_actions_navtocustomers_create_action : demosampleapp_actions_navtocustomers_create_action,
	demosampleapp_actions_navtocustomers_detail_action : demosampleapp_actions_navtocustomers_detail_action,
	demosampleapp_actions_navtocustomers_edit_action : demosampleapp_actions_navtocustomers_edit_action,
	demosampleapp_actions_navtocustomers_list_action : demosampleapp_actions_navtocustomers_list_action,
	demosampleapp_actions_navtocustomers_orders_action : demosampleapp_actions_navtocustomers_orders_action,
	demosampleapp_actions_navtosalesorderheaders_create_action : demosampleapp_actions_navtosalesorderheaders_create_action,
	demosampleapp_actions_navtosalesorders_details_action : demosampleapp_actions_navtosalesorders_details_action,
	demosampleapp_actions_onwillupdate_action : demosampleapp_actions_onwillupdate_action,
	demosampleapp_actions_salesorderheaders_createentity_action : demosampleapp_actions_salesorderheaders_createentity_action,
	demosampleapp_actions_service_closeoffline_action : demosampleapp_actions_service_closeoffline_action,
	demosampleapp_actions_service_closeofflinefailuremessage_action : demosampleapp_actions_service_closeofflinefailuremessage_action,
	demosampleapp_actions_service_closeofflinesuccessmessage_action : demosampleapp_actions_service_closeofflinesuccessmessage_action,
	demosampleapp_actions_service_downloadoffline_action : demosampleapp_actions_service_downloadoffline_action,
	demosampleapp_actions_service_downloadstartedmessage_action : demosampleapp_actions_service_downloadstartedmessage_action,
	demosampleapp_actions_service_initializeoffline_action : demosampleapp_actions_service_initializeoffline_action,
	demosampleapp_actions_service_initializeofflinefailuremessage_action : demosampleapp_actions_service_initializeofflinefailuremessage_action,
	demosampleapp_actions_service_initializeofflinesuccessmessage_action : demosampleapp_actions_service_initializeofflinesuccessmessage_action,
	demosampleapp_actions_service_syncfailuremessage_action : demosampleapp_actions_service_syncfailuremessage_action,
	demosampleapp_actions_service_syncstartedmessage_action : demosampleapp_actions_service_syncstartedmessage_action,
	demosampleapp_actions_service_syncsuccessmessage_action : demosampleapp_actions_service_syncsuccessmessage_action,
	demosampleapp_actions_service_uploadoffline_action : demosampleapp_actions_service_uploadoffline_action,
	demosampleapp_actions_testactionformeterreading_navtoblankpage2_action : demosampleapp_actions_testactionformeterreading_navtoblankpage2_action,
	demosampleapp_actions_testactionformeterreading_navtoblankpage_action : demosampleapp_actions_testactionformeterreading_navtoblankpage_action,
	demosampleapp_actions_testactionformeterreading_navtocomment_action : demosampleapp_actions_testactionformeterreading_navtocomment_action,
	demosampleapp_actions_testactionformeterreading_navtofinalsalesorderitem_action : demosampleapp_actions_testactionformeterreading_navtofinalsalesorderitem_action,
	demosampleapp_actions_testactionformeterreading_navtogroupedby_action : demosampleapp_actions_testactionformeterreading_navtogroupedby_action,
	demosampleapp_actions_testactionformeterreading_navtokeypaircollectionpage_action : demosampleapp_actions_testactionformeterreading_navtokeypaircollectionpage_action,
	demosampleapp_actions_testactionformeterreading_navtomrlist_action : demosampleapp_actions_testactionformeterreading_navtomrlist_action,
	demosampleapp_actions_testactionformeterreading_navtosalesnew_action : demosampleapp_actions_testactionformeterreading_navtosalesnew_action,
	demosampleapp_actions_testactionformeterreading_navtotestmrflexible_action : demosampleapp_actions_testactionformeterreading_navtotestmrflexible_action,
	demosampleapp_actions_testactionformeterreading_navtotestsalesdet_action : demosampleapp_actions_testactionformeterreading_navtotestsalesdet_action,
	demosampleapp_actions_updatecustomerentityfailuremessage_action : demosampleapp_actions_updatecustomerentityfailuremessage_action,
	demosampleapp_actions_validationfailure_action : demosampleapp_actions_validationfailure_action,
	demosampleapp_globals_appdefinition_version_global : demosampleapp_globals_appdefinition_version_global,
	demosampleapp_i18n_i18n_de_properties : demosampleapp_i18n_i18n_de_properties,
	demosampleapp_i18n_i18n_properties : demosampleapp_i18n_i18n_properties,
	demosampleapp_jsconfig_json : demosampleapp_jsconfig_json,
	demosampleapp_pages_customers_create_page : demosampleapp_pages_customers_create_page,
	demosampleapp_pages_customers_detail_page : demosampleapp_pages_customers_detail_page,
	demosampleapp_pages_customers_edit_page : demosampleapp_pages_customers_edit_page,
	demosampleapp_pages_customers_list_page : demosampleapp_pages_customers_list_page,
	demosampleapp_pages_customers_orders_page : demosampleapp_pages_customers_orders_page,
	demosampleapp_pages_errorarchive_errorarchive_detail_page : demosampleapp_pages_errorarchive_errorarchive_detail_page,
	demosampleapp_pages_errorarchive_errorarchive_list_page : demosampleapp_pages_errorarchive_errorarchive_list_page,
	demosampleapp_pages_main_page : demosampleapp_pages_main_page,
	demosampleapp_pages_salesorderheaders_create_page : demosampleapp_pages_salesorderheaders_create_page,
	demosampleapp_pages_salesorders_details_page : demosampleapp_pages_salesorders_details_page,
	demosampleapp_pages_sorterwindow_page : demosampleapp_pages_sorterwindow_page,
	demosampleapp_pages_testpagesformeterreading_blank_page : demosampleapp_pages_testpagesformeterreading_blank_page,
	demosampleapp_pages_testpagesformeterreading_commentpage_page : demosampleapp_pages_testpagesformeterreading_commentpage_page,
	demosampleapp_pages_testpagesformeterreading_customers_detail_page : demosampleapp_pages_testpagesformeterreading_customers_detail_page,
	demosampleapp_pages_testpagesformeterreading_customers_listmr_page : demosampleapp_pages_testpagesformeterreading_customers_listmr_page,
	demosampleapp_pages_testpagesformeterreading_groupedsalesorderheader_page : demosampleapp_pages_testpagesformeterreading_groupedsalesorderheader_page,
	demosampleapp_pages_testpagesformeterreading_meterreadingtemplate2_page : demosampleapp_pages_testpagesformeterreading_meterreadingtemplate2_page,
	demosampleapp_pages_testpagesformeterreading_meterreadingtemplate_page : demosampleapp_pages_testpagesformeterreading_meterreadingtemplate_page,
	demosampleapp_pages_testpagesformeterreading_salesitemfinal_page : demosampleapp_pages_testpagesformeterreading_salesitemfinal_page,
	demosampleapp_pages_testpagesformeterreading_salesorderdetnew_page : demosampleapp_pages_testpagesformeterreading_salesorderdetnew_page,
	demosampleapp_pages_testpagesformeterreading_salesordernew_page : demosampleapp_pages_testpagesformeterreading_salesordernew_page,
	demosampleapp_pages_testpagesformeterreading_ttmeterreadingflexible_page : demosampleapp_pages_testpagesformeterreading_ttmeterreadingflexible_page,
	demosampleapp_rules_appupdatefailure_js : demosampleapp_rules_appupdatefailure_js,
	demosampleapp_rules_appupdatesuccess_js : demosampleapp_rules_appupdatesuccess_js,
	demosampleapp_rules_customers_deleteconfirmation_js : demosampleapp_rules_customers_deleteconfirmation_js,
	demosampleapp_rules_customers_ordercount_js : demosampleapp_rules_customers_ordercount_js,
	demosampleapp_rules_dummylink_js : demosampleapp_rules_dummylink_js,
	demosampleapp_rules_emailvalidation_js : demosampleapp_rules_emailvalidation_js,
	demosampleapp_rules_errorarchive_errorarchive_checkforsyncerror_js : demosampleapp_rules_errorarchive_errorarchive_checkforsyncerror_js,
	demosampleapp_rules_fillcustomerobjectawait_js : demosampleapp_rules_fillcustomerobjectawait_js,
	demosampleapp_rules_fillcustomobject_js : demosampleapp_rules_fillcustomobject_js,
	demosampleapp_rules_navtofinal_js : demosampleapp_rules_navtofinal_js,
	demosampleapp_rules_onwillupdate_js : demosampleapp_rules_onwillupdate_js,
	demosampleapp_rules_resetappsettingsandlogout_js : demosampleapp_rules_resetappsettingsandlogout_js,
	demosampleapp_rules_setlastnamareturn_js : demosampleapp_rules_setlastnamareturn_js,
	demosampleapp_rules_setsorterrule_js : demosampleapp_rules_setsorterrule_js,
	demosampleapp_rules_setsortorder_js : demosampleapp_rules_setsortorder_js,
	demosampleapp_rules_switchevent_js : demosampleapp_rules_switchevent_js,
	demosampleapp_rules_testformetereading_barcodenavmetadata_js : demosampleapp_rules_testformetereading_barcodenavmetadata_js,
	demosampleapp_rules_testformetereading_commentvaluetest_js : demosampleapp_rules_testformetereading_commentvaluetest_js,
	demosampleapp_rules_testformetereading_creategroupedentityset_js : demosampleapp_rules_testformetereading_creategroupedentityset_js,
	demosampleapp_rules_testformetereading_fiblankpagemetadata_js : demosampleapp_rules_testformetereading_fiblankpagemetadata_js,
	demosampleapp_rules_testformetereading_fillsalesorderdetailtarget_js : demosampleapp_rules_testformetereading_fillsalesorderdetailtarget_js,
	demosampleapp_rules_testformetereading_filltestcustomer_js : demosampleapp_rules_testformetereading_filltestcustomer_js,
	demosampleapp_rules_testformetereading_metadatacheckdetail_js : demosampleapp_rules_testformetereading_metadatacheckdetail_js,
	demosampleapp_rules_testformetereading_navtosalesorder_js : demosampleapp_rules_testformetereading_navtosalesorder_js,
	demosampleapp_rules_testformetereading_pagemetadatanavblank2_js : demosampleapp_rules_testformetereading_pagemetadatanavblank2_js,
	demosampleapp_rules_testformetereading_readlinkfiller_js : demosampleapp_rules_testformetereading_readlinkfiller_js,
	demosampleapp_rules_testformetereading_salesnewnavmetadata_js : demosampleapp_rules_testformetereading_salesnewnavmetadata_js,
	demosampleapp_rules_testformetereading_testcallnavtocustomerdetail_js : demosampleapp_rules_testformetereading_testcallnavtocustomerdetail_js,
	demosampleapp_rules_testformetereading_testmoreparameter_js : demosampleapp_rules_testformetereading_testmoreparameter_js,
	demosampleapp_rules_testformetereading_testrulecustomlist_js : demosampleapp_rules_testformetereading_testrulecustomlist_js,
	demosampleapp_rules_testformetereading_trytofillsectiontarget_js : demosampleapp_rules_testformetereading_trytofillsectiontarget_js,
	demosampleapp_rules_testsortermanipluation_js : demosampleapp_rules_testsortermanipluation_js,
	demosampleapp_services_sampleservicev2_service : demosampleapp_services_sampleservicev2_service,
	demosampleapp_styles_styles_css : demosampleapp_styles_styles_css,
	demosampleapp_styles_styles_json : demosampleapp_styles_styles_json,
	demosampleapp_styles_styles_less : demosampleapp_styles_styles_less,
	demosampleapp_styles_styles_nss : demosampleapp_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/i18n/i18n.properties":
/*!**************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/i18n/i18n.properties ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "appTitle=Meter Reading\nappDescription=Meter Reading\n\nappOffline=Device is offline\noffline=Offline\nbutton_yes=Yes\nbutton_no=No\nbutton_ok=OK\n\n#~~~ Master View ~~~~~~~~~~~~~~~~~~~~~~~~~~\n\nmaster_titleCount=Metering Lists({0})\nmaster_searchTooltip=Enter a list name or a part of it.\nmaster_listNoDataText=No Meter Lists are currently available\nmaster_listNoDataWithFilterOrSearchText=No matching Meter List found\nmaster_listGroupTooltip=Group\nmaster_listFilterTooltip=Filter\nmaster_listSortTooltip=Sort\nmaster_barcodeSearch=Barcode search\nmaster_syncRequired=Synchronization required\nmasterListNoDataText=No data found.\nmasterListNoDataWithFilterOrSearchText=No data found with this filter.\ntitle_confirmDialog=Confirm\n\n#~~~ User info dialog ~~~~~~~~~~~~~~~~~~~~~~~~~~\nbutton_cancel=Cancel\nbutton_logout=Logout\nlabel_KID=KID\nlabel_connectedSystem=Connected system\nlabel_appVersion=App Version\nversionCheck=Check updates\ntext_deRegister=De-Register from the device\n\n#~~~ Add comment dialog ~~~~~~~~~~~~~~~~~~~~~~~~~~\ntitle_addComment=Add comment\n\n#~~~ Detail View ~~~~~~~~~~~~~~~~~~~~~~~~~~\ndetail_Title=Metering List\ndetail_TitleWithName=Metering List: {0}\ndetailLineItemTable_locationColumn=Location\ndetailLineItemTable_lastReadColumn=Last Reading\ndetailLineItemTable_newReadColumn=New Reading\ndetailItem_measPoint=Measuring Point\ndetailItem_location=Location\ndetailItem_measPosition=Measuring Position\ndetailItem_measObject=Measuring Object\ndetailItem_tableNoDataText=No data found for this Metering list\nbutton_save=Save\ntitle_clearValuesWarning=Values will be cleared!\ntitle_wrongValues=Wrong values\n\n\n#~~~ Measuring object details ~~~~~~~~~~~~~~~~~~~~~~~~~~\ntitle_measObjectDetails=Measuring object details\nlabel_measObjectName=ID\nlabel_measObjectDescription=Description\nlabel_measObjectManufacturer=Manufacturer\nlabel_measObjectModelNumber=Model number\nlabel_measObjectPartNumber=Manufacturer part number\nlabel_measObjectSerialNumber=Manufacturer serial number\nlabel_measObjectInventoryNumber=Inventory number\nlabel_measObjectSortField=Sortfield\n\n#~~~~ Scan Result fragment ~~~~#\ntitle_selectRecognizedLine=Please select one recognized line\ntext_noTextRecognized=No text recognized\ntext_recognizedLinesEditable=Recognized texts are editable. The value will be used to search for the Measuring Point.\ntext_recognizedLines=The selected value will be used to search for the Measuring Point.\n\n#~~~ Sort dialog ~~~~~~~~~~~~~~~~~~~~~~~~~~\nsortDialog_measuringPoint=Measuring point\nsortDialog_measuringObject=Measuring object\nsortDialog_measuringPosition=Measuring position\nsortDialog_measuringLocation=Location\nsortDialog_manufacturerSerialNumber=Manufacturer serial number\nsortDialog_sortField=Sortfield\nsortDialog_inventoryNumber=Inventory number\n\n#~~~ Filter dialog ~~~~~~~~~~~~~~~~~~~~~~~~~~\nfilterDialog_measuringPoint=Measuring point\nfilterDialog_measuringPosition=Measuring position\nfilterDialog_measuringObject=Measuring object\nfilterDialog_measuringLocation=Location\nfilterDialog_manufacturerSerialNumber=Manufacturer serial number\nfilterDialog_sortField=Sortfield\nfilterDialog_inventoryNumber=Inventory number\n\n#~~~ Messages ~~~~~~~~~~~~~~~~~~~~~~~~~~\nmessage_clearValuesWarning=Unsaved changes will be lost when you leave this page!\\nIf you want to save entires select 'Cancel' and save your entries first.\nmessage_measuringPointIsCounter=Measuring point is a counter and therefore value can not be lower or equal than the last reading value.\nmessage_successfullySaved=Values successfully saved.\nmessage_noChangesMade=No changes have been made.\nmessage_barcodeScanConfirm=Can you confirm that you are at measuring point {0}?\nmessage_barcodeScanFailed=Barcode scanning failed. Please select the measuring point manually from the provided list.\nmessage_measuringPointIdentifyFailed=Measuring point couldn't be identified from the list. Please select manually and enter reading value.\nmessage_NewVersionAvailable=There is a newer version of this app available. Please finish your work and update the app as soon as possible.\nmessage_ApplicationUpToDate=Application is up to date.\nmessage_synchronizationSucceeded=Data synchronization succeeded\nmessage_dataRefreshed=Data refreshed\nmessage_pleaseSelectLine=Please select a line!\nmessage_deregisterWarning=<strong>Attention!</strong> If you de-register, all unsynced and personal data will be deleted!\nmessage_logoutOffline=You are offline. For logging on again an internet connection is requried. Are you sure you want to log out?\nmessage_logoutOnline=Are you sure you want to log out?\nmessage_logoutOnlinePendingChanges=There are unsynchronized changes, that will be synchronized before logout. Are you sure you want to synchronize and log out?\nmessage_logoutOfflinePendingChanges=You are offline and there are unsynchronized changes. If you log out your changes will be lost. Are you sure want to log out?\nmessage_deviceOffline=Device is offline.\nmessage_correctYourEntriesOrClear=Please correct your entries first or clear them with 'Delete' button.\nmessage_noEntriesFound=No entries found.\n\n#~~~ Not Found View ~~~~~~~~~~~~~~~~~~~~~~~\nnotFoundTitle=Not Found\nnoObjectFoundText=This Meter List is not available\nnotFoundText=The requested resource was not found\n\n#~~~ Not Available View ~~~~~~~~~~~~~~~~~~~~~~~\nnotAvailableViewTitle=Meter reading\n\n#~~~ Error Handling ~~~~~~~~~~~~~~~~~~~~~~~\nerrorText=Sorry, a technical error occurred! Please try again later."

/***/ }),

/***/ "./build.definitions/DemoSampleApp/i18n/i18n_de.properties":
/*!*****************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/i18n/i18n_de.properties ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "appTitle=Zählerstände erfassen\nappDescription=Zählerstände erfassen\n\nappOffline=Gerät ist offline\noffline=Offline\nbutton_yes=Ja\nbutton_no=Nein\nbutton_ok=OK\n\n#~~~ Master View ~~~~~~~~~~~~~~~~~~~~~~~~~~\nmaster_titleCount=Zählerlisten({0})\nmaster_searchTooltip=Geben Sie einen Listennamen oder einen Teil davon ein.\nmaster_listNoDataText=Es sind derzeit keine Zählerlisten verfügbar\nmaster_listNoDataWithFilterOrSearchText=Keine passende Zählerliste gefunden\nmaster_listGroupTooltip=Gruppe\nmaster_listFilterTooltip=Filtern\nmaster_listSortTooltip=Sortieren\nmaster_barcodeSearch=Barcode-Suche\nmaster_syncRequired=Synchronisation erforderlich\nmasterListNoDataText=Keine Daten gefunden.\nmasterListNoDataWithFilterOrSearchText=Es wurden keine Daten mit diesem Filter gefunden.\ntitle_confirmDialog=Bestätigen\n\n#~~~ User info dialog ~~~~~~~~~~~~~~~~~~~~~~~~~~\nbutton_cancel=Abbrechen\nbutton_logout=Abmelden\nlabel_KID=KID\nlabel_connectedSystem=Verbundenes System\nlabel_appVersion=App-Version\nversionCheck=Auf Updates prüfen\ntext_deRegister=Abmeldung vom Gerät\n\n#~~~ Add comment dialog ~~~~~~~~~~~~~~~~~~~~~~~~~~\ntitle_addComment=Kommentar hinzufügen\n\n#~~~ Detail View ~~~~~~~~~~~~~~~~~~~~~~~~~~\ndetail_Title=Liste der Zähler\ndetail_TitleWithName=Liste der Zähler: {0}\ndetailLineItemTable_locationColumn=Standort\ndetailLineItemTable_lastReadColumn=Letzte Messung\ndetailLineItemTable_newReadColumn=Neuer Messwert\ndetailItem_measPoint=Messpunkt\ndetailItem_location=Standort\ndetailItem_measPosition=Messposition\ndetailItem_measObject=Messobjekt\ndetailItem_tableNoDataText=Keine Daten für diese Messwertliste gefunden\nbutton_save=Speichern\ntitle_clearValuesWarning=Die Werte werden gelöscht!\ntitle_wrongValues=Falsche Werten\n\n#~~~~ Scan Result fragment ~~~~#\ntitle_selectRecognizedLine=Bitte wählen Sie eine anerkannte Zeile aus\ntext_noTextRecognized=Kein Text erkannt\ntext_recognizedLinesEditable=Erkannte Texte sind editierbar. Der Wert wird für die Suche nach dem Messpunkt verwendet.\ntext_recognizedLines=Der ausgewählte Wert wird für die Suche nach dem Messpunkt verwendet.\n\n#~~~ Measuring object details ~~~~~~~~~~~~~~~~~~~~~~~~~~\ntitle_measObjectDetails=Details zum Messobjekt\nlabel_measObjectName=ID\nlabel_measObjectDescription=Beschreibung\nlabel_measObjectManufacturer=Hersteller\nlabel_measObjectModelNumber=Modellnummer\nlabel_measObjectPartNumber=Teilenummer des Herstellers\nlabel_measObjectSerialNumber=Seriennummer des Herstellers\nlabel_measObjectInventoryNumber=Inventar-Nummer\nlabel_measObjectSortField=Sortierfeld\n\n#~~~ Sort dialog ~~~~~~~~~~~~~~~~~~~~~~~~~~\nsortDialog_measuringPoint=Messstelle\nsortDialog_measuringObject=Messobjekt\nsortDialog_measuringPosition=Messposition\nsortDialog_measuringLocation=Standort\nsortDialog_manufacturerSerialNumber=Seriennummer des Herstellers\nsortDialog_sortField=Sortierfeld\nsortDialog_inventoryNumber=Inventarnummer\n\n#~~~ Filter dialog ~~~~~~~~~~~~~~~~~~~~~~~~~~\nfilterDialog_measuringPoint=Messpunkt\nfilterDialog_measuringPosition=Messposition\nfilterDialog_measuringObject=Messobjekt\nfilterDialog_measuringLocation=Technischer Platz\nfilterDialog_manufacturerSerialNumber=Hersteller-Seriennummer\nfilterDialog_sortField=Sortierfeld\nfilterDialog_inventoryNumber=Inventarnummer\n\n#~~~ Messages ~~~~~~~~~~~~~~~~~~~~~~~~~~\nmessage_clearValuesWarning=Nicht gespeicherte Änderungen gehen verloren, wenn Sie diese Seite verlassen!\\nWenn Sie Einträge speichern möchten, wählen Sie \"Abbrechen\" und speichern Sie Ihre Einträge zuerst.\nmessage_measuringPointIsCounter=Die Messstelle ist ein Zähler und der Wert kann daher nicht kleiner oder gleich dem letzten Ablesewert sein.\nmessage_successfullySaved=Werte erfolgreich gespeichert.\nmessage_noChangesMade=Es gibt keine Änderungen.\nmessage_barcodeScanConfirm=Können Sie bestätigen, dass Sie sich am Messpunkt {0} befinden?\nmessage_barcodeScanFailed=Barcode-Scannen fehlgeschlagen. Bitte wählen Sie den Messpunkt manuell aus der mitgelieferten Liste aus.\nmessage_measuringPointIdentifyFailed=Der Messpunkt konnte nicht aus der Liste identifiziert werden. Bitte manuell auswählen und den Messwert eingeben.\nmessage_NewVersionAvailable=Es ist eine neuere Version dieser App verfügbar. Bitte beenden Sie Ihre Arbeit und aktualisieren Sie die App so bald wie möglich.\nmessage_ApplicationUpToDate=Die Anwendung ist auf dem neuesten Stand.\nmessage_synchronizationSucceeded=Datensynchronisation erfolgreich\nmessage_dataRefreshed=Daten wurden aktualisiert\nmessage_pleaseSelectLine=Bitte wählen Sie eine Zeile aus!\nmessage_deregisterWarning=<strong>Achtung!</strong> Wenn Sie sich abmelden, werden alle nicht synchronisierten und persönlichen Daten gelöscht!\nmessage_logoutOffline=Sie sind offline. Um sich wieder anzumelden, ist eine Internetverbindung erforderlich. Sind Sie sicher, dass Sie sich abmelden möchten?\nmessage_logoutOnline=Sind Sie sicher, dass Sie sich abmelden wollen?\nmessage_logoutOnlinePendingChanges=Es gibt unsynchronisierte Änderungen, die vor dem Abmelden synchronisiert werden. Sind Sie sicher, dass Sie synchronisieren und sich abmelden möchten?\nmessage_logoutOfflinePendingChanges=Sie sind offline und es gibt unsynchronisierte Änderungen. Wenn Sie sich abmelden, gehen Ihre Änderungen verloren. Sind Sie sicher, dass Sie sich abmelden möchten?\nmessage_deviceOffline=Gerät ist offline.\nmessage_correctYourEntriesOrClear=Bitte korrigieren Sie zunächst Ihre Eingaben oder löschen Sie sie mit dem Button 'Löschen'.\nmessage_noEntriesFound=Keine Einträge vorhanden.\n\n#~~~ Not Found View ~~~~~~~~~~~~~~~~~~~~~~~\nnotFoundTitle=Nicht gefunden\nnoObjectFoundText=Diese Zählerliste ist nicht verfügbar\nnotFoundText=Die angeforderte Ressource wurde nicht gefunden\n\n#~~~ Not Available View ~~~~~~~~~~~~~~~~~~~~~~~\nnotAvailableViewTitle=Zählerstand\n\n#~~~ Error Handling ~~~~~~~~~~~~~~~~~~~~~~~\nerrorText=Leider ist ein technischer Fehler aufgetreten! Bitte versuchen Sie es später noch einmal."

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/AppUpdateFailure.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/AppUpdateFailure.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/DemoSampleApp/Actions/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/AppUpdateSuccess.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/AppUpdateSuccess.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/DemoSampleApp/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/DemoSampleApp/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/Customers_DeleteConfirmation.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/Customers_DeleteConfirmation.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Customers_DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function Customers_DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/DemoSampleApp/Actions/Customers_DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/DemoSampleApp/Actions/Customers_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/Customers_OrderCount.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/Customers_OrderCount.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Customers_OrderCount)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function Customers_OrderCount(clientAPI) {
  //The following currentCustomer will retrieve the current customer record
  const currentCustomer = clientAPI.getPageProxy().binding.CustomerId;
  //The following expression will retrieve the total count of the orders for a given customer
  return clientAPI.count('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderHeaders', `$filter=CustomerId eq '${currentCustomer}'`).then(count => {
    return count;
  });
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/EmailValidation.js":
/*!******************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/EmailValidation.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmailValidation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function EmailValidation(clientAPI) {
  //The following evaluateTargetPath will retrieve the current value of the email control
  if (clientAPI.evaluateTargetPath('#Control:FCEmail/#Value').indexOf('@') === -1) {
    //If email value does not contain @ display a validation failure message to the end-user
    clientAPI.executeAction('/DemoSampleApp/Actions/ValidationFailure.action');
  } else {
    //If @ is present in the email value, return true to indicate validation is successful
    return true;
  }
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
  context.count('/DemoSampleApp/Services/SampleServiceV2.service', 'ErrorArchive', '').then(errorCount => {
    if (errorCount > 0) {
      return context.getPageProxy().executeAction('/DemoSampleApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function () {
        return Promise.reject(false);
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/FillCustomObject.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/FillCustomObject.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FillCustomObject)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function FillCustomObject(clientAPI) {
  var readPromise = clientAPI.read('/DemoSampleApp/Services/SampleServiceV2.service', 'Customers', [], '');
  return readPromise.then(result => {
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
  });
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/FillCustomerObjectAwait.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/FillCustomerObjectAwait.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FillCustomerObjectAwait)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
async function FillCustomerObjectAwait(clientAPI) {
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

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/NavToFinal.js":
/*!*************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/NavToFinal.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToFinal)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function NavToFinal(clientAPI) {
  clientAPI.getPageProxy().setActionBinding(clientAPI.getPageProxy().getActionBinding());
  return clientAPI.executeAction('/DemoSampleApp/Actions/TestActionForMeterReading/NavToFinalSalesOrderItem.action');
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/OnWillUpdate.js":
/*!***************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/OnWillUpdate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/DemoSampleApp/Actions/OnWillUpdate.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/DemoSampleApp/Actions/Service/CloseOffline.action').then(success => Promise.resolve(success), failure => Promise.reject('Offline Odata Close Failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/ResetAppSettingsAndLogout.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/ResetAppSettingsAndLogout.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
function ResetAppSettingsAndLogout(context) {
  let logger = context.getLogger();
  let platform = context.nativescript.platformModule;
  let appSettings = context.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = context.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return context.getPageProxy().executeAction('/DemoSampleApp/Actions/Logout.action');
  }
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/SetLastNamaReturn.js":
/*!********************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/SetLastNamaReturn.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetLastNamaReturn)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SetLastNamaReturn(clientAPI) {
  try {
    let pageProxy = clientAPI.getPageProxy();
    let actionBinding = pageProxy.getActionBinding();
    if (actionBinding.NewProperty) {
      return actionBinding.NewProperty =  true ? 'LastName desc' : 0;
    } else {
      return 'LastName asc';
    }
  } catch {
    return 'LastName asc';
  }
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/SetSortOrder.js":
/*!***************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/SetSortOrder.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetSortOrder)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SetSortOrder(clientAPI) {
  clientAPI.executeAction('/DemoSampleApp/Actions/CloseModalPage_Complete.action');
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/SetSorterRule.js":
/*!****************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/SetSorterRule.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetSorterRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SetSorterRule(clientAPI) {
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

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/BarcodeNavMetadata.js":
/*!****************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/BarcodeNavMetadata.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BarcodeNavMetadata)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function BarcodeNavMetadata(clientAPI) {
  clientAPI.getPageProxy().setActionBinding(clientAPI.binding);
  clientAPI.executeAction('/DemoSampleApp/Actions/TestActionForMeterReading/NavToComment.action');
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/CommentValueTest.js":
/*!**************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/CommentValueTest.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommentValueTest)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function CommentValueTest(clientAPI) {
  let dummy = 'DUMMMMMY';
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/CreateGroupedEntitySet.js":
/*!********************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/CreateGroupedEntitySet.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateGroupedEntitySet)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
async function CreateGroupedEntitySet(clientAPI) {
  let dummy = "dummy";
  const readPromise = clientAPI.read('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderItems', [], queryOptons);
  // For test in order to get all the items no matter how many SalesOrder the customer has got:
  //const readPromise = clientAPI.read('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderHeaders', []);
  const result = await readPromise;
  const salesItems = result._array;
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/FiBlankPageMetadata.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/FiBlankPageMetadata.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FiBlankPageMetadata)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
async function FiBlankPageMetadata(clientAPI) {
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
    });
    sectionTemplate._Name = `SectionKeyValue${index}`;
    sectionTemplate.Target.EntitySet = `SalesOrderHeaders('${order.SalesOrderId}')`;
    sectionTemplate.Target.ReadLink = `SalesOrderHeaders('${order.SalesOrderId}')`;
    //sectionFormCell._Name = `SectionFormCell${index}`;

    if (index === 0) {
      blankPage.Controls[0].Sections[0] = JSON.parse(JSON.stringify(sectionTemplate));
    } else {
      blankPage.Controls[0].Sections.push(JSON.parse(JSON.stringify(sectionTemplate)));
      blankPage.Controls[0].Sections.push(JSON.parse(JSON.stringify(sectionFormCell)));
    }
  });
  return blankPage;
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/FillSalesOrderDetailTarget.js":
/*!************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/FillSalesOrderDetailTarget.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FillSalesOrderDetailTarget)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
async function FillSalesOrderDetailTarget(clientAPI) {
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

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/FillTestCustomer.js":
/*!**************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/FillTestCustomer.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FillTestCustomer)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function FillTestCustomer(clientAPI) {
  let dummy = "Dummy";
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/MetadatacheckDetail.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/MetadatacheckDetail.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetadatacheckDetail)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function MetadatacheckDetail(clientAPI) {
  let binding = clientAPI.getActionBinding();
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/NavToSalesOrder.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/NavToSalesOrder.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToSalesOrder)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function NavToSalesOrder(clientAPI) {
  let salesOrderId = clientAPI.getPageProxy().getPressedItem()._controlView.offsetParent.childNodes[0].innerText.slice(15);
  let itemKey = clientAPI.getPageProxy().getPressedItem()._controlView.offsetParent.offsetParent.childNodes[0].childNodes[0].ownerElement._state.placeholder;
  let filtered = clientAPI.binding.SalesOrders.filter(row => row.SalesOrderId == itemKey);
  clientAPI.getPageProxy().setActionBinding(filtered);
  clientAPI.executeAction('/DemoSampleApp/Actions/TestActionForMeterReading/NavToTestSalesDet.action');
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/PageMetadataNavBlank2.js":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/PageMetadataNavBlank2.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageMetadataNavBlank2)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
async function PageMetadataNavBlank2(clientAPI) {
  //Get the template page:
  let blankPage = clientAPI.getPageProxy().getPageDefinition('/DemoSampleApp/Pages/TestPagesForMeterReading/MeterReadingTemplate2.page');
  blankPage.Caption = 'Meter Reading List';
  // decouple the Object reference:
  // let sectionWithReference = blankPage.Controls[0].Sections[0];
  let sectionTemplate = JSON.parse(JSON.stringify(blankPage.Controls[0].Sections[0]));
  let sectionFormCell = JSON.parse(JSON.stringify(blankPage.Controls[0].Sections[1]));

  // Get the Sales Orders to the given Customer:
  //let entity = `Customers('${clientAPI.getActionBinding().CustomerId}')/SalesOrders`;
  let CustomerId = clientAPI.getActionBinding().CustomerId;
  let queryOptons = `$filter=CustomerId eq '${CustomerId}'`;
  const readPromise = clientAPI.read('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderHeaders', [], queryOptons);
  // For test in order to get all the items no matter how many SalesOrder the customer has got:
  //const readPromise = clientAPI.read('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderHeaders', []);
  const result = await readPromise;
  const salesOrders = result._array;
  clientAPI.getPageProxy().setActionBinding(result);

  // Create all the exisiting salesOrder Block Dynamically:
  salesOrders.forEach((order, index) => {
    sectionTemplate._Name = `SectionKeyValue${index}`;
    sectionTemplate.Target.EntitySet = `SalesOrderHeaders('${order.SalesOrderId}')`;
    sectionTemplate.Target.ReadLink = `SalesOrderHeaders('${order.SalesOrderId}')`;
    sectionFormCell.Controls[0].PlaceHolder = order.SalesOrderId;
    if (index === 0) {
      blankPage.Controls[0].Sections[0] = JSON.parse(JSON.stringify(sectionTemplate));
      blankPage.Controls[0].Sections[1] = JSON.parse(JSON.stringify(sectionFormCell));
    } else {
      blankPage.Controls[0].Sections.push(JSON.parse(JSON.stringify(sectionTemplate)));
      blankPage.Controls[0].Sections.push(JSON.parse(JSON.stringify(sectionFormCell)));
    }
  });
  return blankPage;
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/ReadLinkFiller.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/ReadLinkFiller.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReadLinkFiller)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ReadLinkFiller(clientAPI) {
  return `SalesOrderHeaders('${SalesOrderId}')`;
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/SalesNewNavMetadata.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/SalesNewNavMetadata.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SalesNewNavMetadata)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SalesNewNavMetadata(clientAPI) {
  let dummy = 'Dummy';
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/TestCallNavToCustomerDetail.js":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/TestCallNavToCustomerDetail.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestCallNavToCustomerDetail)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function TestCallNavToCustomerDetail(clientAPI) {
  clientAPI.getPageProxy().setActionBinding(clientAPI.binding);
  clientAPI.executeAction('/DemoSampleApp/Actions/NavToCustDetailFromTest.action');
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/TestMoreParameter.js":
/*!***************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/TestMoreParameter.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestMoreParameter)
/* harmony export */ });
/**
 * Describe this function...
 * @param {ISectionProxy} section

 */
function TestMoreParameter(section) {
  let dummy = 'Dummy';
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/TestRuleCustomList.js":
/*!****************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/TestRuleCustomList.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestRuleCustomList)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function TestRuleCustomList(clientAPI) {
  let dummy = 'DUMMY';
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestForMetereading/TryToFillSectionTarget.js":
/*!********************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestForMetereading/TryToFillSectionTarget.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TryToFillSectionTarget)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function TryToFillSectionTarget(clientAPI) {
  let binding = clientAPI.binding;
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/TestSorterManipluation.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/TestSorterManipluation.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestSorterManipluation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function TestSorterManipluation(clientAPI) {
  // const pageProxy = sectionedTableProxy.getPageProxy();
  // let bindingObject = pageProxy.getActionBinding();
  // let readLink = bindingObject["@odata.readLink"];
  // let actionResult =  context.getActionResult("FilterCustomerList");
  clientAPI.executeAction('/DemoSampleApp/Actions/CloseModalPage_Complete.action');
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/dummylink.js":
/*!************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/dummylink.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dummylink)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function dummylink(clientAPI) {}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Rules/switchEvent.js":
/*!**************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Rules/switchEvent.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ switchEvent)
/* harmony export */ });
/* harmony import */ var _SetLastNamaReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetLastNamaReturn */ "./build.definitions/DemoSampleApp/Rules/SetLastNamaReturn.js");
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */

function switchEvent(clientAPI) {
  let pageProxy = clientAPI.getPageProxy();
  let switchState = clientAPI.evaluateTargetPath('#Page:SorterWindow/#Control:SwitchDescAsc/#Value');
  let order = switchState ? 'desc' : 'asc';
  pageProxy.setActionBinding({
    "NewProperty": order
  });

  // let sorter = clientAPI.evaluateTargetPath('#Page:SorterWindow');
  sorter.redraw();
}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Styles/Styles.css":
/*!***********************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Styles/Styles.css ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
.link {
  color: #fffffe;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/DemoSampleApp/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD;EACE,cAAc;AAChB","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n.link {\n  color: #fffffe;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/DemoSampleApp/Styles/Styles.less":
/*!************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Styles/Styles.less ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
@mdkWhite: #fffffe;

.link {
    color: @mdkWhite;
  }`, "",{"version":3,"sources":["webpack://./build.definitions/DemoSampleApp/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD,kBAAkB;;AAElB;IACI,gBAAgB;EAClB","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n@mdkWhite: #fffffe;\n\n.link {\n    color: @mdkWhite;\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/DemoSampleApp/Styles/Styles.nss":
/*!***********************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Styles/Styles.nss ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@mdkWhite: #fffffe;
link {
	font-color: #fffffe;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/DemoSampleApp/Styles/Styles.nss"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;CACC,mBAAmB;AACpB","sourcesContent":["@mdkWhite: #fffffe;\nlink {\n\tfont-color: #fffffe;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js ***!
  \**********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"DemoSampleApp","Version":"/DemoSampleApp/Globals/AppDefinition_Version.global","MainPage":"/DemoSampleApp/Pages/Main.page","OnLaunch":["/DemoSampleApp/Actions/Service/InitializeOffline.action"],"OnWillUpdate":"/DemoSampleApp/Rules/OnWillUpdate.js","OnDidUpdate":"/DemoSampleApp/Actions/Service/InitializeOffline.action","Styles":"/DemoSampleApp/Styles/Styles.less","Localization":"/DemoSampleApp/i18n/i18n.properties","_SchemaVersion":"23.8","StyleSheets":{"Styles":{"css":"/DemoSampleApp/Styles/Styles.css","ios":"/DemoSampleApp/Styles/Styles.nss","android":"/DemoSampleApp/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/AppUpdate.action":
/*!******************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/AppUpdate.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/DemoSampleApp/Rules/AppUpdateFailure.js","OnSuccess":"/DemoSampleApp/Rules/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/AppUpdateFailureMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/AppUpdateFailureMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/AppUpdateProgressBanner.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/AppUpdateProgressBanner.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/DemoSampleApp/Actions/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/AppUpdateSuccessMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/AppUpdateSuccessMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/CloseModalPage_Cancel.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/CloseModalPage_Cancel.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","ActionResult":{"_Name":"CloseModalPage_Cancel"},"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/CloseModalPage_Complete.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/CloseModalPage_Complete.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","ActionResult":{"_Name":"CloseModalPage_Complete"},"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/ClosePage.action":
/*!******************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/ClosePage.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/CreateCustomerEntityFailureMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/CreateCustomerEntityFailureMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"CreateCustomerEntityFailureMessage"},"Message":"Failed to Create Customer record - {#ActionResults:Customers_CreateEntity/error}","Title":"Create Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/CreateSalesOrderHeaderEntityFailureMessage.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/CreateSalesOrderHeaderEntityFailureMessage.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"CreateSalesOrderHeaderEntityFailureMessage"},"Message":"Failed to Create Sales Order record - {#ActionResults:SalesOrderHeaders_CreateEntity/error}","Title":"Create Sales Order","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Customers_CreateEntity.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Customers_CreateEntity.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"Customers_CreateEntity"},"OnFailure":"/DemoSampleApp/Actions/CreateCustomerEntityFailureMessage.action","OnSuccess":"/DemoSampleApp/Actions/CloseModalPage_Complete.action","Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"Customers"},"Properties":{"DateOfBirth":"#Control:FCCreateDOB/#Value","EmailAddress":"#Control:FCCreateEmail/#Value","FirstName":"#Control:FCCreateFirstName/#Value","LastName":"#Control:FCCreateLastName/#Value","PhoneNumber":"#Control:FCCreatePhone/#Value"}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Customers_DeleteConfirmation.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Customers_DeleteConfirmation.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"Customers_DeleteConfirmation"},"Message":"Delete current entity?","Title":"Delete Confirmation","OKCaption":"OK","CancelCaption":"Cancel"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Customers_DeleteEntity.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Customers_DeleteEntity.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DeleteEntity","ActionResult":{"_Name":"Customers_DeleteEntity"},"OnFailure":"/DemoSampleApp/Actions/DeleteCustomerEntityFailureMessage.action","OnSuccess":"/DemoSampleApp/Actions/CloseModalPage_Complete.action","Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"Customers","ReadLink":"{@odata.readLink}"}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Customers_UpdateEntity.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Customers_UpdateEntity.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"Customers_UpdateEntity"},"OnFailure":"/DemoSampleApp/Actions/UpdateCustomerEntityFailureMessage.action","OnSuccess":"/DemoSampleApp/Actions/CloseModalPage_Complete.action","ValidationRule":"/DemoSampleApp/Rules/EmailValidation.js","Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"Customers","ReadLink":"{@odata.readLink}"},"Properties":{"EmailAddress":"#Control:FCEmail/#Value","FirstName":"#Control:FCFirstName/#Value","LastName":"#Control:FCLastName/#Value","PhoneNumber":"#Control:FCPhone/#Value"}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/DeleteCustomerEntityFailureMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/DeleteCustomerEntityFailureMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"DeleteCustomerEntityFailureMessage"},"Message":"Delete entity failure - {#ActionResults:Customers_DeleteEntity/error}","Title":"Delete Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/DemoSampleApp/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DemoSampleApp/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DemoSampleApp/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/FilerOnLoad.action":
/*!********************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/FilerOnLoad.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"FilerOnLoad"},"Message":"Filter On Load action"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/FilterCustomDatra.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/FilterCustomDatra.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"FilterCustomDatra"},"Message":"Filter CusTOM DATA"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/FilterCustomerList.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/FilterCustomerList.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Filter","ActionResult":{"_Name":"FilterCustomerList"},"Filterable":"#Page:Customers_List/#Control:SectionedTable0","PageToOpen":"/DemoSampleApp/Pages/SorterWindow.page","ModalPageFullscreen":false}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/FilterOnResume.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/FilterOnResume.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"FilterOnResume"},"Message":"Filter RESUME"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/FilterOnReturn.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/FilterOnReturn.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"FilterOnReturn"},"Message":"Filter   On Return"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/FilterOnUnloaded.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/FilterOnUnloaded.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"FilterOnUnloaded"},"Message":"Filter Unloaded"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/LogSetLevel.action":
/*!********************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/LogSetLevel.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logger.SetLevel","ActionResult":{"_Name":"LogSetLevel"},"Level":"Trace"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/LogSetState.action":
/*!********************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/LogSetState.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logger.SetState","ActionResult":{"_Name":"LogSetState"},"OnSuccess":"/DemoSampleApp/Actions/LogSetLevel.action","LoggerState":"On"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/LogUpload.action":
/*!******************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/LogUpload.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logger.Upload","ActionResult":{"_Name":"LogUpload"},"OnFailure":"/DemoSampleApp/Actions/LogUploadFailure.action","OnSuccess":"/DemoSampleApp/Actions/LogUploadSuccessful.action","ShowActivityIndicator":true,"ActivityIndicatorText":"Uploading Logs..."}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/LogUploadFailure.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/LogUploadFailure.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"LogUploadFailure"},"Message":"Failed to upload client logs - {#ActionResults:LogUpload/error}","Title":"Upload Client Logs","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/LogUploadSuccessful.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/LogUploadSuccessful.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"LogUploadSuccessful"},"Message":"Log File Uploaded","NumberOfLines":1,"Duration":3,"IsIconHidden":true,"Animated":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Logout.action":
/*!***************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Logout.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"SkipReset":false,"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/LogoutMessage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/LogoutMessage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"CancelCaption":"No","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","OKCaption":"Yes","OnOK":"/DemoSampleApp/Rules/ResetAppSettingsAndLogout.js","Title":"Logout","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/NavToCustDetailFromTest.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/NavToCustDetailFromTest.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustDetailFromTest"},"PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/Customers_Detail.page"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/NavToCustomers_Create.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/NavToCustomers_Create.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Create"},"PageToOpen":"/DemoSampleApp/Pages/Customers_Create.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/NavToCustomers_Detail.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/NavToCustomers_Detail.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Detail"},"PageToOpen":"/DemoSampleApp/Pages/Customers_Detail.page"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/NavToCustomers_Edit.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/NavToCustomers_Edit.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Edit"},"PageToOpen":"/DemoSampleApp/Pages/Customers_Edit.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/NavToCustomers_List.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/NavToCustomers_List.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_List"},"PageToOpen":"/DemoSampleApp/Pages/Customers_List.page"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/NavToCustomers_Orders.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/NavToCustomers_Orders.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Orders"},"PageToOpen":"/DemoSampleApp/Pages/Customers_Orders.page"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/NavToSalesOrderHeaders_Create.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/NavToSalesOrderHeaders_Create.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToSalesOrderHeaders_Create"},"PageToOpen":"/DemoSampleApp/Pages/SalesOrderHeaders_Create.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/NavToSalesOrders_Details.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/NavToSalesOrders_Details.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToSalesOrders_Details"},"PageToOpen":"/DemoSampleApp/Pages/SalesOrders_Details.page"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/OnWillUpdate.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/OnWillUpdate.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/SalesOrderHeaders_CreateEntity.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/SalesOrderHeaders_CreateEntity.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateRelatedEntity","ActionResult":{"_Name":"SalesOrderHeaders_CreateEntity"},"OnFailure":"/DemoSampleApp/Actions/CreateSalesOrderHeaderEntityFailureMessage.action","OnSuccess":"/DemoSampleApp/Actions/CloseModalPage_Complete.action","Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"SalesOrderHeaders"},"ParentLink":{"Target":{"EntitySet":"Customers","ReadLink":"{@odata.readLink}"},"Property":"SalesOrders"},"Properties":{"CreatedAt":"#Control:FCCreatedate/#Value","CurrencyCode":"#Control:FCCreateCurrencyCode/#Value","GrossAmount":"#Control:FCCreateGrossAmount/#Value","LifeCycleStatus":"#Control:FCCreateLifeCycleStatus/#Value","LifeCycleStatusName":"#Control:FCCreateLifeCycleStatusName/#Value","NetAmount":"#Control:FCCreateNetAmount/#Value","TaxAmount":"#Control:FCCreateTaxAmount/#Value"}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Service/CloseOffline.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Service/CloseOffline.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/DemoSampleApp/Services/SampleServiceV2.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/DemoSampleApp/Actions/Service/CloseOfflineSuccessMessage.action","OnFailure":"/DemoSampleApp/Actions/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Service/CloseOfflineFailureMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Service/CloseOfflineFailureMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Service/CloseOfflineSuccessMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Service/CloseOfflineSuccessMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Service/DownloadOffline.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Service/DownloadOffline.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/DemoSampleApp/Services/SampleServiceV2.service","DefiningRequests":[{"Name":"Customers","Query":"Customers"},{"Name":"Products","Query":"Products"},{"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"Name":"SalesOrderItems","Query":"SalesOrderItems"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/DemoSampleApp/Actions/Service/SyncFailureMessage.action","OnSuccess":"/DemoSampleApp/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Service/DownloadStartedMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Service/DownloadStartedMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/DemoSampleApp/Actions/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Service/InitializeOffline.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Service/InitializeOffline.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.Initialize","ActionResult":{"_Name":"init"},"OnFailure":"/DemoSampleApp/Actions/LogSetState.action","OnSuccess":"/DemoSampleApp/Actions/Service/InitializeOfflineSuccessMessage.action","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","Service":"/DemoSampleApp/Services/SampleServiceV2.service","DefiningRequests":[{"Name":"Customers","Query":"Customers"},{"Name":"Products","Query":"Products"},{"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"Name":"SalesOrderItems","Query":"SalesOrderItems"}]}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Service/InitializeOfflineFailureMessage.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Service/InitializeOfflineFailureMessage.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Service/InitializeOfflineSuccessMessage.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Service/InitializeOfflineSuccessMessage.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Service/SyncFailureMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Service/SyncFailureMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Service/SyncStartedMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Service/SyncStartedMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/DemoSampleApp/Actions/Service/UploadOffline.action","OnFailure":"/DemoSampleApp/Actions/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Service/SyncSuccessMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Service/SyncSuccessMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Sync offline data service complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/Service/UploadOffline.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/Service/UploadOffline.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/DemoSampleApp/Services/SampleServiceV2.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/DemoSampleApp/Actions/Service/DownloadStartedMessage.action","OnFailure":"/DemoSampleApp/Actions/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToBlankPage.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToBlankPage.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToBlankPage"},"PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/Blank.page","PageMetadata":"/DemoSampleApp/Rules/TestForMetereading/FiBlankPageMetadata.js"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToBlankPage2.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToBlankPage2.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToBlankPage2"},"PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/Blank.page","PageMetadata":"/DemoSampleApp/Rules/TestForMetereading/PageMetadataNavBlank2.js","OuterNavigation":true,"NavigationType":"Cross"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToComment.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToComment.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToComment"},"PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/CommentPage.page","BackStackVisible":true,"ModalPage":true,"ModalPageFullscreen":false,"Transition":{"Curve":"Ease","Name":"Flip"}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToFinalSalesOrderItem.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToFinalSalesOrderItem.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToFinalSalesOrderItem"},"PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/SalesItemFInal.page"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToGroupedBy.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToGroupedBy.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToGroupedBy"},"PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/GroupedSalesOrderHeader.page"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToKeyPairCollectionPage.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToKeyPairCollectionPage.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToKeyPairCollectionPage"},"PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/MeterReadingTemplate.page"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToMRList.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToMRList.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToMRList"},"PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/Customers_ListMR.page"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToSalesNew.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToSalesNew.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToSalesNew"},"PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/SalesOrderNew.page","PageMetadata":"/DemoSampleApp/Rules/TestForMetereading/SalesNewNavMetadata.js","ClearHistory":true,"NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToTestMRFlexible.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToTestMRFlexible.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToTestMRFlexible"},"PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/TtMeterReadingFlexible.page"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToTestSalesDet.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/TestActionForMeterReading/NavToTestSalesDet.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToTestSalesDet"},"PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/SalesOrderDetNew.page"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/UpdateCustomerEntityFailureMessage.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/UpdateCustomerEntityFailureMessage.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"UpdateCustomerEntityFailureMessage"},"Message":"Failed to Save Customer Updates - {#ActionResults:Customers_UpdateEntity/error}","Title":"Update Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Actions/ValidationFailure.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Actions/ValidationFailure.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"ValidationFailure"},"Message":"Email address is not in the correct format recipient @ domain . domaintype","Title":"Validate Email","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Globals/AppDefinition_Version.global":
/*!******************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Globals/AppDefinition_Version.global ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Services/SampleServiceV2.service":
/*!**************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Services/SampleServiceV2.service ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"SampleServiceV2","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/Customers_Create.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/Customers_Create.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateFirstName","IsVisible":true,"Separator":true,"Caption":"First Name","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateLastName","IsVisible":true,"Separator":true,"Caption":"Last Name","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreatePhone","IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"Enter Value","KeyboardType":"Phone","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateEmail","IsVisible":true,"Separator":true,"Caption":"Email","PlaceHolder":"Enter Value","KeyboardType":"Email","Enabled":true,"IsEditable":true},{"Value":"Enter Date","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCCreateDOB","IsVisible":true,"Separator":true,"Caption":"DOB","IsEditable":true,"Mode":"Datetime"}]}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Customers_Create","Caption":"Create Customer","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Actions/Customers_CreateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/Customers_Detail.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/Customers_Detail.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"Subhead":"{FirstName}","Footnote":"{EmailAddress}","Description":"{CustomerId}","StatusText":"{PhoneNumber}","StatusImage":"sap-icon://phone","DetailImage":"sap-icon://customer","DetailImageIsCircular":false,"BodyText":"{DateOfBirth}","HeadlineText":"{LastName}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{HouseNumber} {Street}","_Name":"KeyValue1","KeyName":"Address","Visible":true},{"Value":"{City}","_Name":"KeyValue0","KeyName":"City","Visible":true},{"Value":"{PostalCode}","_Name":"KeyValue2","KeyName":"Postal Code","Visible":true},{"Value":"{Country}","_Name":"KeyValue3","KeyName":"Country","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Customer Orders"},"Footer":{"_Name":"SectionFooter0","Caption":"See All","AttributeLabel":"/DemoSampleApp/Rules/Customers_OrderCount.js","AccessoryType":"disclosureIndicator","FooterStyle":"attribute","Visible":true,"OnPress":"/DemoSampleApp/Actions/NavToCustomers_Orders.action","UseBottomPadding":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","DataSubscriptions":["SalesOrderHeaders"],"Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"{@odata.readLink}/SalesOrders","QueryOptions":"$top=5&$orderby=CreatedAt desc"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Customer Orders Found","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{SalesOrderId}","Subhead":"$(D,{CreatedAt},'','',{format:'medium'})","DisplayDescriptionInMobile":true,"StatusText":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","SubstatusText":"{CurrencyCode}","PreserveIconStackSpacing":false,"AccessoryType":"None","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"Selected":false},"HighlightSelectedItem":false}]}],"DesignTimeTarget":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"Customers"},"_Type":"Page","_Name":"Customers_Detail","Caption":"Details","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem2","Caption":"Item","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Rules/FillCustomObject.js"},{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Actions/NavToCustomers_Edit.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Trash","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Rules/Customers_DeleteConfirmation.js"}],"_Name":"ActionBar1"},"ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"Create Order","Enabled":true,"Visible":true,"Clickable":true,"Style":"","OnPress":"/DemoSampleApp/Actions/NavToSalesOrderHeaders_Create.action"}]}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/Customers_Edit.page":
/*!*******************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/Customers_Edit.page ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"Value":"{FirstName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCFirstName","IsVisible":true,"Separator":true,"Caption":"First Name","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"{LastName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCLastName","IsVisible":true,"Separator":true,"Caption":"Last Name","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"{PhoneNumber}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCPhone","IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"PlaceHolder","KeyboardType":"Phone","Enabled":true,"IsEditable":true},{"Value":"{EmailAddress}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCEmail","IsVisible":true,"Separator":true,"Caption":"Email","PlaceHolder":"PlaceHolder","KeyboardType":"Email","Enabled":true,"IsEditable":true}]}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Customers_Edit","Caption":"Update Customer","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Actions/Customers_UpdateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/Customers_List.page":
/*!*******************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/Customers_List.page ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ContactCell","Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"Customers","ServerSidePaging":""},"_Name":"SectionContactCell0","Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Caption","Items":[{"_Name":"soterButton","Title":"Sort","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://sort","ImagePosition":"Leading","Visible":true,"Enabled":true,"Position":"Right","_Type":"SectionHeaderItem.Type.Button","OnPress":"/DemoSampleApp/Actions/FilterCustomerList.action"},{"_Name":"filterButton","Title":"Filter","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://filter","ImagePosition":"Leading","Visible":true,"Enabled":true,"Position":"Left","_Type":"SectionHeaderItem.Type.Button"}]},"Visible":true,"EmptySection":{"FooterVisible":false},"ContactCell":{"Visible":true,"ContextMenu":{"PerformFirstActionWithFullSwipe":true},"DetailImage":"","Headline":"{LastName}","Subheadline":"{FirstName}","Description":"{City}","OnPress":"/DemoSampleApp/Actions/NavToCustomers_Detail.action","ActivityItems":[{"_Name":"SectionContactCell0ActivityItems0","ActivityType":"Phone","ActivityValue":"{PhoneNumber}"},{"_Name":"SectionContactCell0ActivityItems1","ActivityType":"Email","ActivityValue":"{EmailAddress}"}]},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"Search":{"Enabled":true,"BarcodeScanner":true}}]}],"_Type":"Page","_Name":"Customers_List","Caption":"Customers","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem1","Caption":"Item","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Rules/FillCustomerObjectAwait.js"},{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Add","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Actions/NavToCustomers_Create.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/Customers_Orders.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/Customers_Orders.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"SalesOrderHeaders","QueryOptions":"$filter=CustomerId eq '{CustomerId}'&$orderby=CreatedAt desc"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Orders Found","FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"{SalesOrderId}","Subhead":"{CustomerId}","Description":"$(D,{CreatedAt},'','',{format:'medium'})","DisplayDescriptionInMobile":true,"StatusText":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","SubstatusText":"{LifeCycleStatusName}","PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":"/DemoSampleApp/Actions/NavToSalesOrders_Details.action","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true}},"Search":{"Enabled":true,"BarcodeScanner":true},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Customers_Orders","Caption":"Customer Orders","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","Caption":"Details","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/ErrorArchive/ErrorArchive_List.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"none","OnPress":"/DemoSampleApp/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","Caption":"Error List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/Main.page":
/*!*********************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/Main.page ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable0","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Name":"SectionButton0","Title":"Customers","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://customer","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/DemoSampleApp/Actions/NavToCustomers_List.action"},{"_Name":"SectionButton1","Title":"MeterReadingTemplates","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://fridge","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/DemoSampleApp/Actions/TestActionForMeterReading/NavToMRList.action"},{"_Name":"SectionButton2","Title":"Button","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/DemoSampleApp/Actions/TestActionForMeterReading/NavToTestMRFlexible.action"},{"_Name":"SectionButton3","Title":"Groupedby","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/DemoSampleApp/Actions/TestActionForMeterReading/NavToGroupedBy.action"}]}]}],"_Type":"Page","_Name":"Main","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Save Model","Icon":"sap-icon://save","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Rules/FillCustomObject.js"}],"_Name":"ActionBar1"},"ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"LogoutToolbarItem","Caption":"Logout","Enabled":true,"Visible":true,"Clickable":true,"OnPress":"/DemoSampleApp/Actions/LogoutMessage.action"},{"_Type":"Control.Type.ToolbarItem","_Name":"UploadToolbarItem","Caption":"Sync","Enabled":true,"Visible":"$(PLT,true,true,false)","Clickable":true,"OnPress":"/DemoSampleApp/Actions/Service/SyncStartedMessage.action"},{"_Type":"Control.Type.ToolbarItem","_Name":"UpdateToolbarItem","Caption":"Update","Enabled":true,"Visible":"$(PLT,true,true,false)","Clickable":true,"OnPress":"/DemoSampleApp/Actions/AppUpdateProgressBanner.action"},{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"Upload Logs","Enabled":true,"Visible":"$(PLT,true,true,false)","Clickable":true,"Style":"","OnPress":"/DemoSampleApp/Actions/LogUpload.action"}]}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/SalesOrderHeaders_Create.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/SalesOrderHeaders_Create.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"Value":"EUR","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCurrencyCode","IsVisible":true,"Separator":true,"Caption":"Currency Code","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"18.010","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateNetAmount","IsVisible":true,"Separator":true,"Caption":"Net Amount","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"108.010","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateTaxAmount","IsVisible":true,"Separator":true,"Caption":"Tax Amount","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"126.02","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateGrossAmount","IsVisible":true,"Separator":true,"Caption":"Gross Amount","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"N","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateLifeCycleStatus","IsVisible":true,"Separator":true,"Caption":"Lifecycle Status","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"New","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateLifeCycleStatusName","IsVisible":true,"Separator":true,"Caption":"Lifecycle Status Name","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"Enter Date","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCCreatedate","IsVisible":true,"Separator":true,"Caption":"Creation Date","IsEditable":true,"Mode":"Datetime"}]}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"SalesOrderHeaders_Create","Caption":"Create Order","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Actions/SalesOrderHeaders_CreateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/SalesOrders_Details.page":
/*!************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/SalesOrders_Details.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{SalesOrderId}","_Name":"KeyValue0","KeyName":"Order Number","Visible":true},{"Value":"{LifeCycleStatusName}","_Name":"KeyValue1","KeyName":"Status","Visible":true},{"Value":"$(D,{CreatedAt},'','',{format:'medium'})","_Name":"KeyValue2","KeyName":"Created At","Visible":true},{"Value":"$(C,{NetAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","_Name":"KeyValue3","KeyName":"Net Amount","Visible":true},{"Value":"$(C,{TaxAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","_Name":"KeyValue4","KeyName":"Tax Amount","Visible":true},{"Value":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","_Name":"KeyValue5","KeyName":"Total Amount","Visible":true}],"MaxItemCount":1,"Layout":{"NumberOfColumns":2}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"SalesOrders_Details","Caption":"Order Details","PrefersLargeCaption":true,"DesignTimeTarget":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"SalesOrderHeaders"}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/SorterWindow.page":
/*!*****************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/SorterWindow.page ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"SwitchDescAsc","IsVisible":true,"Caption":"Desc/Asc","OnValueChange":"/DemoSampleApp/Rules/switchEvent.js","IsEditable":true},{"_Type":"Control.Type.FormCell.Sorter","_Name":"WCMListSorter","IsVisible":true,"AllowEmptySelection":true,"Caption":"WorkClearanceDocument asc","IsEditable":true,"SortByItems":[{"DisplayValue":"Last Name","ReturnValue":"LastName"},{"DisplayValue":"First Name","ReturnValue":"FirstName"}]}],"_Name":"FormCellSection0","Caption":"Filter options:","Visible":true}]}],"_Type":"Page","_Name":"SorterWindow","Caption":"Filter","OnLoaded":"/DemoSampleApp/Actions/FilerOnLoad.action","OnUnloaded":"/DemoSampleApp/Actions/FilterOnUnloaded.action","OnReturning":"/DemoSampleApp/Actions/FilterOnReturn.action","OnResume":"/DemoSampleApp/Actions/FilterOnResume.action","OnCustomEventDataReceived":"/DemoSampleApp/Actions/FilterCustomDatra.action","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Cancel","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Rules/TestSorterManipluation.js"}],"_Name":"ActionBar1"},"Result":"/DemoSampleApp/Rules/SetSorterRule.js"}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/Blank.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/Blank.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Page","_Name":"Blank","Controls":[{"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"Caption":"Blank","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/CommentPage.page":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/CommentPage.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"Value":"{SalesOrderId}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsVisible":true,"Separator":true,"Caption":"Order Id:","PlaceHolder":"PlaceHolder","KeyboardType":"Default","Enabled":true,"IsEditable":false},{"_Type":"Control.Type.FormCell.Note","_Name":"FormCellNote0","IsVisible":true,"Separator":true,"PlaceHolder":"PlaceHolder","MaxNumberOfLines":1,"MinNumberOfLines":4,"Enabled":true,"IsEditable":true},{"Value":"/DemoSampleApp/Rules/TestForMetereading/CommentValueTest.js","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty1","IsVisible":true,"Separator":true,"Caption":"Caption","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true}]}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"CommentPage","Caption":"CommentPage","PrefersLargeCaption":true,"ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"ToolbarItem","Enabled":true,"Visible":true,"Clickable":true,"SystemItem":"Cancel","Style":"","OnPress":"/DemoSampleApp/Actions/CloseModalPage_Cancel.action"}]},"DesignTimeTarget":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"{@odata.readLink}/SalesOrders","QueryOptions":""}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/Customers_Detail.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/Customers_Detail.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"Subhead":"{FirstName}","Footnote":"{EmailAddress}","Description":"{CustomerId}","StatusText":"{PhoneNumber}","StatusImage":"sap-icon://phone","DetailImage":"sap-icon://customer","DetailImageIsCircular":false,"BodyText":"{DateOfBirth}","HeadlineText":"{LastName}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{HouseNumber} {Street}","_Name":"KeyValue1","KeyName":"Address","Visible":true},{"Value":"{City}","_Name":"KeyValue0","KeyName":"City","Visible":true},{"Value":"{PostalCode}","_Name":"KeyValue2","KeyName":"Postal Code","Visible":true},{"Value":"{Country}","_Name":"KeyValue3","KeyName":"Country","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Customer Orders"},"Footer":{"_Name":"SectionFooter0","Caption":"See All","AttributeLabel":"/DemoSampleApp/Rules/Customers_OrderCount.js","AccessoryType":"disclosureIndicator","FooterStyle":"attribute","Visible":true,"OnPress":"/DemoSampleApp/Actions/NavToCustomers_Orders.action","UseBottomPadding":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","DataSubscriptions":["SalesOrderHeaders"],"Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"{@odata.readLink}/SalesOrders","QueryOptions":"$top=5&$orderby=CreatedAt desc"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Customer Orders Found","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{SalesOrderId}","Subhead":"$(D,{CreatedAt},'','',{format:'medium'})","DisplayDescriptionInMobile":true,"StatusText":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","SubstatusText":"{CurrencyCode}","PreserveIconStackSpacing":false,"AccessoryType":"None","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"Selected":false},"HighlightSelectedItem":false}]}],"DesignTimeTarget":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"Customers"},"_Type":"Page","_Name":"Customers_Detail","Caption":"Details","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem2","Caption":"Item","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Rules/FillCustomObject.js"},{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Actions/NavToCustomers_Edit.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Trash","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Rules/Customers_DeleteConfirmation.js"}],"_Name":"ActionBar1"},"ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"Create Order","Enabled":true,"Visible":true,"Clickable":true,"Style":"","OnPress":"/DemoSampleApp/Actions/NavToSalesOrderHeaders_Create.action"}]}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/Customers_ListMR.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/Customers_ListMR.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ContactCell","Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"Customers","QueryOptions":"$expand=SalesOrders","ServerSidePaging":""},"_Name":"SectionContactCell0","Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Caption","Items":[{"_Name":"soterButton","Title":"Sort","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://sort","ImagePosition":"Leading","Visible":true,"Enabled":true,"Position":"Right","_Type":"SectionHeaderItem.Type.Button","OnPress":"/DemoSampleApp/Actions/FilterCustomerList.action"},{"_Name":"filterButton","Title":"Filter","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://filter","ImagePosition":"Leading","Visible":true,"Enabled":true,"Position":"Left","_Type":"SectionHeaderItem.Type.Button"}]},"Visible":true,"EmptySection":{"FooterVisible":false},"ContactCell":{"Visible":true,"ContextMenu":{"PerformFirstActionWithFullSwipe":true,"Items":"{Address/Country}","LeadingItems":"/DemoSampleApp/Rules/TestForMetereading/TestRuleCustomList.js"},"DetailImage":"","Headline":"{LastName}","Subheadline":"{FirstName}","Description":"/DemoSampleApp/Rules/TestForMetereading/TestRuleCustomList.js","OnPress":"/DemoSampleApp/Actions/TestActionForMeterReading/NavToBlankPage2.action","ActivityItems":[{"_Name":"SectionContactCell0ActivityItems0","ActivityType":"Phone","ActivityValue":"{PhoneNumber}"},{"_Name":"SectionContactCell0ActivityItems1","ActivityType":"Email","ActivityValue":"{EmailAddress}"}]},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"Search":{"Enabled":true,"BarcodeScanner":true}}]}],"_Type":"Page","_Name":"Customers_ListMR","Caption":"Customers","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem1","Caption":"Item","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Rules/FillCustomerObjectAwait.js"},{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Add","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/DemoSampleApp/Actions/NavToCustomers_Create.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/GroupedSalesOrderHeader.page":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/GroupedSalesOrderHeader.page ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.SimplePropertyCollection","Target":"/DemoSampleApp/Rules/TestForMetereading/FillSalesOrderDetailTarget.js","_Name":"SectionSimplePropertyCollection0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"SimplePropertyCell":{"KeyName":"{SalesOrderId}","Value":"{ItemNumber}","AccessoryType":"DisclosureIndicator","OnPress":"/DemoSampleApp/Rules/NavToFinal.js"},"Layout":{"NumberOfColumns":1}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"GroupedSalesOrderHeader","Caption":"GroupedSalesOrderHeader","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/MeterReadingTemplate.page":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/MeterReadingTemplate.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"{@odata.readLink}/SalesOrders","ReadLink":"{@odata.readLink}"},"_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":true},"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"SalesOrder Id:","Value":"","Visible":true,"OnPress":"/DemoSampleApp/Rules/TestForMetereading/NavToSalesOrder.js"},{"_Name":"KeyValue1","KeyName":"Customer Id:","Value":"","Visible":true,"OnPress":"/DemoSampleApp/Rules/TestForMetereading/TestCallNavToCustomerDetail.js"},{"_Name":"KeyValue2","KeyName":"Net Amount:","Value":"","Visible":true},{"_Name":"KeyValue3","KeyName":"Tax Amount","Value":"","Visible":true},{"_Name":"KeyValue4","KeyName":"Gross Amount","Value":"","Visible":true},{"_Name":"KeyValue5","KeyName":"Currency Code:","Value":"","Visible":true},{"Value":"You can add Comment here","_Name":"KeyValue6","KeyName":"Comment:","Visible":true,"OnPress":"/DemoSampleApp/Rules/TestForMetereading/BarcodeNavMetadata.js"},{"Value":"{SalesOrderId}","_Name":"KeyValue7","KeyName":"KeyName","Visible":true,"OnPress":"/DemoSampleApp/Rules/TestForMetereading/TestMoreParameter.js"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"SalesOrderHeaders","ReadLink":"/DemoSampleApp/Rules/TestForMetereading/ReadLinkFiller.js"},"_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsVisible":true,"Separator":true,"Caption":"New Meter Reading","PlaceHolder":"type meter reading here","KeyboardType":"Number","AlternateInput":"Barcode","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.Title","_Name":"FormCellTitle0","IsVisible":true,"Separator":true,"Value":"","PlaceHolder":"meter reading option 2","Enabled":true,"IsEditable":true}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"MeterReadingTemplate","Caption":"MeterReadingTemplate","PrefersLargeCaption":true,"ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"ToolbarItem","Enabled":true,"Visible":true,"Clickable":true,"Style":""},{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem1","Caption":"ToolbarItem","Enabled":true,"Visible":true,"Clickable":true,"Style":""},{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem2","Caption":"ToolbarItem","Enabled":true,"Visible":true,"Clickable":true,"Style":""}]}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/MeterReadingTemplate2.page":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/MeterReadingTemplate2.page ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":true},"KeyAndValues":[{"Value":"{SalesOrderId}","_Name":"KeyValue8","KeyName":"Key","Visible":false,"OnPress":"/DemoSampleApp/Rules/dummylink.js","LinkColor":"link"},{"Value":"{SalesOrderId}","_Name":"KeyValue0","KeyName":"SalesOrder Id:","Visible":true,"OnPress":"/DemoSampleApp/Rules/TestForMetereading/NavToSalesOrder.js"},{"Value":"{CustomerId}","_Name":"KeyValue1","KeyName":"Customer Id:","Visible":true,"OnPress":"/DemoSampleApp/Rules/TestForMetereading/TestCallNavToCustomerDetail.js"},{"Value":"{NetAmount}","_Name":"KeyValue2","KeyName":"Net Amount:","Visible":true},{"Value":"{TaxAmount}","_Name":"KeyValue3","KeyName":"Tax Amount","Visible":true},{"Value":"{GrossAmount}","_Name":"KeyValue4","KeyName":"Gross Amount","Visible":true},{"Value":"{CurrencyCode}","_Name":"KeyValue5","KeyName":"Currency Code:","Visible":true},{"Value":"You can add Comment here","_Name":"KeyValue6","KeyName":"Comment:","Visible":true,"OnPress":"/DemoSampleApp/Rules/TestForMetereading/BarcodeNavMetadata.js"},{"Value":"{SalesOrderId}","_Name":"KeyValue7","KeyName":"KeyName","Visible":true,"OnPress":"/DemoSampleApp/Rules/TestForMetereading/TestMoreParameter.js"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"SalesOrderHeaders","ReadLink":""},"_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty1","IsVisible":false,"Separator":true,"Caption":"Caption","PlaceHolder":"3333333333","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsVisible":true,"Separator":true,"Caption":"New Meter Reading","PlaceHolder":"type meter reading here","KeyboardType":"Number","AlternateInput":"Barcode","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.Title","_Name":"FormCellTitle0","IsVisible":true,"Separator":true,"Value":"","PlaceHolder":"meter reading option 2","Enabled":true,"IsEditable":true}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"MeterReadingTemplate2","Caption":"MeterReadingTemplate2","PrefersLargeCaption":true,"ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"ToolbarItem","Enabled":true,"Visible":true,"Clickable":true,"Style":""},{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem1","Caption":"ToolbarItem","Enabled":true,"Visible":true,"Clickable":true,"Style":""},{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem2","Caption":"ToolbarItem","Enabled":true,"Visible":true,"Clickable":true,"Style":""}]}}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/SalesItemFInal.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/SalesItemFInal.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.SimplePropertyCollection","Target":{"Service":"/DemoSampleApp/Services/SampleServiceV2.service","EntitySet":"SalesOrderItems","QueryOptions":"$filter=SalesOrderId eq '{SalesOrderId}'"},"_Name":"SectionSimplePropertyCollection0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"SimplePropertyCell":{"KeyName":"{SalesOrderId}","Value":"{ItemNumber}","AccessoryType":"DisclosureIndicator"},"Layout":{"NumberOfColumns":1}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"SalesItemFInal","Caption":"SalesItemFInal","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/SalesOrderDetNew.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/SalesOrderDetNew.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","Target":"/DemoSampleApp/Rules/TestForMetereading/TryToFillSectionTarget.js","_Name":"SectionedTable0","Section":{"_Type":"Section.Type.KeyValue","Target":"/DemoSampleApp/Rules/TestForMetereading/TryToFillSectionTarget.js","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"Value","_Name":"KeyValue0","KeyName":"KeyName","Visible":true}],"MaxItemCount":1,"Layout":{"NumberOfColumns":1}}}],"_Type":"Page","_Name":"SalesOrderDetNew","Caption":"SalesOrderDetNew","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/SalesOrderNew.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/SalesOrderNew.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{SalesOrderId}","_Name":"KeyValue0","KeyName":"Sales Order Id","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","Target":"/DemoSampleApp/Rules/TestForMetereading/FillSalesOrderDetailTarget.js","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"SalesOrderNew","Caption":"SalesOrderNew","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/TtMeterReadingFlexible.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Pages/TestPagesForMeterReading/TtMeterReadingFlexible.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FlexibleColumnLayout","_Name":"FlexibleColumnLayout0","StartColumn":{"_Name":"StartColumn","PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/Customers_ListMR.page"},"EndColumn":{"_Name":"EndColumn","PageToOpen":"/DemoSampleApp/Pages/TestPagesForMeterReading/Blank.page"}}],"_Type":"Page","_Name":"TtMeterReadingFlexible","Caption":"TtMeterReadingFlexible"}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/DemoSampleApp/Styles/Styles.json":
/*!************************************************************!*\
  !*** ./build.definitions/DemoSampleApp/Styles/Styles.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"link":{"font-color":"#fffffe"}}');

/***/ }),

/***/ "./build.definitions/DemoSampleApp/jsconfig.json":
/*!*******************************************************!*\
  !*** ./build.definitions/DemoSampleApp/jsconfig.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map