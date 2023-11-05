<template>
    <div>
        <div class="text-center">
            <h2>Resolution Center</h2>
            <h5> TODO Add delete functionality to ebay returns</h5>
            <h5> TODO add ability to edit fields to returns </h5>
        </div>
        <div class="mx-5">
            <h2>Vendor Returns</h2>
            <b-table striped bordered hover :items="vendorReturns" :fields="vendorReturnFields">
                <template #cell(delete)="data">
                    <b-form-checkbox size="xl" @change="deleteReturn(data.item)" v-model="data.rowSelected"></b-form-checkbox>
                </template>
                <template #cell(deliveryDate)="data">
                    <b-form-datepicker size="sm" v-model="data.value" @change="updateVendorReturn('returnDate', data.item, data.value)" :date-format-options="{year: 'numeric', month: 'numeric', date: 'numeric'}"></b-form-datepicker>
                </template>
            </b-table>
            <div style="display: flex; justify-content: flex-end">
                <button class="btn btn-danger btm-sm" @click="deleteVendorReturn()"><b-icon-trash font-scale="2"></b-icon-trash></button>
                <button class="btn btn-info btn-sm"><b-icon-arrow-clockwise font-scale="2" variant="light"></b-icon-arrow-clockwise></button>
            </div>
        </div>
        <div class="mx-5">
            <h2>eBay Returns</h2>
            <b-table striped bordered hover :items="eBayReturns" :fields="eBayReturnFields">

            </b-table>
            <div style="display: flex; justify-content: flex-end">
                <button class="btn btn-danger btn-sm" @click="deleteEbayReturn()"><b-icon-trash font-scale="2"></b-icon-trash></button>
                <button class="btn btn-primary btn-sm" @click="moveEbayReturnsToVendor()"><b-icon-arrow-up font-scale="2" variant="light"></b-icon-arrow-up></button>
                <button class="btn btn-info btn-sm"><b-icon-arrow-clockwise font-scale="2" variant="light"></b-icon-arrow-clockwise></button>
            </div>
        </div>
        <div class="mx-5">
            <h2 class="d-flex justify-content-center">Return Form</h2>
            <b-card bg-variant="light">
                <h5>Return Info</h5>
                <b-card>
                    <b-container>
                        <b-row>
                            <b-col><b-form-group label="Item Name"><b-form-input v-model="returnForm.returnItemName"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label="Qty"><b-form-input v-model="returnForm.returnedQty" typeof="number"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label="refund Total"><b-form-input v-model="returnForm.refundTotal" typeof="number"></b-form-input></b-form-group></b-col>
                        </b-row>
                        <b-row>
                            <b-col><b-form-group label="Tracking Number"><b-form-input v-model="returnForm.returnTrackingNumber"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label="Vendor Return"><b-form-select v-model="returnForm.isVendorReturn" :options="boolOptions" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                        </b-row>
                    </b-container>
                </b-card>
                <div v-if="returnForm.isVendorReturn == 'Yes'">
                    <h5>Vendor Return Info</h5>
                    <b-card>
                        <b-container>
                            <b-row>
                                <b-col><b-form-group label="Account"><b-form-input v-model="returnForm.account"></b-form-input></b-form-group></b-col>
                                <b-col><b-form-group label="Payment Method"><b-form-select v-model="returnForm.paymentMethod" :options="paymentMethods" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                                <b-col><b-form-group label="Vendor"><b-form-select v-model="returnForm.returnVendor" :options="vendors" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                            </b-row>
                            <b-row>
                                <b-col><b-form-group label="Return Date"><b-form-input v-model="returnForm.returnDate" type="date"></b-form-input></b-form-group></b-col>
                                <b-col><b-form-group label="Delivery Date"><b-form-input v-model="returnForm.deliveryDate" type="date"></b-form-input></b-form-group></b-col>
                            </b-row>
                        </b-container>
                    </b-card>
                </div>
                <div v-if="returnForm.isVendorReturn == 'No'">
                    <h5>eBay Return Info</h5>
                    <b-card>
                        <b-container>
                            <b-row>
                                <b-col><b-form-group label="Return Reason"><b-form-select v-model="returnForm.returnReason" :options="returnReason" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                                <b-col><b-form-group label="Warranty Claim"><b-form-select v-model="returnForm.warrantyClaim" :options="boolOptions" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                                <b-col><b-form-group label="Sent Back To Vendor"><b-form-select v-model="returnForm.sendBackToVendor" :options="boolOptions" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                            </b-row>
                        </b-container>
                    </b-card>
                </div>
            </b-card>
            <div style="display: flex; justify-content: flex-end" class="mt-3">
                <button class="btn btn-success btn-sm" @click="sendReturnForm()"><b-icon-plus font-scale="2" variant="light"></b-icon-plus></button>
            </div>
            <b-card header="Return Data Results">
                <pre class="m-0">{{returnForm}}</pre>
            </b-card>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'ResolutionCenter',
        methods: {
            updateVendorReturn(updatedVariableName, item, value) {
                if (updatedVariableName == 'returnDate') {
                    item.returnDate = value;
                    this.updatedVendorReturns.push(item);
                }

                axios.put("https://localhost:44314/ResolutionCenter/UpdateVendorReturn", this.updatedVendorReturns)
                    .then((response) => {
                        console.log(response);
                    }, (error) => {
                        console.log(error);
                    });
                this.updatedVendorReturns = [];
            },
            sendReturnForm() {
                axios.post("https://localhost:44314/ResolutionCenter/AddReturn", this.returnForm)
                    .then((response) => {
                        this.clearForm();
                        console.log(response);
                    }, (error) => {
                        this.clearForm();
                        console.log(error);
                    });
            },
            getRecords() {
                axios.get("https://localhost:44314/ResolutionCenter/VendorReturns")
                    .then((response) => {
                        this.vendorReturns = response.data;
                    });
                axios.get("https://localhost:44314/ResolutionCenter/eBayReturns")
                    .then((response) => {
                        this.eBayReturns = response.data;
                    });
            },
            deleteReturn(item) {
                axios.delete("https://localhost:44314/ResolutionCenter/DeleteReturn", { data: { id: item.idReturns } })
                    .then((response) => {
                        console.log(response);
                        const rowNum = this.vendorReturns.findIndex(i => i.idReturns == item.idReturns);
                        this.vendorReturns.splice(rowNum, 1);
                        item.checked = false;
                    }, (error) => {
                        console.log(error);
                    });
            },
            clearForm() {
                this.returnForm.returnItemName = '';
                this.returnForm.returnedQty = 0;
                this.returnForm.refundTotal = 0.0;
                this.returnForm.returnTrackingNumber = '';
                this.returnForm.paymentMethod = '';
                this.returnForm.returnVendor = '';
                this.returnForm.returnReason = '';
                this.returnForm.warrantyClaim = 'No';
                this.returnForm.sendBackToVendor = 'No';
                this.returnForm.isVendorReturn = '';
                this.returnForm.returnDate = '';
                this.returnForm.deliveryDate = '';
                this.returnForm.account = '';
            },
        },
        data() {
            return {
                vendorReturns: [],
                eBayReturns: [],
                updatedVendorReturns : [],
                vendorReturnFields: [
                    { key: 'returnItemName', label: 'Item Name' },
                    { key: 'account', label: 'Account' },
                    { key: 'orderNumber', label: 'Order Number' },
                    { key: 'returnedQty', label: 'Qty Returned' },
                    { key: 'refundTotal', label: 'Expected Refund' },
                    { key: 'returnTrackingNumber', label: 'Tracking' },
                    { key: 'paymentMethod', label: 'Payment' },
                    { key: 'returnVendor', label: 'Vendor' },
                    { key: 'returnDate', label: 'Date Returned' },
                    { key: 'deliveryDate', label: 'Date Delivered' },
                    { key: 'delete', label: 'Delete' }
                ],
                eBayReturnFields: [
                    { key: 'returnItemName', label: 'Item Name' },
                    { key: 'returnedQty', label: 'Qty Returned' },
                    { key: 'refundTotal', label: 'Refund Total' },
                    { key: 'returnTrackingNumber', label: 'Tracking' },
                    { key: 'returnReason', label: 'Return Reason' },
                    { key: 'warrantyClaim', label: 'Warranty Claim' },
                    { key: 'sendBackToVendor', label: 'Returned To Vendor' },
                    { key: 'delete', label: 'Delete' },
                ],
                paymentMethods: ['Wells Fargo - 4524', 'Wells Fargo - 0777', 'Wells Fargo - 9386', 'Wells Fargo - Checking',
                    'Chase - Amazon', 'Chase - Freedom', 'Chase - Checking',
                    'American Express - 41002', 'American Express - 01009', 'American Express - Amazon',
                    'PayPal', 'Sychrony', 'Target Card'],
                vendors: ['Amazon', 'Woot', 'Best Buy', 'B&H', 'Target', 'Harman Audio', 'Vitamix', 'Costco', 'eBay'],
                returnForm: {
                    returnItemName: '',
                    returnedQty: 0,
                    refundTotal: 0.0,
                    returnTrackingNumber: '',
                    paymentMethod: '',
                    returnVendor: '',
                    returnReason: '',
                    warrantyClaim: 'No',
                    sendBackToVendor: 'No',
                    isVendorReturn: 'Yes',
                    returnDate: '',
                    deliveryDate: '',
                    account: '',
                },
                boolOptions: ['Yes', 'No'],
                returnReason: ['Remorse Return', 'Defective - True', 'Defective - False'],
            }
        },
        mounted: function () {
            this.getRecords();
        }
    }
</script>