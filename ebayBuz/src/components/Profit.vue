<template>
    <div>
        <div class="text-center">
            <h2>Profit Manager</h2>
        </div>
        <div class="mx-5">
            <h5>Profit For The Year To Date: {{totalProfit}}</h5>
        </div>
        <div class="mx-5">
            <h5>Profit Breakdown</h5>
            <b-table id="monthlyProfit" stripped bordered hover :items="mProfit" :fields="months"></b-table>
        </div>
        <div class="mx-5">
            <!--<button class="btn btn-info text-light" style="margin-right: 10px;" @click="sale = !sale">Add Sale</button>
            <button class="btn btn-info text-light" style="margin-right: 10px;" @click="quickAdd = !quickAdd">Short - Add Sale</button>-->
            <button class="btn btn-info text-light" style="margin-right: 10px;" @click="readExcelFile =!readExcelFile">Add Excel File</button>
            <button class="btn btn-info text-light" style="margin-right: 10px;" @click="showEbaySales = !showEbaySales">Show eBay Sales</button>
        </div>
        <div class="mx-5" v-if="readExcelFile">
            <b-card bg-variant="light">
                <b-card>
                    <b-row>
                        <b-form-group label="eBay Excel File Name"><b-form-input v-model="eBayExcelFile.filePath"></b-form-input></b-form-group>
                    </b-row>
                    <b-row>
                        <b-col><b-form-group label="Start Date"><b-form-input v-model="eBayExcelFile.startDate" type="date"></b-form-input></b-form-group></b-col>
                        <b-col><b-form-group label="End Date"><b-form-input v-model="eBayExcelFile.endDate" type="date"></b-form-input></b-form-group></b-col>
                    </b-row>
                </b-card>
            </b-card>
            <div style="display: flex; justify-content: flex-end" class="mt-3">
                <button class="btn btn-info text-light" style="margin-right: 10px;" @click="ReadEbayExcelFile()">Read Excel File</button>
            </div>
        </div>
        <div class="mx-5" v-if="showEbaySales">
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="eBayRecords"></b-pagination>
            <b-table id="eBayRecords" stripped bordered hover :items="eBaySaleRecords" :per-page="perPage" :currentPage="currentPage" :fields="eBaySaleRecordTableCol">
                <template #cell(totalSellingCosts)="data">
                    <b-form-input v-model="data.value" type="double" @change="UpdateEbaySaleRecords(data.item,data.value)"></b-form-input>
                </template>
                <template #cell(edit)="data">
                    <b-form-checkbox size="xl" @change="getCheckedEbaySales(data.item, data.rowSelected)" v-model="data.rowSelected"></b-form-checkbox>
                </template>
            </b-table>
            <div style="display: flex; justify-content: flex-end">
                <button class="btn btn-danger btn-sm"><b-icon-trash font-scale="2"></b-icon-trash></button>
                <button class="btn btn-info btn-sm"><b-icon-arrow-clockwise font-scale="2" variant="light"></b-icon-arrow-clockwise></button>
            </div>
        </div>
        <div class="mx-5" v-if="sale">
            <h2 class="d-flex justify-content-center">Sale Details</h2>
            <b-card bg-variant="light">
                <h5 class="mt-2">Sale Type</h5>
                <b-card>
                    <b-container>
                        <b-row>
                            <b-col><b-form-group label="Type of Sale"><b-form-select v-model="profitForm.saleType" :options="typeOfSale" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                        </b-row>
                    </b-container>
                </b-card>
                <h5 class="mt-2">Sale Details</h5>
                <b-card>
                    <b-container>
                        <b-row>
                            <b-col v-if="profitForm.saleType=='Adorama'"><b-form-group label="Name"><b-form-input v-model="profitForm.soldItemName"></b-form-input></b-form-group></b-col>
                            <b-col v-if="profitForm.saleType!='Adorama'"><b-form-group label="eBay Id"><b-form-input v-model="profitForm.ebayId"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label=" Quantity Sold"><b-form-input type="number" v-model="profitForm.qtySold"></b-form-input></b-form-group></b-col>
                        </b-row>
                        <b-row>
                            <b-col><b-form-group label="Record Date"><b-form-input type="date" v-model="profitForm.recordDate"></b-form-input></b-form-group></b-col>
                        </b-row>
                    </b-container>
                </b-card>
                <h5 class="mt-2">Pricing Details</h5>
                <b-card>
                    <b-container>
                        <b-row>
                            <b-col v-if="profitForm.saleType=='Adorama'"><b-form-group label="Total Cost"><b-form-input v-model="profitForm.totalCost"></b-form-input></b-form-group></b-col>
                            <b-col v-if="profitForm.saleType!='Adorama'"><b-form-group label="Shipping Costs"><b-form-input v-model="profitForm.shippingCost"></b-form-input></b-form-group></b-col>
                            <b-col v-if="profitForm.saleType=='Adorama'"><b-form-group label="Sales Tax"><b-form-input v-model="profitForm.salesTax"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label="eBay Fees"><b-form-input v-model="profitForm.ebayFees"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label="eBay Promo Fees"><b-form-input v-model="profitForm.promoFees"></b-form-input></b-form-group></b-col>
                            <b-col> <b-form-group label="Total Price Sold"><b-form-input v-model="profitForm.totalPriceSold"></b-form-input></b-form-group></b-col>
                        </b-row>
                    </b-container>
                </b-card>
            </b-card>
            <div style="display: flex; justify-content: flex-end" class="mt-3">
                <button class="btn btn-success btn-sm" @click="SendProfitForm()"><b-icon-plus font-scale="2" variant="light"></b-icon-plus></button>
            </div>
            <b-card header="Form Data Results">
                <pre class="m-0">{{profitForm}}</pre>
            </b-card>
        </div>
        <div class="mx-5" v-if="quickAdd">
            <h2 class="d-flex justify-content-center">Sale Details</h2>
            <b-card bg-variant="light">
                <b-card>
                    <b-container>
                        <b-row>
                            <b-col><b-form-group label="Name"><b-form-input v-model="quickProfitForm.itemName"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label="Type of Sale"><b-form-select v-model="quickProfitForm.saleType" :options="typeOfSale" class="form-select form-select-font-size-lg"></b-form-select></b-form-group></b-col>
                            <b-col><b-form-group label=" Quantity Sold"><b-form-input type="number" v-model="quickProfitForm.qtySold"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label="Record Date"><b-form-input type="date" v-model="quickProfitForm.recordDate"></b-form-input></b-form-group></b-col>
                        </b-row>
                        <b-row>
                            <b-col><b-form-group label="Total Cost"><b-form-input v-model="quickProfitForm.totalCost"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label="Shipping Costs"><b-form-input v-model="quickProfitForm.shippingCost"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label="eBay Fees"><b-form-input v-model="quickProfitForm.ebayFees"></b-form-input></b-form-group></b-col>
                            <b-col><b-form-group label="eBay Promo Fees"><b-form-input v-model="quickProfitForm.promoFees"></b-form-input></b-form-group></b-col>
                            <b-col> <b-form-group label="Total Price Sold"><b-form-input v-model="quickProfitForm.totalPriceSold"></b-form-input></b-form-group></b-col>
                        </b-row>
                    </b-container>
                </b-card>
            </b-card>
            <div style="display: flex; justify-content: flex-end" class="mt-3">
                <button class="btn btn-success btn-sm" @click="SendQuickProfitForm()"><b-icon-plus font-scale="2" variant="light"></b-icon-plus></button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Profit',
        methods: {
            GetData() {
                axios.get("https://localhost:44314/EbaySaleRecord/totalprofit")
                    .then((response) => {
                        this.totalProfit = response.data;
                        console.log(response);
                    }, (error) => {
                        console.log(error);
                    });
                axios.get("https://localhost:44314/EbaySaleRecord/monthlyprofit")
                    .then((response) => {
                        this.mProfit = response.data;
                    }),
                axios.get("https://localhost:44314/EbaySaleRecord/eBayExcelSaleRecords")
                    .then((response) => {
                        this.eBaySaleRecords = response.data;
                    })
            },
            UpdateEbaySaleRecords(item, value) {
                item.totalSellingCosts = value;
                this.eBaySaleRecordsToUpdate.push(item);
                axios.put("https://localhost:44314/EbaySaleRecord/UpdateEbaySaleRecord", this.eBaySaleRecordsToUpdate)
                    .then((response) => {
                        console.log(response);
                    }, (error) => {
                        console.log(error);
                    });
            },
            /*DeleteEbaySaleRecords() {

            },*/
            SendProfitForm() {
                axios.post("https://localhost:44314/sales/addsalesrecord",this.profitForm)
                    .then((response) => {
                        this.clearProfitForm();
                        console.log(response);
                    }, (error) => {
                        this.clearProfitForm();
                        console.log(error);
                    });
            },
            SendQuickProfitForm() {
                axios.post("https://localhost:44314/sales/addquicksalesrecord", this.quickProfitForm)
                    .then((response) => {
                        this.clearQuickProfitForm();
                        console.log(response);
                    }, (error) => {
                        this.clearQuickProfitForm();
                        console.log(error);
                    });
            },
            ReadEbayExcelFile() {
                axios.post("https://localhost:44314/EbaySaleRecord/AddEbayExcelRecords", this.eBayExcelFile)
                    .then((response) => {
                        console.log(response);
                    }, (error) => {
                        console.log(error);
                    });
            },
            getCheckedEbaySales(item, checked) {
                if (checked) {
                    console.log(item.listingTitle);
                    this.eBaySaleRecordsSelected.push(item);
                }
                else {
                    this.eBaySaleRecordsSelected = this.eBaySaleRecordsSelected.filter(i => i.idEbaySaleRecord != item.idEbaySaleRecord);
                }
            },
            clearProfitForm() {
                this.profitForm.itemName = '';
                this.profitForm.totalCost = '';
                this.profitForm.qtySold = '';
                this.profitForm.totalPriceSold = '';
                this.profitForm.saleType = '';
                this.profitForm.recordDate = '';
                this.profitForm.ebayId = '';
                this.profitForm.shippingCost = '';
                this.profitForm.ebayFees = '';
                this.profitForm.promoFees = '';
                this.profitForm.salesTax = '';
            },
            clearQuickProfitForm() {
                this.quickProfitForm.itemName = '';
                this.quickProfitForm.totalCost = '';
                this.quickProfitForm.shippingCost = '';
                this.quickProfitForm.ebayFees = '';
                this.quickProfitForm.promoFees = '';
                this.quickProfitForm.qtySold = '';
                this.quickProfitForm.totalPriceSold = '';
                this.quickProfitForm.saleType = '';
                this.quickProfitForm.recordDate = '';
            },
        },
        data() {
            return {
                eBayExcelFile: {
                    filePath: '',
                    startDate: '',
                    endDate: '',
                },
                readExcelFile: false,
                profitForm: {
                    itemName: '',
                    totalCost: '',
                    shippingCost: '',
                    ebayFees: '',
                    promoFees: '',
                    qtySold: '',
                    totalPriceSold: '',
                    saleType: '',
                    recordDate: '',
                    ebayId: '',
                    salesTax: '',
                },
                quickProfitForm: {
                    itemName: '',
                    totalCost: '',
                    shippingCost: '',
                    ebayFees: '',
                    promoFees: '',
                    qtySold: '',
                    totalPriceSold: '',
                    saleType: '',
                    recordDate: '',
                },
                eBaySaleRecordTableCol: [
                    { key: 'listingTitle', label: 'Name' },
                    { key: 'ebayItemId', label: 'eBay Item ID' },
                    { key: 'quantitySold', label: 'Quantity Sold' },
                    { key: 'totalSales', label: 'Total Sales' },
                    { key: 'totalProfit', label: 'Total Profit' },
                    { key: 'totalSellingCosts', label: 'Total Selling Costs' },
                    { key: 'avgSellingPrice', label: 'Avg Selling Price' },
                    { key: 'profitPercentage', label: 'Profit Percentage'},
                    { key: 'edit', label: 'Edit'},
                ],
                typeOfSale: ['Adorama', 'eBay', 'Facebook'],
                months: ['month','sum'],
                totalProfit: '',
                mProfit: [],
                eBaySaleRecords: [],
                eBaySaleRecordsSelected: [],
                eBaySaleRecordsToUpdate: [],
                perPage: 30,
                currentPage: 1,
                showEbaySales: false,
                sale: false,
                quickAdd: false,
            }
        },
        computed: {
            rows() {
                return this.eBaySaleRecords.length;
            }
        },
        mounted: function () {
            this.GetData();
        }
    }
</script>

<style scoped>
    table {
        --bs-table-striped-bg: #bcedf761;
        --bs-table-hover-bg: #67e7efa8;
    }
</style>