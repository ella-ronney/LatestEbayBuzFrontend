<template>
    <div>
        <div class="text-center">
            <h2>Inventory Manager</h2>
        </div>
        <div>
            <p> TODO Get Delete Working for Inventory table</p>
            <p> TODO get pagination to match search / filter </p>
            <h5>Total Inventory Investment: {{invInvested}}</h5>
        </div>
        <div class="mx-5">
            <h2> Current Inventory</h2>
            <b-row>
                <b-col cols="4"><b-input v-model="filter" placeholder="Filter Table"></b-input></b-col>
                <b-col><b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="currentInventory"></b-pagination></b-col>
            </b-row>
            <b-table id="currentInventory" striped bordered hover :filter="filter" :items="current" :per-page="perPage" :current-page="currentPage" :fields="currFields">
                <template #cell(ebayItemId)="data">
                    <b-form-input v-model="data.value" @change="updateInv('ebayItemId',data.item, data.value)" style="width:9em"></b-form-input>
                </template>
                <template #cell(qty)="data">
                    <b-form-input v-model="data.value" type="number" @change="updateInv('qty',data.item,data.value)"></b-form-input>
                </template>
                <template #cell(datePurchased)="data">
                    <b-form-datepicker size="sm" v-model="data.value" :date-format-options="{year: 'numeric', month: 'numeric', date: 'numeric'}"></b-form-datepicker>
                </template>
                <template #cell(returnBy)="data">
                    <b-form-datepicker size="sm" v-model="data.value" :date-format-options="{year: 'numeric', month: 'numeric', date: 'numeric'}"></b-form-datepicker>
                </template>
                <template #cell(delete)="data">
                    <b-form-checkbox size="xl" @change="deleteInv(true,data.item)" v-model="data.rowSelected"></b-form-checkbox>
                </template>
            </b-table>
            <div style="display: flex; justify-content: flex-end">
                <!---<button class="btn btn-danger btn-sm" @click="deleteCurrentInv()"><b-icon-trash font-scale="2"></b-icon-trash></button>-->
                </div>
            </div>
            <div class="mx-5">
                <h2>Incoming Inventory</h2>
                <b-table id="incomingInventory" striped bordered hover :items="incoming" :fields="incFields">
                    <template #cell(datePurchased)="data">
                        <b-form-datepicker size="sm" v-model="data.value" :date-format-options="{year: 'numeric', month: 'numeric', date: 'numeric'}"></b-form-datepicker>
                    </template>
                    <template #cell(estimatedDelivery)="data">
                        <b-form-datepicker size="sm" v-model="data.value" :date-format-options="{year: 'numeric', month: 'numeric', date: 'numeric'}"></b-form-datepicker>
                    </template>
                    <template #cell(delete)="data">
                        <b-form-checkbox size="xl" @change="deleteInv(false,data.item)" v-model="data.rowSelected"></b-form-checkbox>
                    </template>
                    <template #cell(moveCurrInv)="data">
                        <b-form-checkbox size="x1" @change="updateInv('moveCurrInv',data.item, true)"></b-form-checkbox>
                    </template>
                </b-table>
                <div style="display: flex; justify-content: flex-end">
                    <!--<button class="btn btn-danger btn-sm" @click="deleteInv(false,data.item)"><b-icon-trash font-scale="2"></b-icon-trash></button>-->
                    <!--<button class="btn btn-primary btn-sm" @click="moveIncomingInv()"><b-icon-arrow-up font-scale="2" variant="light"></b-icon-arrow-up></button>-->
                    <button class="btn btn-info btn-sm"><b-icon-arrow-clockwise font-scale="2" variant="light"></b-icon-arrow-clockwise></button>
                </div>
            </div>
            <div class="mx-5">
                <button class="btn btn-info text-light" style="margin-right: 10px" @click="addInv = !addInv">Add Inventory</button>
                <button class="btn btn-info text-light" style="margin-right: 10px;" @click="inventoryId = !inventoryId">Add Inventory ID </button>
            </div>
            <div class="mx-5 mt-3" v-if="inventoryId">
                <h2 class="d-flex justify-content-center">Inventory Id Mappings</h2>
                <b-table stripped bordered hover :items="invNameMappingsTransformed" :headers="headers"></b-table>
                <h2 class="d-flex justify-content-center">Inventory ID Form</h2>
                <b-card>
                    <b-container>
                        <b-row>
                            <b-col><b-form-group label="Name"><b-form-input type="text" v-model="inventoryIdForm.invName"></b-form-input></b-form-group></b-col>
                        </b-row>
                    </b-container>
                    <div style="display: flex; justify-content: flex-end" class="mt-3">
                        <button class="btn btn-success btn-sm" @click="addInvMappings()"><b-icon-plus font-scale="2" variant="light"></b-icon-plus></button>
                    </div>
                </b-card>
            </div>
            <div class="mx-5" v-if="addInv">
                <h2 class="d-flex justify-content-center">Inventory Form</h2>
                <b-card bg-variant="light">
                    <h5>Inventory Classification</h5>
                    <b-card>
                        <b-container>
                            <b-row>
                                <b-col><b-form-group label="Current Inventory"><b-form-select :options="boolOptions" v-model="form.currentInventory" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                                <b-col><b-form-group label="Inventory ID"><b-form-select :options="boolOptions" class="form-select form-select-font-size-lg" v-model="formInvId"></b-form-select></b-form-group></b-col>
                                <b-col><b-form-group label="Dad Purchased"><b-form-select :options="boolOptions" class="form-select form-select-font-size-lg" v-model="form.dadPurchased"></b-form-select></b-form-group></b-col>
                            </b-row>
                        </b-container>
                    </b-card>
                    <h5>Order Details</h5>
                    <b-card>
                        <b-container>
                            <b-row>
                                <b-col v-if="!formInvId"><b-form-group label="Name"><b-form-input v-model="form.name" name="requiredInput"></b-form-input></b-form-group></b-col>
                                <b-col v-if="formInvId"><b-form-group label="Name"><b-form-select v-model="form.name" :options="invIdNames" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                                <b-col><b-form-group label="Quantity"><b-form-input type="number" v-model="form.qty" name="requiredInput"></b-form-input></b-form-group></b-col>
                                <b-col><b-form-group label="Condition"><b-form-select v-model="form.condition" :options="conditionCategories" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                            </b-row>
                            <b-row>
                                <b-col><b-form-group label="Vendor"><b-form-select v-model="form.vendor" :options="vendors" class="form-select form-select-font-size-lg" name="requiredInput"></b-form-select></b-form-group></b-col>
                                <b-col><b-form-group label="Warranty"><b-form-input v-model="form.warranty"></b-form-input></b-form-group></b-col>
                            </b-row>
                        </b-container>
                    </b-card>
                    <h5 class="mt-2">Pricing Details</h5>
                    <b-card>
                        <b-container>
                            <b-row>
                                <b-col><b-form-group label="Is Unit Price"><b-form-select :options="boolOptions" v-model="isUnitPrice" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                                <b-col v-if="isUnitPrice"><b-form-group label="Unit Price"><b-form-input v-model="form.unitPrice"></b-form-input></b-form-group></b-col>
                                <b-col v-if="!isUnitPrice"> <b-form-group label="Total Price"><b-form-input v-model="form.unitPrice" name="requiredInput"></b-form-input></b-form-group></b-col>
                                <b-col><b-form-group label="Sales Tax"><b-form-input v-model="form.salesTax"></b-form-input></b-form-group></b-col>
                                <b-col><b-form-group label="Payment"><b-form-select v-model="form.payment" :options="paymentMethods" class="form-select form-select-font-size-lg" name="requiredInput"></b-form-select></b-form-group></b-col>
                            </b-row>
                        </b-container>
                    </b-card>
                    <h5 class="mt-2">Tracking Details</h5>
                    <b-card>
                        <b-container>
                            <b-row>
                                <b-col><b-form-group label="Date Purchased"><b-form-input v-model="form.datePurchased" type="date" name="requiredInput"></b-form-input></b-form-group></b-col>
                                <b-col><b-form-group label="Estimated Delivery"><b-form-input v-model="form.estimatedDelivery" type="date"></b-form-input></b-form-group></b-col>
                                <b-col><b-form-group label="Tracking Number"><b-form-input v-model="form.trackingNumber"></b-form-input></b-form-group></b-col>
                            </b-row>
                        </b-container>
                    </b-card>
                </b-card>
                <div style="display: flex; justify-content: flex-end" class="mt-3">
                    <button class="btn btn-success btn-sm" @click="addInventory()"><b-icon-plus font-scale="2" variant="light"></b-icon-plus></button>
                </div>
                <b-card header="Form Data Results">
                    <pre class="m-0">{{form}}</pre>
                </b-card>
            </div>
        </div>
    </template>

    <script>
        import axios from 'axios';
        export default {
            name: 'Home',
            components: {},
            methods: {
                addInventory () {
                    if (!this.isUnitPrice) {
                        this.form.unitPrice = this.form.unitPrice / this.form.qty;
                    }
                    alert(JSON.stringify(this.form));
                    axios.post("https://localhost:44314/inventory/addincominginventory", this.form)
                        .then((response) => {
                            this.clearForm();
                            console.log(response);
                        }, (error) => {
                            this.clearForm();
                            console.log(error);
                        });
                },
                addInvMappings() {
                    axios.post("https://localhost:44314/inventory/addinventorymapping", this.inventoryIdForm)
                        .then((response) => {
                            //clear form
                            this.inventoryIdForm.invName = '';
                            console.log(response);
                        }, (error) => {
                            //clear form
                            this.inventoryIdForm.invName = '';
                            console.log(error);
                        });
                },
                deleteIncomingInv() {
                    axios.delete("https://localhost:44314/inventory/deleteinventory", { data: { ids: this.incomingRowsSelected } })
                        .then((response) => {
                            console.log(response);
                            this.incomingRowsSelected.forEach((value, index) => {
                                const rowNum = this.incoming.findIndex(i => i.idInventory == value);
                                this.incoming.splice(rowNum, 1);
                                console.log(value, index);
                            });
                        }, (error) => {
                            console.log(error);
                        });
                },
                updateIncomingInv() {

                },
                deleteInv(isCurrentInv, item) {
                    this.invDelete.push(item);
                    console.log("test" + item.idInventory);
                    axios.delete("https://localhost:44314/inventory/deleteinventory", { data: { id: item.idInventory }  })
                        .then((response) => {
                            console.log(response);
                            if (isCurrentInv) {
                                const rowNum = this.current.findIndex(i => i.idInventory == item.idInventory);
                                this.current.splice(rowNum, 1);
                            }
                            else {
                                const rowNum = this.incoming.findIndex(i => i.idInventory == item.idInventory);
                                this.incoming.splice(rowNum, 1);
                            }
                            item.checked = false;
                        }, (error) => {
                            console.log(error);
                        });
                },
                // TODO FIXME - wont update if ebay item id isnt changed
                // TODO change to update ebay item id function
                updateInv(variable,item,value) {
                    if (variable == 'ebayItemId') {
                        item.ebayItemId = value;
                        this.updatedCurrInv.push(item);
                    }
                    if (variable == 'qty') {
                        item.qty = value;
                        this.updatedCurrInv.push(item);
                    }
                    if (variable == 'moveCurrInv') {
                        item.currentInventory = value;
                        this.updatedCurrInv.push(item);
                    }

                    axios.put("https://localhost:44314/inventory/UpdateInventory", this.updatedCurrInv)
                        .then((response) => {
                            console.log(response);
                            if (variable == 'moveCurrInv') {
                                const rowNum = this.incoming.findIndex(i => i.idInventory == item.idInventory);
                                this.current.push(this.incoming[rowNum]);
                                this.incoming.splice(rowNum, 1);
                                item.selected = false;
                            }
                        }, (error) => {
                            console.log(error);
                        });

                    this.updatedCurrInv = [];
                },
                getData() {
                    axios.get("https://localhost:44314/inventory/currentinventory")
                        .then((response) => {
                            this.current = response.data;
                        });
                    axios.get("https://localhost:44314/inventory/incominginventory")
                        .then((response) => {
                            this.incoming = response.data;
                        });
                    axios.get("https://localhost:44314/inventory/InventoryInvested")
                        .then((response) => {
                            this.invInvested = response.data;
                        });
                    axios.get("https://localhost:44314/inventory/inventorymappings")
                        .then((response) => {
                            this.invIdNames = response.data;
                        })
                },
                getCheckedItems(current, item, number, checked) {
                    console.log(number);
                    if (current) {
                        if (checked) {
                            this.currentRowsSelected.push(item.idInventory);
                            console.log(item.ebayItemId);
                        }
                        else {
                            this.currentRowsSelected = this.currentRowsSelected.filter(i => i != item.idInventory);
                        }
                    }
                    else {
                        if (checked) {
                            this.incomingRowsSelected.push(item.idInventory);
                        }
                        else {
                            this.incomingRowsSelected = this.incomingRowsSelected.filter(i => i != item.idInventory);
                        }
                    }
                },
                clearForm() {
                    this.form.currentInventory = false;
                    this.form.name = '';
                    this.form.qty = '';
                    this.form.vendor = '';
                    this.form.payment = '';
                    this.form.warranty = "NA";
                    this.form.unitPrice = '';
                    this.form.salesTax = null;
                    this.form.discount = null;
                    this.form.datePurchased = '';
                    this.form.estimatedDelivery = null;
                    this.form.trackingNumber = 'NA';
                    this.form.condition = '';
                    this.form.dadPurchased = false;
                },
            },
            data() {
                return {
                    perPage: 5,
                    currentPage: 1,
                    filter: '',
                    form: {
                        currentInventory: 'false', condition: 'New',
                        name: '', qty: '',
                        vendor: '', payment: '', warranty: 'NA',
                        unitPrice: '', salesTax: null, discount: null,
                        datePurchased: '', estimatedDelivery: null, trackingNumber: 'NA',
                        dadPurchased: 'false',
                    },
                    inventoryIdForm: {
                        invName: ''
                    },
                    currFields: [
                        { key: 'ebayItemId', label: 'eBay Item Id' },
                        { key: 'name', label: 'Name' },
                        { key: 'qty', label: 'Quantity' },
                        { key: 'unitPrice', label: 'Price/Piece' },
                        { key: 'vendor', label: 'Vendor' },
                        { key: 'condition', label: 'Condition'},
                        { key: 'datePurchased', label: 'Date Purchased' },
                        { key: 'warranty', label: 'Warranty' },
                        { key: 'returnBy', label: 'Return By' },
                        { key: 'delete', label: 'Delete' },
                    ],
                    current: [],
                    incoming: [],
                    invDelete: [],
                    incFields: [
                        { key: 'name', label: 'Name' },
                        { key: 'qty', label: 'Quantity' },
                        { key: 'unitPrice', label: 'Unit Price' },
                        { key: 'vendor', label: 'Vendor' },
                        { key: 'condition', label: 'Condition'},
                        { key: 'datePurchased', label: 'Date Purchased' },
                        { key: 'estimatedDelivery', label: 'Estimated Delivery' },
                        { key: 'trackingNumber', label: 'Tracking' },
                        { key: 'delete', label: 'Delete' },
                        { key: 'moveCurrInv', label: 'Move Current Inv'}
                    ],
                    paymentMethods: ['Wells Fargo - 0777', 'Wells Fargo - 9386', 'Wells Fargo - Checking',
                        'Wells Fargo -  4524', 'Chase - Amazon', 'Chase - Freedom',
                        'American Express - 41002', 'American Express - 01009', 'American Express - Amazon',
                        'PayPal', 'Sychrony'],
                    vendors: ['Amazon', 'Woot', 'Best Buy', 'B&H', 'Target', 'Harman Audio', 'Vitamix', 'Costco', 'eBay'],
                    conditionCategories: ['New', 'Refurbished', 'Used - Like New', 'Used - Very Good',
                        'Used - Good', 'Used - Acceptable', 'Used'],
                    boolOptions: ['true', 'false'],
                    currentRowsSelected: [],
                    incomingRowsSelected: [],
                    updatedCurrInv: [],
                    inventoryId: false,
                    addInv: false,
                    headers: [{
                        text: 'Column',
                        value: 'item'
                    }],
                    formInvId: false,
                    invIdNames: [],
                    invInvested: 0,
                    inventoryIds: [],
                    isUnitPrice: false,
                }
            },
            computed: {
                rows() {
                    return this.current.length;
                },
                invNameMappingsTransformed() {
                    return this.invIdNames.map(item => ({ item }));
                }
            },
            mounted: function () {
                this.getData();
            }
        };
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
                <style scoped>
                    input[name=requiredInput], select[name=requiredInput] {
                        border-color: red;
                    }

                    table {
                        --bs-table-striped-bg: #bcedf761;
                        --bs-table-hover-bg: #67e7efa8;
                    }
                </style>

